"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import { Send, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MainAdvantage() {
  const { t } = useLanguage();
  const [isSent, setIsSent] = useState(false);
  const [isReceiving, setIsReceiving] = useState(false);

  const handleSend = () => {
    if (isSent) return;

    setIsReceiving(true);
    
    // Simulate network delay
    setTimeout(() => {
      setIsSent(true);
      setIsReceiving(false);
      
      // Auto reset after 4.2s for repeated demo
      setTimeout(() => {
        setIsSent(false);
      }, 4200);
    }, 280);
  };

  return (
    <section className="section bg-[#111] border-y border-[#262626] py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-3.5 py-1 text-xs tracking-[2.5px] rounded-full bg-[#1f1f1f] border border-[#262626] text-[#a3e635] mb-4">
            {t.mainAdvantage.badge}
          </div>
          <h2 className="text-5xl md:text-[56px] leading-none tracking-[-2.4px] font-semibold mb-4 max-w-4xl mx-auto">
            {t.mainAdvantage.title}
          </h2>
          <p className="max-w-xl mx-auto text-xl text-[#a1a1aa]">{t.mainAdvantage.subtitle}</p>
        </div>

        {/* Live Demo */}
        <div className="max-w-[980px] mx-auto">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-start">
            {/* Teacher Panel */}
            <div className="teacher-panel rounded-3xl p-7 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="uppercase tracking-[1.5px] text-xs text-[#71717a] mb-1">{t.mainAdvantage.teacherLabel}</div>
                  <div className="font-semibold text-2xl tracking-tight">Ms. Elena Vargas</div>
                </div>
                <div className="px-3 py-1 text-xs rounded-full border border-[#262626] text-[#a1a1aa]">Online</div>
              </div>

              <div className="exercise-card rounded-2xl p-5 mb-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-medium">Double Stroke Roll — 16th notes</div>
                    <div className="text-xs text-[#71717a] mt-0.5">Rudiments • 110 BPM • 4 bars</div>
                  </div>
                  <div className="text-[10px] px-2 py-px rounded bg-[#a3e635]/10 text-[#a3e635] font-mono">R-07</div>
                </div>
                <div className="h-2 bg-[#262626] rounded mt-4 mb-1 overflow-hidden">
                  <div className="h-2 w-[78%] bg-gradient-to-r from-[#a3e635] to-[#facc15] rounded" />
                </div>
                <div className="flex justify-between text-[10px] text-[#52525b]">
                  <div>ACCENTS: 2 &amp; 4</div>
                  <div>LEVEL: INTERMEDIATE</div>
                </div>
              </div>

              <button
                onClick={handleSend}
                disabled={isSent || isReceiving}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-[#a3e635] hover:bg-[#84cc16] disabled:opacity-70 disabled:hover:bg-[#a3e635] active:scale-[0.985] transition-all text-[#0a0a0a] font-semibold text-sm tracking-wide disabled:cursor-default"
              >
                {isReceiving ? (
                  <>SENDING...</>
                ) : isSent ? (
                  <><Check size={17} /> {t.mainAdvantage.sentLabel}</>
                ) : (
                  <>{t.mainAdvantage.sendButton} <Send size={16} /></>
                )}
              </button>
              <div className="text-center text-[11px] text-[#52525b] mt-3 tracking-wide">Real-time push to all connected students</div>
            </div>

            {/* Student Panel — shows live update */}
            <div className="student-panel rounded-3xl p-7 md:p-8 relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="uppercase tracking-[1.5px] text-xs text-[#71717a] mb-1">{t.mainAdvantage.studentLabel}</div>
                  <div className="font-semibold text-2xl tracking-tight">Alex Rivera</div>
                </div>
                <div className="px-3 py-1 text-xs rounded-full border border-[#262626] text-[#a1a1aa]">Practicing</div>
              </div>

              <div className="min-h-[174px] relative">
                <AnimatePresence mode="wait">
                  {!isSent && !isReceiving && (
                    <motion.div 
                      initial={{ opacity: 0.6 }} 
                      animate={{ opacity: 1 }}
                      className="exercise-card rounded-2xl p-5 text-[#71717a] flex flex-col items-center justify-center h-full text-center border border-dashed border-[#262626]"
                    >
                      <div className="text-sm">Waiting for new exercise from teacher...</div>
                    </motion.div>
                  )}

                  {isReceiving && (
                    <div className="exercise-card rounded-2xl p-5 flex items-center justify-center h-full">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-[#a3e635] rounded-full animate-pulse" />
                        Receiving update...
                      </div>
                    </div>
                  )}

                  {isSent && (
                    <motion.div 
                      initial={{ opacity: 0, y: 12, scale: 0.985 }} 
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 160, damping: 21 }}
                      className="exercise-card sent rounded-2xl p-5"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="font-medium">Double Stroke Roll — 16th notes</div>
                          <div className="text-xs text-[#71717a] mt-0.5">Rudiments • 110 BPM • 4 bars</div>
                        </div>
                        <div className="px-2 py-px rounded bg-[#a3e635] text-[#0a0a0a] text-[10px] font-mono">NEW</div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#a3e635] mt-4">
                        <Check size={15} /> {t.mainAdvantage.receivedLabel}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-6 pt-5 border-t border-[#262626] text-xs text-[#52525b] flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                {t.mainAdvantage.liveNote}
              </div>
            </div>
          </div>

          {/* Three benefit highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {[
              { icon: Send, label: t.mainAdvantage.features.instant },
              { icon: ArrowRight, label: t.mainAdvantage.features.progress },
              { icon: Check, label: t.mainAdvantage.features.sessions },
            ].map((f, idx) => (
              <div key={idx} className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-[#262626] bg-[#0a0a0a] text-sm">
                <div className="text-[#a3e635]"><f.icon size={19} /></div>
                <div className="font-medium tracking-tight">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
