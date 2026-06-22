import React from 'react';
import Link from 'next/link';

interface LegalPageProps {
  title: string;
  current?: 'pricing' | 'terms' | 'privacy' | 'refund';
  children?: React.ReactNode;
}

export default function LegalPage({ title, current, children }: LegalPageProps) {
  const navItems = [
    { href: '/pricing', label: 'Pricing', key: 'pricing' as const },
    { href: '/terms', label: 'Terms of Service', key: 'terms' as const },
    { href: '/privacy', label: 'Privacy Policy', key: 'privacy' as const },
    { href: '/refund', label: 'Refund Policy', key: 'refund' as const },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-[#a1a1aa] hover:text-white transition-colors mb-4"
        >
          ← Drumion
        </Link>

        {/* Legal pages navigation */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm mb-6">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={
                item.key === current
                  ? 'text-[#a3e635] font-medium'
                  : 'text-[#a1a1aa] hover:text-white transition-colors'
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Page title */}
        <h1 className="text-4xl md:text-5xl tracking-[-1.5px] font-semibold mb-2">
          {title}
        </h1>

        {/* Effective date */}
        <div className="text-sm text-[#71717a] mb-10">Effective date: May 2026</div>

        {/* Content area — readable typography for long text (prepared for h2/h3, p, ul) */}
        <div className="max-w-2xl text-[15px] leading-relaxed text-[#a1a1aa] space-y-4">
          {children ?? <p>Content will be added.</p>}
        </div>

        {/* Footer strip */}
        <div className="mt-20 pt-8 border-t border-[#262626] text-xs text-[#52525b] flex flex-col sm:flex-row gap-y-1 items-start sm:items-center justify-between">
          <div>© 2026 Drumion. All rights reserved.</div>
          <a
            href="mailto:support@drumion.app"
            className="hover:text-white transition-colors"
          >
            support@drumion.app
          </a>
        </div>
      </div>
    </div>
  );
}
