"use client";

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import Modal from './Modal';
import { Play } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const { t } = useLanguage();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="mb-6">
        <div className="text-3xl tracking-tight font-semibold mb-2">{t.modal.demo.title}</div>
        <div className="text-[#a1a1aa]">{t.modal.demo.subtitle}</div>
      </div>

      {/* Fake video player */}
      <div className="aspect-video bg-[#0a0a0a] border border-[#262626] rounded-2xl mb-6 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#262626_0.8px,transparent_1px)] bg-[length:4px_4px]" />
        
        <button 
          onClick={() => alert("In a real product this would play a high-quality demo video showing the real-time sync experience.")}
          className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white/95 text-black hover:bg-white active:scale-95 transition-all shadow-xl"
        >
          <Play size={28} className="ml-1" />
        </button>
        
        <div className="relative mt-5 text-xs tracking-widest text-[#52525b] z-10">2:14 — PRODUCT OVERVIEW</div>
      </div>

      <div className="text-sm text-[#a1a1aa] mb-7">
        See how teachers instantly deliver exercises to students, control a shared metronome during live sessions, and track detailed practice analytics.
      </div>

      <button 
        onClick={onClose} 
        className="w-full py-3 border border-[#262626] hover:border-[#3f3f46] rounded-2xl text-sm transition-colors"
      >
        {t.modal.demo.close}
      </button>
    </Modal>
  );
}
