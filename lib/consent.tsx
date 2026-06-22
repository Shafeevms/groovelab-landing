"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

export type ConsentState = 'unknown' | 'granted' | 'denied';

const STORAGE_KEY = 'drumion_consent_v1';

// Countries/regions that require explicit consent for analytics (GDPR/UK GDPR/LGPD + CCPA for CA)
const STRICT_CONSENT_COUNTRIES = new Set([
  // EU + EEA
  'AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GR', 'HR', 'HU',
  'IE', 'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK',
  // UK GDPR
  'GB', 'UK',
  // LGPD Brazil
  'BR',
]);

interface ConsentContextValue {
  consent: ConsentState;
  country: string | null;
  needsConsent: boolean;
  grant: () => void;
  deny: () => void;
  reset: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

function getClientCountry(): string | null {
  if (typeof window === 'undefined' || typeof Intl === 'undefined') {
    return null;
  }
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!tz) return null;

    // Europe → UK or generic EU/EEA (rough but sufficient for fallback when no CF header)
    if (tz.startsWith('Europe/')) {
      if (tz === 'Europe/London' || tz.includes('London')) {
        return 'GB';
      }
      // Conservative for other European timezones in fallback (dev, non-CF): require consent
      return 'EU';
    }

    // Brazil main timezones
    const brTzs = [
      'America/Sao_Paulo', 'America/Bahia', 'America/Fortaleza', 'America/Recife',
      'America/Manaus', 'America/Belem', 'America/Cuiaba', 'America/Porto_Velho',
      'America/Rio_Branco', 'America/Maceio', 'America/Araguaina', 'America/Santarem',
      'America/Campo_Grande', 'America/Boa_Vista',
    ];
    if (brTzs.includes(tz)) {
      return 'BR';
    }

    // California (primary CCPA signal via tz when CF only gives 'US')
    if (tz === 'America/Los_Angeles' || tz === 'US/Pacific' || tz.includes('Los_Angeles')) {
      return 'US-CA';
    }

    // Other common US timezones (non-CA) → return 'US' so needsConsent('US') === false
    const usTzs = [
      'America/New_York', 'America/Chicago', 'America/Denver', 'America/Phoenix',
      'America/Anchorage', 'Pacific/Honolulu', 'US/Eastern', 'US/Central',
      'US/Mountain', 'US/Arizona', 'US/Hawaii', 'America/Detroit', 'America/Indiana/Indianapolis',
    ];
    if (usTzs.some((u) => tz === u || tz.includes(u.split('/').pop() || ''))) {
      return 'US';
    }

    return null;
  } catch {
    return null;
  }
}

export function needsConsent(country: string | null): boolean {
  if (!country) return true; // SAFE DEFAULT: if cannot determine region → require consent (strict)

  const c = country.toUpperCase().trim();

  if (c === 'EU' || c === 'EEA') return true;
  if (c === 'US-CA') return true;
  if (STRICT_CONSENT_COUNTRIES.has(c)) return true;

  // US non-CA explicitly does not require (only CA for CCPA in this strict setup)
  if (c === 'US' || c.startsWith('US-')) return false;

  return false;
}

export function ConsentProvider({
  children,
  initialCountry,
}: {
  children: ReactNode;
  initialCountry?: string | null;
}) {
  // Read stored consent synchronously on first client render (so init decision is correct)
  const [consent, setConsent] = useState<ConsentState>(() => {
    if (typeof window === 'undefined') return 'unknown';
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'granted' || stored === 'denied') return stored;
    } catch {
      // ignore
    }
    return 'unknown';
  });

  const [country, setCountry] = useState<string | null>(() => initialCountry || null);

  useEffect(() => {
    // Resolve / enhance country (server CF value wins; client tz fallback only if missing)
    let resolved = initialCountry || null;

    if (!resolved) {
      const client = getClientCountry();
      if (client) resolved = client;
    } else if (resolved.toUpperCase() === 'US') {
      // Enhance US from server with client tz for CA detection (best effort)
      const client = getClientCountry();
      if (client === 'US-CA') {
        resolved = 'US-CA';
      }
    }

    if (resolved) {
      setCountry(resolved);
    }

    // If no stored value, leave as 'unknown' (already set in useState)
    // Re-sync stored in case it changed in another tab (optional, simple approach)
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'granted' || stored === 'denied') {
        setConsent(stored);
      }
    } catch {
      // ignore
    }
  }, [initialCountry]);

  const grant = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, 'granted');
    } catch {
      // localStorage may be unavailable (private mode etc) — still update in-memory
    }
    setConsent('granted');
  }, []);

  const deny = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, 'denied');
    } catch {
      // ignore
    }
    setConsent('denied');
  }, []);

  const reset = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setConsent('unknown');
  }, []);

  const needs = needsConsent(country);

  const value: ConsentContextValue = {
    consent,
    country,
    needsConsent: needs,
    grant,
    deny,
    reset,
  };

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    // Safe no-op fallback (e.g. outside provider during SSR or tests)
    return {
      consent: 'unknown',
      country: null,
      needsConsent: true,
      grant: () => {},
      deny: () => {},
      reset: () => {},
    };
  }
  return ctx;
}
