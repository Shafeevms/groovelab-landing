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
    if (typeof window === 'undefined') return;

    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;

    const navDnt = (navigator as { doNotTrack?: string | null | undefined }).doNotTrack;
    const winDnt = (window as { doNotTrack?: string | null | undefined }).doNotTrack;
    const dnt = navDnt || winDnt;
    if (dnt === '1' || dnt === 'yes') return;

    if (!posthog.__loaded) {
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
    }

    const regionRequires = needsConsent(country);
    if (!regionRequires || consent === 'granted') {
      if (!posthog.has_opted_in_capturing()) {
        posthog.opt_in_capturing();
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
