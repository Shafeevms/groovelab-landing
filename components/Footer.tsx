"use client";

import React from 'react';
import { useLanguage } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[#262626] pt-16 pb-10 px-6 text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-y-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-xl bg-[#a3e635] flex items-center justify-center">
                <span className="text-[#0a0a0a] font-bold text-lg tracking-[-1px]">D</span>
              </div>
              <span className="font-semibold text-2xl tracking-[-0.4px]">Drumion</span>
            </div>
            <p className="text-[#a1a1aa] leading-relaxed pr-2">{t.footer.tagline}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-10 text-sm">
            <div>
              <div className="font-medium mb-4 tracking-wide text-[#71717a]">{t.footer.product}</div>
              <div className="space-y-[11px] text-[#a1a1aa]">
                <a href="#features" className="block hover:text-white transition-colors">{t.footer.links.features}</a>
                <a href="#pricing" className="block hover:text-white transition-colors">{t.footer.links.pricing}</a>
                <a href="#for-teachers" className="block hover:text-white transition-colors">{t.footer.links.forTeachers}</a>
              </div>
            </div>
            <div>
              <div className="font-medium mb-4 tracking-wide text-[#71717a]">{t.footer.resources}</div>
              <div className="space-y-[11px] text-[#a1a1aa]">
                <a href="mailto:support@drumion.app" className="block hover:text-white transition-colors">{t.footer.links.support}</a>
              </div>
            </div>
            <div>
              <div className="font-medium mb-4 tracking-wide text-[#71717a]">{t.footer.company}</div>
              <div className="space-y-[11px] text-[#a1a1aa]">
                <a href="mailto:support@drumion.app" className="block hover:text-white transition-colors">{t.footer.links.contact}</a>
                <a href="/privacy" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">{t.footer.links.privacy}</a>
                <a href="/terms" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">{t.footer.links.terms}</a>
                <a href="/refund" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">{t.footer.links.refund}</a>
                <a href="/pricing" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">{t.footer.links.pricing}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-7 border-t border-[#262626] text-xs text-[#52525b] flex flex-col sm:flex-row gap-y-2 items-center justify-between">
          <div>{t.footer.copyright}</div>
          <div>{t.footer.madeFor}</div>
        </div>
      </div>
    </footer>
  );
}
