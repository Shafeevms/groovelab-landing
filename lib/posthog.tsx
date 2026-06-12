"use client";

import { useEffect } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useConsent, needsConsent } from './consent';

/**
 * PostHog provider — strict GDPR-first production setup (geo-aware consent).
 *
 * - EU host via NEXT_PUBLIC_POSTHOG_HOST (founder sets eu.i.posthog.com).
 * - Cookieless: persistence 'localStorage' only.
 * - autocapture: false, disable_session_recording: true.
 * - DNT respected: init completely skipped if DNT=1.
 * - If no NEXT_PUBLIC_POSTHOG_KEY: completely silent (no init, no network).
 * - Geo + consent: see lib/consent.tsx. In regions without legal requirement (most of world)
 *   tracking starts immediately (opt-in). In EU/EEA/UK/BR/(US-CA) we start opted-out and
 *   only enable after explicit grant().
 * - Agreed events only: cta_click (on all CTAs w/ location + plan?), language_change (w/ language), $pageview (manual).
 *   Other previous events (solo_cta_click, pricing_tab_switch) removed as not in spec.
 *   capture is a safe no-op while opted out.
 * - Pageviews are tracked explicitly via <PostHogPageView /> (handles landing + legal pages
 *   and client-side route transitions).
 */
function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined' || !pathname) return;

    // Build full URL for the $pageview payload (standard practice)
    let url = window.origin + pathname;
    const qs = searchParams?.toString();
    if (qs) {
      url += `?${qs}`;
    }

    // Safe: when opted-out or not initialized this is a no-op inside posthog-js
    posthog.capture('$pageview', { $current_url: url });
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const { consent, country } = useConsent();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) {
      // No key configured — silently skip (no analytics, no errors, no network calls)
      return;
    }

    // Always respect DNT — never initialize
    const navDnt = (navigator as { doNotTrack?: string | null | undefined }).doNotTrack;
    const winDnt = (window as { doNotTrack?: string | null | undefined }).doNotTrack;
    const dnt = navDnt || winDnt;
    if (dnt === '1' || dnt === 'yes') {
      return;
    }

    // Decide opt-out default based on region requirement + prior explicit choice.
    // needsConsent uses CF country (preferred) or client tz fallback + safe default.
    const regionRequires = needsConsent(country);
    const optOutByDefault = regionRequires && consent !== 'granted';

    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      // Cookieless + strict
      persistence: 'localStorage',
      cross_subdomain_cookie: false,
      secure_cookie: true,
      // Explicit events only
      autocapture: false,
      // We drive $pageview ourselves via PostHogPageView (works across all routes)
      capture_pageview: false,
      disable_session_recording: true,
      // Critical for strict mode:
      opt_out_capturing_by_default: optOutByDefault,
    });

    // NOTE: opt_in_capturing() is NO LONGER called here.
    // For non-strict regions: init with opt_out_capturing_by_default:false enables capture.
    // For strict+granted (reloads): same, init opts in without emitting extra $opt_in.
    // Explicit single $opt_in (with guard) only on first Accept click in ConsentBanner.
  }, [country, consent]); // re-eval only on real changes (init is guarded inside posthog)

  // Reactive: when user makes choice in banner (or stored value), flip capturing state.
  // opt_in is handled EXCLUSIVELY in ConsentBanner handleAccept (with has_opted_in guard)
  // to ensure $opt_in is emitted exactly once, only on explicit Accept.
  // Here we only handle explicit deny (for strict regions).
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // posthog may not be initialized yet (no key / DNT) — calls are safe
    const regionRequires = needsConsent(country);

    if (regionRequires && consent === 'denied') {
      try {
        posthog.opt_out_capturing();
      } catch {
        /* no-op */
      }
    }
    // granted: banner already called opt_in once; reloads rely on init opt_out_by_default:false
    // !regionRequires: init with false default handles capturing, no $opt_in spam
    // unknown + requires: remain opted out as set at init
  }, [consent, country]);

  // Always wrap — usePostHog() and context consumers remain safe (no-op client when not inited)
  return (
    <PHProvider client={posthog}>
      <PostHogPageView />
      {children}
    </PHProvider>
  );
}
