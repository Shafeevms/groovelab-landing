"use client";

import React from 'react';
import { useConsent } from '@/lib/consent';
import { useLanguage } from '@/lib/i18n';
import posthog from 'posthog-js';

export default function ConsentBanner() {
  const { consent, needsConsent, grant, deny } = useConsent();
  const { t } = useLanguage();

  // Render ONLY when consent is required by region AND user has not made a choice yet
  if (!needsConsent || consent !== 'unknown') {
    return null;
  }

  const handleAccept = () => {
    grant();
    // Enable capturing immediately. Guard ensures opt_in (and $opt_in event) fires
    // EXACTLY ONCE — only on explicit "Accept" click, never on re-renders/re-mounts/reloads.
    // (geo-aware: banner only mounts when needsConsent && unknown; after grant it unmounts)
    try {
      if (!posthog.has_opted_in_capturing()) {
        posthog.opt_in_capturing();
      }
    } catch {
      // safe no-op if posthog not ready
    }
  };

  const handleDecline = () => {
    deny();
    try {
      posthog.opt_out_capturing();
    } catch {
      // safe no-op
    }
  };

  const consentText = t.consent?.banner || 'We use privacy-friendly analytics to understand site usage. Your choice is respected.';
  const acceptText = t.consent?.accept || 'Accept';
  const declineText = t.consent?.decline || 'Decline';
  const privacyText = t.consent?.privacy || 'Privacy Policy';

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[70] border-t border-[#262626] bg-[#111111]/95 backdrop-blur supports-[backdrop-filter]:bg-[#111111]/90"
      role="dialog"
      aria-label="Analytics consent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm">
          <div className="flex-1 text-[#a1a1aa] leading-snug">
            {consentText}{' '}
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a3e635] hover:underline underline-offset-2"
            >
              {privacyText}
            </a>
            .
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-1.5 rounded-lg border border-[#262626] text-[#a1a1aa] hover:text-white hover:border-[#3f3f46] transition-colors text-sm font-medium"
            >
              {declineText}
            </button>
            <button
              onClick={handleAccept}
              className="px-5 py-1.5 rounded-lg bg-[#a3e635] text-[#0a0a0a] hover:bg-[#b8f04a] active:bg-[#9ed42e] transition-colors text-sm font-semibold"
            >
              {acceptText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
