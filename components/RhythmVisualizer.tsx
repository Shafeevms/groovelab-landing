"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';

const NUM_STEPS = 12;
const NUM_ROWS = 5;

// Instrument labels (matching typical drum editor)
const instruments = [
  { label: 'HH', name: 'Hi-hat' },
  { label: 'SN', name: 'Snare' },
  { label: 'T',  name: 'Tom' },
  { label: 'K',  name: 'Kick' },
  { label: 'FT', name: 'Floor' },
];

// Vertical positions for notes on the 5-line staff (percentage from top of staff area)
const staffNotePositions = [18, 36, 54, 72, 90];

// Initial pattern - a nice groove similar to the app screenshot
const initialGrid: boolean[][] = [
  // HH
  [true, true, true, true, true, true, true, true, true, true, true, true],
  // SN
  [false, false, true, false, false, false, true, false, false, false, true, false],
  // T
  [false, false, false, false, true, false, false, false, false, true, false, false],
  // K
  [true, false, false, false, false, true, false, false, true, false, false, false],
  // FT
  [false, false, false, true, false, false, false, true, false, false, false, true],
];

export default function RhythmVisualizer() {
  const { t } = useLanguage();
  const [grid, setGrid] = useState<boolean[][]>(initialGrid);

  const toggleStep = (row: number, col: number) => {
    const newGrid = grid.map(r => [...r]);
    newGrid[row][col] = !newGrid[row][col];
    setGrid(newGrid);
  };

  // Render a note head on the staff for active steps
  const renderNotes = () => {
    const notes: React.ReactNode[] = [];

    for (let row = 0; row < NUM_ROWS; row++) {
      for (let col = 0; col < NUM_STEPS; col++) {
        if (grid[row][col]) {
          const left = `${((col + 0.5) / NUM_STEPS) * 100}%`;
          const top = `${staffNotePositions[row]}%`;

          notes.push(
            <motion.div
              key={`${row}-${col}`}
              className="absolute z-10 staff-note"
              style={{ left, top }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 320, damping: 18 }}
            >
              {/* Drum-style note: head + stem */}
              <div className="relative w-[11px] h-[8px]">
                {/* Note head */}
                <div 
                  className="absolute w-[10px] h-[7px] bg-[#e4e4e7] rounded-[50%] border border-[#a3e635]/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
                  style={{ 
                    left: 0, 
                    top: 0,
                    transform: 'rotate(-18deg)' 
                  }}
                />
                {/* Stem */}
                <div className="absolute left-[8px] top-[-6px] w-[1.5px] h-[13px] bg-[#e4e4e7] rounded" />
              </div>
            </motion.div>
          );
        }
      }
    }
    return notes;
  };

  return (
    <div className="w-full max-w-[680px] mx-auto">
      {/* Editor-like header */}
      <div className="flex items-center gap-3 mb-2 px-1">
        <div className="text-[10px] uppercase tracking-[2.5px] text-[#a3e635] font-medium">{t.labels.notationEditor}</div>
        <div className="h-px flex-1 bg-[#262626]" />
      </div>

      {/* Main card matching app style */}
      <div className="bg-[#111] border border-[#262626] rounded-2xl p-4 sm:p-5 overflow-hidden">
        
        {/* Staff (5-line notation) */}
        <div className="relative mb-4 mx-2 h-[108px] rounded-lg bg-[#0a0a0a] border border-[#262626]">
          {/* 5 staff lines */}
          <div className="absolute inset-x-3 top-0 bottom-0 flex flex-col justify-between py-[14px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={i} 
                className="h-px w-full bg-[#3f3f46]" 
              />
            ))}
          </div>

          {/* Notes layer */}
          <div className="absolute inset-x-3 top-0 bottom-0">
            {renderNotes()}
          </div>

          {/* Subtle left bracket / phrase indicator like in app */}
          <div className="absolute left-2 top-3 bottom-3 w-[3px] bg-[#a3e635] rounded-full" />
        </div>

        {/* 5-row glowing cubes grid */}
        <div className="bg-[#0a0a0a] border border-[#262626] rounded-xl p-3">
          <div className="flex flex-col gap-2">
            {instruments.map((inst, rowIndex) => (
              <div key={rowIndex} className="flex items-center gap-3">
                {/* Instrument label (like left column in app) */}
                <div className="w-8 text-[10px] font-mono font-semibold text-right text-[#a1a1aa] tracking-wide">
                  {inst.label}
                </div>

                {/* Pads row */}
                <div className="grid grid-cols-12 gap-[5px] flex-1">
                  {Array.from({ length: NUM_STEPS }).map((_, colIndex) => {
                    const isActive = grid[rowIndex][colIndex];

                    return (
                      <button
                        key={colIndex}
                        onClick={() => toggleStep(rowIndex, colIndex)}
                        className={`rhythm-step group aspect-[1.15] rounded-md border transition-all active:scale-[0.92]
                          ${isActive 
                            ? 'border-[#a3e635] bg-[#a3e635] shadow-[0_0_0_1px_rgba(163,230,53,0.45),0_0_12px_rgba(163,230,53,0.35)]' 
                            : 'border-[#262626] bg-[#171717] hover:bg-[#1f1f1f] hover:border-[#3f3f46]'
                          }`}
                        aria-label={`Toggle ${inst.name} on step ${colIndex + 1}`}
                      >
                        {isActive && (
                          <motion.div 
                            className="w-1.5 h-1.5 mx-auto rounded-full bg-[#0a0a0a]"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.1 }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 text-[10px] text-center text-[#52525b] tracking-wider">
          {t.labels.notationHint}
        </div>
      </div>
    </div>
  );
}
