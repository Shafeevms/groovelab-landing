"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Minus, Plus } from 'lucide-react';

const NUM_STEPS = 16;
const NUM_ROWS = 3;

// Instrument labels: only HH, SN, K
const instruments = [
  { label: 'HH', name: 'Hi-hat' },
  { label: 'SN', name: 'Snare' },
  { label: 'K',  name: 'Kick' },
];

// Vertical positions for notes on the 5-line staff (percentage from top of staff area)
// Keep staff look identical; just use 3 sensible positions for the 3 instruments.
const staffNotePositions = [18, 50, 82];

// Initial pattern (user-specified basic rhythm):
// HH: true false true false ... (1 & 3 in each доля = 8th notes on 16-grid)
// SN: first hits on 2nd & 4th долях (beat 2 & 4)
// K: hits on 1st & 3rd долях (beat 1 & 3) + extra on 12th position
const initialGrid: boolean[][] = [
  // HH: true, false, true, false, ... (8ths)
  Array.from({ length: 16 }, (_, i) => i % 2 === 0),
  // SN: 2nd and 4th beats → indices 4 and 12
  Array.from({ length: 16 }, (_, i) => i === 4 || i === 12),
  // K: 1st and 3rd beats + 12th (0-based: 0, 8, 11)
  Array.from({ length: 16 }, (_, i) => i === 0 || i === 8 || i === 11),
];

export default function RhythmVisualizer() {
  const { t } = useLanguage();
  const [grid, setGrid] = useState<boolean[][]>(initialGrid);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [bpm, setBpm] = useState(96);

  // Playback timer + AudioContext (created on first user gesture)
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gridRef = useRef<boolean[][]>(grid);

  // Keep a fresh ref of grid for the playback timer (so live edits are heard without re-trigger side effects)
  useEffect(() => {
    gridRef.current = grid;
  }, [grid]);

  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const AnyWindow = window as any;
      const Ctx = AnyWindow.AudioContext || AnyWindow.webkitAudioContext;
      audioCtxRef.current = new Ctx();
    }
    const ctx = audioCtxRef.current!;
    // Resume if suspended (required after user gesture)
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    return ctx;
  }, []);

  // Very light drum synth voices (no assets). Distinct character per instrument.
  const playDrumSound = useCallback((row: number) => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

      if (row === 0) {
        // HH - bright, short, metallic tick (noise + high tone)
        const dur = 0.045;
        // noise
        const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * dur), ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const hp = ctx.createBiquadFilter();
        hp.type = 'highpass';
        hp.frequency.value = 6500;
        const gain = ctx.createGain();
        gain.gain.value = 0.18;
        const env = ctx.createGain();
        noise.connect(hp);
        hp.connect(env);
        env.connect(gain);
        gain.connect(ctx.destination);
        env.gain.value = 0.9;
        env.gain.linearRampToValueAtTime(0.0001, now + dur);
        noise.start(now);

        // + light high click
        const osc = ctx.createOscillator();
        osc.type = 'square';
        osc.frequency.value = 920;
        const og = ctx.createGain();
        og.gain.value = 0.06;
        const oenv = ctx.createGain();
        osc.connect(oenv);
        oenv.connect(og);
        og.connect(ctx.destination);
        oenv.gain.value = 0.7;
        oenv.gain.linearRampToValueAtTime(0.0001, now + 0.028);
        osc.start(now);
        osc.stop(now + 0.06);
      } else if (row === 1) {
        // SN - crack + body (noise band + low-mid tone)
        const dur = 0.22;
        const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * dur), ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const bp = ctx.createBiquadFilter();
        bp.type = 'bandpass';
        bp.frequency.value = 1650;
        bp.Q.value = 1.6;
        const ng = ctx.createGain();
        ng.gain.value = 0.32;
        const nenv = ctx.createGain();
        noise.connect(bp);
        bp.connect(nenv);
        nenv.connect(ng);
        ng.connect(ctx.destination);
        nenv.gain.value = 0.85;
        nenv.gain.linearRampToValueAtTime(0.0001, now + dur);
        noise.start(now);

        // body tone
        const tone = ctx.createOscillator();
        tone.type = 'triangle';
        tone.frequency.value = 185;
        const tg = ctx.createGain();
        tg.gain.value = 0.18;
        const tenv = ctx.createGain();
        const lp = ctx.createBiquadFilter();
        lp.type = 'lowpass';
        lp.frequency.value = 1200;
        tone.connect(tenv);
        tenv.connect(lp);
        lp.connect(tg);
        tg.connect(ctx.destination);
        tenv.gain.value = 0.9;
        tenv.gain.linearRampToValueAtTime(0.0001, now + 0.18);
        tone.start(now);
        tone.stop(now + 0.3);
      } else {
        // K - low thump with quick pitch drop
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = 132;
        const g = ctx.createGain();
        g.gain.value = 0.7;
        const env = ctx.createGain();
        const lp = ctx.createBiquadFilter();
        lp.type = 'lowpass';
        lp.frequency.value = 680;
        osc.connect(env);
        env.connect(lp);
        lp.connect(g);
        g.connect(ctx.destination);

        env.gain.value = 0.85;
        env.gain.linearRampToValueAtTime(0.0001, now + 0.38);

        // pitch envelope (drop)
        osc.frequency.setValueAtTime(132, now);
        osc.frequency.linearRampToValueAtTime(42, now + 0.32);

        osc.start(now);
        osc.stop(now + 0.45);

        // small click at attack
        const click = ctx.createOscillator();
        click.type = 'square';
        click.frequency.value = 210;
        const cg = ctx.createGain();
        cg.gain.value = 0.08;
        const cenv = ctx.createGain();
        click.connect(cenv);
        cenv.connect(cg);
        cg.connect(ctx.destination);
        cenv.gain.value = 0.6;
        cenv.gain.linearRampToValueAtTime(0.0001, now + 0.018);
        click.start(now);
        click.stop(now + 0.04);
      }
    } catch {
      // Audio blocked or unavailable – visual only is fine
    }
  }, [getAudioContext]);

  const toggleStep = (row: number, col: number) => {
    const newGrid = grid.map(r => [...r]);
    newGrid[row][col] = !newGrid[row][col];
    setGrid(newGrid);
  };

  // Playback engine: advance step, trigger sounds for active instruments at the new step
  const stopPlayback = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  const startPlayback = useCallback(() => {
    stopPlayback();
    setIsPlaying(true);

    const stepMs = Math.max(30, Math.floor(60000 / bpm / 4)); // 16th duration

    // play current step immediately (common UX)
    gridRef.current.forEach((row, r) => {
      if (row[currentStep]) playDrumSound(r);
    });

    intervalRef.current = setInterval(() => {
      setCurrentStep((prev) => {
        const next = (prev + 1) % NUM_STEPS;
        return next;
      });
    }, stepMs);
  }, [bpm, currentStep, playDrumSound, stopPlayback]);

  // React to step changes while playing: trigger the drum voices for active cells at this step.
  // Use gridRef so that toggles during playback don't cause duplicate triggers from grid identity change.
  useEffect(() => {
    if (!isPlaying) return;
    const currentGrid = gridRef.current;
    currentGrid.forEach((row, r) => {
      if (row[currentStep]) {
        playDrumSound(r);
      }
    });
  }, [currentStep, isPlaying, playDrumSound]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Toggle play/pause
  const togglePlay = () => {
    if (isPlaying) {
      stopPlayback();
    } else {
      startPlayback();
    }
  };

  // Reset pattern + stop
  const resetToInitial = () => {
    stopPlayback();
    setGrid(initialGrid.map(r => [...r]));
    setCurrentStep(0);
  };

  // BPM controls (clamp reasonable range)
  const changeBpm = (delta: number) => {
    const next = Math.max(60, Math.min(180, bpm + delta));
    setBpm(next);
    // If playing, restart timer with new tempo (simple way)
    if (isPlaying) {
      // restart will pick up new bpm
      startPlayback();
    }
  };

  // Click on the staff: map (x,y) → nearest (col, row) and toggle
  const handleStaffClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    if (width <= 0 || height <= 0) return;

    // col from horizontal position
    const col = Math.max(0, Math.min(NUM_STEPS - 1, Math.floor((x / width) * NUM_STEPS)));

    // Map y to closest instrument row using the staffNotePositions as anchors
    let bestRow = 0;
    let bestDist = Infinity;
    for (let r = 0; r < NUM_ROWS; r++) {
      const anchorY = (staffNotePositions[r] / 100) * height;
      const d = Math.abs(y - anchorY);
      if (d < bestDist) {
        bestDist = d;
        bestRow = r;
      }
    }

    toggleStep(bestRow, col);
  };

  // Render notes on the staff. Each active cell gets its own separate note (no beams).
  // HH uses a small x-notehead (typical for hats/cymbals), others use oval + stem.
  const renderNotes = () => {
    const notes: React.ReactNode[] = [];
    const isNotePlaying = (col: number) => isPlaying && col === currentStep;

    for (let row = 0; row < NUM_ROWS; row++) {
      for (let col = 0; col < NUM_STEPS; col++) {
        if (grid[row][col]) {
          const left = `${((col + 0.5) / NUM_STEPS) * 100}%`;
          const top = `${staffNotePositions[row]}%`;
          const playing = isNotePlaying(col);

          notes.push(
            <motion.div
              key={`${row}-${col}`}
              className={`absolute z-10 staff-note cursor-pointer ${playing ? 'note-playing' : ''}`}
              style={{ left, top }}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: playing ? 1.15 : 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 380, damping: 22 }}
              onClick={(ev) => {
                ev.stopPropagation();
                toggleStep(row, col);
              }}
              whileHover={{ scale: playing ? 1.15 : 1.06 }}
            >
              {/* Crisp SVG note (separate, no beam). Stems made a bit taller/higher as requested. */}
              <svg width="15" height="22" viewBox="0 0 15 22" className="block">
                {row === 0 ? (
                  // HH: x-style notehead (cross) + stem
                  <>
                    {/* cross notehead */}
                    <g transform="translate(3.5, 6.5)">
                      <line x1="-3.2" y1="-2.4" x2="3.2" y2="2.4" stroke="#e4e4e7" strokeWidth="1.6" strokeLinecap="round" />
                      <line x1="3.2" y1="-2.4" x2="-3.2" y2="2.4" stroke="#e4e4e7" strokeWidth="1.6" strokeLinecap="round" />
                      {/* small circle hint for readability */}
                      <circle cx="0" cy="0" r="2.6" fill="none" stroke="#e4e4e7" strokeWidth="0.9" />
                    </g>
                    {/* stem up-right — taller */}
                    <line x1="7.5" y1="5.2" x2="9.2" y2="-7" stroke="#e4e4e7" strokeWidth="1.35" strokeLinecap="round" />
                  </>
                ) : (
                  // SN / K: classic oval head + stem (slightly elliptical, rotated)
                  <>
                    {/* head */}
                    <ellipse
                      cx="5.2"
                      cy="7.8"
                      rx="3.9"
                      ry="2.65"
                      fill="#e4e4e7"
                      stroke="#a3e635"
                      strokeWidth="0.7"
                      transform="rotate(-16 5.2 7.8)"
                    />
                    {/* stem — taller */}
                    <line x1="8.3" y1="5.4" x2="9.6" y2="-6.8" stroke="#e4e4e7" strokeWidth="1.35" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </motion.div>
          );
        }
      }
    }
    return notes;
  };

  // Playhead on staff ONLY, jumps by доли (every 4 steps / beats), not per 16th note.
  // No vertical line in the cube/pad area (as requested).
  const playheadBeatCol = Math.floor(currentStep / 4) * 4;
  const playheadLeft = `${((playheadBeatCol + 0.5) / NUM_STEPS) * 100}%`;

  return (
    <div className="w-full max-w-[680px] mx-auto">
      {/* Editor-like header */}
      <div className="flex items-center gap-3 mb-2 px-1">
        <div className="text-[10px] uppercase tracking-[2.5px] text-[#a3e635] font-medium">{t.labels.notationEditor}</div>
        <div className="h-px flex-1 bg-[#262626]" />
      </div>

      {/* Main card matching app style */}
      <div className="bg-[#111] border border-[#262626] rounded-2xl p-4 sm:p-5 overflow-hidden">
        
        {/* Transport / editor controls */}
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#262626] bg-[#0a0a0a] hover:bg-[#171717] active:bg-[#111] text-xs tracking-widest text-[#a1a1aa] transition-colors"
              aria-label={isPlaying ? 'Pause playback' : 'Play groove'}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              <span className="font-mono">{isPlaying ? 'PAUSE' : 'PLAY'}</span>
            </button>

            {/* BPM */}
            <div className="flex items-center gap-1 text-[11px] text-[#a1a1aa] pl-2 border-l border-[#262626]">
              <span className="font-mono tabular-nums w-[32px] text-right">{bpm}</span>
              <span className="text-[#52525b]">BPM</span>
              <button onClick={() => changeBpm(-4)} className="ml-1 p-0.5 rounded hover:bg-[#171717] active:bg-[#111] text-[#a1a1aa]" aria-label="Decrease tempo"><Minus size={14} /></button>
              <button onClick={() => changeBpm(+4)} className="p-0.5 rounded hover:bg-[#171717] active:bg-[#111] text-[#a1a1aa]" aria-label="Increase tempo"><Plus size={14} /></button>
            </div>
          </div>

          <button
            onClick={resetToInitial}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#262626] bg-[#0a0a0a] hover:bg-[#171717] text-[11px] text-[#a1a1aa] tracking-wider transition-colors"
            aria-label="Reset to basic groove"
          >
            <RotateCcw size={13} />
            <span>RESET</span>
          </button>
        </div>

        {/* Staff (5-line notation) — unchanged visual structure, now interactive */}
        <div 
          className="relative mb-4 mx-2 h-[108px] rounded-lg bg-[#0a0a0a] border border-[#262626] cursor-crosshair"
          onClick={handleStaffClick}
          title="Click staff to place / remove notes"
        >
          {/* 5 staff lines (kept exactly as before) */}
          <div className="absolute inset-x-3 top-0 bottom-0 flex flex-col justify-between py-[14px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={i} 
                className="h-px w-full bg-[#3f3f46]" 
              />
            ))}
          </div>

          {/* Notes layer (clickable individual notes + playhead) */}
          <div className="absolute inset-x-3 top-0 bottom-0">
            {renderNotes()}

            {/* Playhead on staff */}
            {isPlaying && (
              <div 
                className="absolute top-1 bottom-1 w-[1.5px] bg-[#a3e635] rounded-full playhead pointer-events-none"
                style={{ left: playheadLeft, opacity: 0.85 }}
              />
            )}
          </div>

          {/* Subtle left bracket / phrase indicator like in app */}
          <div className="absolute left-2 top-3 bottom-3 w-[3px] bg-[#a3e635] rounded-full" />
        </div>

        {/* Step grid (now 16 steps) */}
        <div className="bg-[#0a0a0a] border border-[#262626] rounded-xl p-3">
          <div className="flex flex-col gap-2">
            {instruments.map((inst, rowIndex) => (
              <div key={rowIndex} className="flex items-center gap-2 sm:gap-3">
                {/* Instrument label — smaller on very narrow screens */}
                <div className="w-7 text-[9px] sm:w-8 sm:text-[10px] font-mono font-semibold text-right text-[#a1a1aa] tracking-wide">
                  {inst.label}
                </div>

                {/* Pads row — 16 columns. Smaller pads on very narrow screens. */}
                <div 
                  className="grid gap-[2px] sm:gap-[3px] flex-1 relative"
                  style={{ gridTemplateColumns: `repeat(${NUM_STEPS}, minmax(0, 1fr))` }}
                >
                  {Array.from({ length: NUM_STEPS }).map((_, colIndex) => {
                    const isActive = grid[rowIndex][colIndex];
                    const isCurrent = isPlaying && colIndex === currentStep;

                    return (
                      <button
                        key={colIndex}
                        onClick={() => toggleStep(rowIndex, colIndex)}
                        className={`rhythm-step group aspect-[0.82] sm:aspect-[1.05] rounded-[5px] border transition-all active:scale-[0.9] focus-visible:ring-1 focus-visible:ring-[#a3e635]/60
                          ${isActive 
                            ? 'border-[#a3e635] bg-[#a3e635] shadow-[0_0_0_1px_rgba(163,230,53,0.4),0_0_10px_rgba(163,230,53,0.28)]' 
                            : 'border-[#262626] bg-[#171717] hover:bg-[#1f1f1f] hover:border-[#3f3f46]'
                          } ${isCurrent && isActive ? 'hit' : ''}`}
                        aria-label={`Toggle ${inst.name} on step ${colIndex + 1}`}
                      >
                        {isActive && (
                          <motion.div 
                            className="w-1 h-1 mx-auto rounded-full bg-[#0a0a0a]"
                            initial={{ scale: 0.7 }}
                            animate={{ scale: isCurrent ? 1.35 : 1 }}
                            transition={{ duration: 0.08 }}
                          />
                        )}
                        {!isActive && isCurrent && (
                          <div className="w-1 h-1 mx-auto rounded-full bg-[#3f3f46]/60" />
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
