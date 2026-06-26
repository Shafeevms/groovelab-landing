"use client";

import { useEffect } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useConsent, needsConsent } from './consent';

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined' || !pathname) return;

    let url = window.origin + pathname;
    const qs = searchParams?.toString();
    if (qs) {
      url += `?${qs}`;
    }

    posthog.capture('$pageview', { $current_url: url });
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const { consent, country } = useConsent();

  useEffect(() => {
    console.log('[PostHog] useEffect fired, country:', country, 'consent:', consent);

    if (typeof window === 'undefined') return;

    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    console.log('[PostHog] key:', key ? key.slice(0, 10) + '...' : 'MISSING');
    if (!key) return;

    const navDnt = (navigator as { doNotTrack?: string | null | undefined }).doNotTrack;
    const winDnt = (window as { doNotTrack?: string | null | undefined }).doNotTrack;
    const dnt = navDnt || winDnt;
    console.log('[PostHog] DNT:', dnt);
    if (dnt === '1' || dnt === 'yes') return;

    console.log('[PostHog] __loaded:', posthog.__loaded);

    if (!posthog.__loaded) {
      console.log('[PostHog] calling init...');
      posthog.init(key, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        persistence: 'localStorage',
        cross_subdomain_cookie: false,
        secure_cookie: true,
        autocapture: false,
        capture_pageview: false,
        disable_session_recording: true,
        opt_out_capturing_by_default: true,
      });
      console.log('[PostHog] init done, __loaded:', posthog.__loaded);
    }

    const regionRequires = needsConsent(country);
    console.log('[PostHog] regionRequires:', regionRequires, 'consent:', consent);
    if (!regionRequires || consent === 'granted') {
      console.log('[PostHog] opting in...');
      if (!posthog.has_opted_in_capturing()) {
        posthog.opt_in_capturing();
        console.log('[PostHog] opted in!');
      } else {
        console.log('[PostHog] already opted in');
      }
    }
  }, [country, consent]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const regionRequires = needsConsent(country);

    if (regionRequires && consent === 'denied') {
      try {
        posthog.opt_out_capturing();
      } catch {
        /* no-op */
      }
    }
  }, [consent, country]);

  return (
      <PHProvider client={posthog}>
        <PostHogPageView />
        {children}
      </PHProvider>
  );
}
