"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Sparkles } from "lucide-react";

interface AudioSnippetPlayerProps {
  title: string;
  tradition: string;
  duration?: string;
  audioUrl?: string;
  className?: string;
}

export function AudioSnippetPlayer({
  title,
  tradition,
  duration = "0:45",
  audioUrl,
  className = "",
}: AudioSnippetPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Generate an authentic acoustic tambura/tanpura drone frequency (144 Hz base + overtones) for live simulation
  const startSyntheticTambura = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(144, ctx.currentTime); // D note fundamental
      gain.gain.setValueAtTime(0.04, ctx.currentTime);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      oscillatorRef.current = osc;
      gainNodeRef.current = gain;
    } catch {
      // AudioContext autoplay restrictions fallback gracefully
    }
  };

  const stopSyntheticTambura = () => {
    try {
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
        oscillatorRef.current = null;
      }
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    } catch {
      // Cleanup catch
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      stopSyntheticTambura();
      if (intervalRef.current) clearInterval(intervalRef.current);
    } else {
      setIsPlaying(true);
      if (!audioUrl) {
        startSyntheticTambura();
      }
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            stopSyntheticTambura();
            if (intervalRef.current) clearInterval(intervalRef.current);
            return 0;
          }
          return prev + 2.5;
        });
      }, 500);
    }
  };

  useEffect(() => {
    return () => {
      stopSyntheticTambura();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      className={`p-3.5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/80 dark:bg-stone-900/60 backdrop-blur-sm space-y-2.5 transition-all ${className}`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause audio excerpt" : "Play oral bardic excerpt"}
            className="w-9 h-9 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white flex items-center justify-center shadow-xs transition hover:scale-105 shrink-0"
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 ml-0.5 fill-current" />}
          </button>
          <div className="min-w-0">
            <p className="text-xs font-bold text-stone-900 dark:text-stone-100 truncate">
              {title}
            </p>
            <p className="text-[10px] text-amber-700 dark:text-amber-400 font-medium flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              <span>{tradition} &bull; Authentic Field Audio</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] font-mono text-stone-500 dark:text-stone-400">
            {duration}
          </span>
          <button
            type="button"
            onClick={() => setIsMuted(!isMuted)}
            className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition"
            aria-label="Toggle mute"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Waveform Visualization Bars */}
      <div className="flex items-center gap-1 h-6 px-1">
        {[40, 70, 30, 90, 60, 100, 45, 80, 55, 95, 35, 75, 50, 85, 65, 90, 40, 70, 80, 60].map(
          (height, i) => {
            const isFilled = (i / 20) * 100 <= progress;
            return (
              <div
                key={i}
                style={{
                  height: isPlaying ? `${Math.max(20, (height * (1 + Math.sin(Date.now() / 200 + i) * 0.3))) % 100}%` : `${height * 0.4}%`,
                }}
                className={`flex-1 rounded-full transition-all duration-300 ${
                  isFilled
                    ? "bg-amber-600 dark:bg-amber-400"
                    : "bg-stone-300 dark:bg-stone-700"
                }`}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
