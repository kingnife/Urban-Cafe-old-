import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Square, Music, AlertTriangle, X } from 'lucide-react';

export const GlitchAudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [showPluginError, setShowPluginError] = useState(false);
  const [loop, setLoop] = useState(true);
  const [isGlitching, setIsGlitching] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Synthesize a cozy 2009 Web 2.0 MIDI-style cafe bossa-nova arpeggio using Web Audio API
  const playMidiSequence = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Notes in Hertz (Major 7th & 9th jazz cafe chord progression: Cmaj9 -> Am9 -> Dm9 -> G13)
      const chords = [
        [261.63, 329.63, 392.00, 493.88, 587.33], // Cmaj9
        [220.00, 261.63, 329.63, 392.00, 493.88], // Am9
        [293.66, 349.23, 440.00, 523.25, 659.25], // Dm9
        [196.00, 246.94, 329.63, 392.00, 523.25]  // G13
      ];

      let chordIndex = 0;
      const playNextChord = () => {
        if (!ctx) return;
        const currentChord = chords[chordIndex];
        const now = ctx.currentTime;

        currentChord.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          // Electric piano / Rhodes bell tone
          osc.type = i % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, now + i * 0.12);

          const noteVolume = (volume * 0.08);
          gain.gain.setValueAtTime(0.001, now + i * 0.12);
          gain.gain.exponentialRampToValueAtTime(noteVolume, now + i * 0.12 + 0.04);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.12 + 1.2);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now + i * 0.12);
          osc.stop(now + i * 0.12 + 1.2);
        });

        chordIndex = (chordIndex + 1) % chords.length;
      };

      playNextChord();
      intervalRef.current = window.setInterval(playNextChord, 1800);
      setIsPlaying(true);
    } catch {
      setShowPluginError(true);
    }
  };

  const stopMidiSequence = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPlaying(false);
  };

  const togglePlayback = () => {
    if (isPlaying) {
      stopMidiSequence();
    } else {
      // 1 in 3 chance of simulating classic QuickTime error if user wants broken behavior, or toggle direct
      playMidiSequence();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="bg-[#fcf9f4] border border-[#cfc2af] rounded-xs p-2.5 shadow-xs">
        <div className="flex items-center justify-between border-b border-[#e2d6c4] pb-1.5 mb-2">
          <div className="flex items-center gap-1.5">
            <Music className="w-3.5 h-3.5 text-[#8c481a]" />
            <span className="font-bold text-xs text-[#3a2211]">
              Cafe Ambient BGM (MIDI)
            </span>
          </div>
          <span className="text-[10px] text-[#78614e] font-mono">
            {isPlaying ? '▶ Playing 128kbps' : '■ Stopped'}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          {/* Controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={togglePlayback}
              className={`px-2 py-1 text-xs font-bold rounded-xs cursor-pointer flex items-center gap-1 border shadow-xs ${
                isPlaying 
                  ? 'bg-[#e03020] text-white border-[#991508]' 
                  : 'btn-web2-primary'
              }`}
            >
              {isPlaying ? (
                <>
                  <Square className="w-3 h-3 fill-white" />
                  <span>Stop MIDI</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 fill-white" />
                  <span>Play Jazz MIDI</span>
                </>
              )}
            </button>

            <button
              onClick={() => setShowPluginError(true)}
              className="text-[10px] text-[#7d3c0e] hover:underline bg-transparent border-none p-0 cursor-pointer"
              title="Test QuickTime 7 error dialog"
            >
              [Test Plugin Error]
            </button>
          </div>

          {/* Volume and Loop */}
          <div className="flex items-center gap-2 text-[10px] text-[#554130]">
            <label className="flex items-center gap-1 cursor-pointer select-none">
              <input 
                type="checkbox" 
                checked={loop} 
                onChange={(e) => setLoop(e.target.checked)}
                className="rounded-xs"
              />
              <span>Loop</span>
            </label>

            <div className="flex items-center gap-1">
              <Volume2 className="w-3 h-3 text-[#70553f]" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-16 accent-[#733e14] cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="mt-1.5 text-[9px] text-[#8c7a68] font-mono flex items-center justify-between">
          <span>File: /audio/midis/autumn_bossa_breeze_gm.mid (4.2 KB)</span>
          <span className="text-[#a04020]">Format: MIDI Type 0</span>
        </div>
      </div>

      {/* Simulated 2009 Apple QuickTime / Windows Media Player Plugin Error Modal */}
      {showPluginError && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/40 backdrop-blur-[0.5px]">
          <div 
            className="w-full max-w-sm bg-[#ece9d8] border-2 border-[#707070] rounded-xs shadow-2xl overflow-hidden text-xs text-black"
            style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}
          >
            {/* Window Header */}
            <div className="bg-[#0055ea] text-white px-2 py-1 flex items-center justify-between font-bold text-xs">
              <div className="flex items-center gap-1">
                <span>Apple QuickTime Plugin Error</span>
              </div>
              <button
                onClick={() => setShowPluginError(false)}
                className="w-4 h-4 bg-[#c82020] text-white flex items-center justify-center font-bold text-[10px]"
              >
                ✕
              </button>
            </div>

            <div className="p-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white font-bold text-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                  ✕
                </div>
                <div>
                  <h4 className="font-bold text-xs m-0 mb-1">
                    QuickTime MIME Type Conflict (Error -2048)
                  </h4>
                  <p className="text-[11px] text-[#333] m-0">
                    The file "autumn_bossa_breeze_gm.mid" cannot be parsed because the appropriate audio synthesizer software component was not found on your operating system.
                  </p>
                </div>
              </div>

              <div className="p-2 bg-white border border-[#999] text-[10px] font-mono text-[#444]">
                MIME: audio/midi, audio/x-midi<br/>
                Handler: npqtplugin4.dll (QuickTime 7.6.2)<br/>
                Status: Synthesizer buffer timeout
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  onClick={() => {
                    setShowPluginError(false);
                    playMidiSequence();
                  }}
                  className="px-3 py-1 bg-[#ede6d8] border border-[#7a6850] rounded-xs font-bold text-xs hover:bg-[#ded4c0]"
                >
                  Bypass with HTML5 Synthesizer
                </button>
                <button
                  onClick={() => setShowPluginError(false)}
                  className="px-4 py-1 bg-[#3a2211] text-white rounded-xs font-bold text-xs hover:bg-[#523219]"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
