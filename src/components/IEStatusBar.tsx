import React, { useState } from 'react';
import { AlertTriangle, X, Check, Globe } from 'lucide-react';

interface IEStatusBarProps {
  onTriggerGlitch?: () => void;
}

export const IEStatusBar: React.FC<IEStatusBarProps> = () => {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [alwaysShow, setAlwaysShow] = useState(true);
  const [errorCount, setErrorCount] = useState(3);

  // Play authentic subtle retro Windows error beep using Web Audio API
  const playErrorBeep = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(440, audioCtx.currentTime); // Standard A4 Windows exclamation tone
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } catch {
      // AudioContext not available or blocked, graceful fallback
    }
  };

  const handleOpenErrorModal = () => {
    playErrorBeep();
    setIsErrorModalOpen(true);
  };

  const handleSimulateMoreErrors = () => {
    playErrorBeep();
    setErrorCount(prev => prev + 1);
  };

  return (
    <>
      {/* Authentic 2009 Internet Explorer 7 / 8 Bottom Status Bar */}
      <div 
        id="ie-status-bar"
        className="w-full text-[11px] select-none flex items-center justify-between border-t border-[#8e8e8e] bg-[#e6e6e6] text-[#1e1e1e] font-sans px-2 py-0.5"
        style={{
          boxShadow: 'inset 0 1px 0 #ffffff',
          fontFamily: 'Tahoma, Arial, sans-serif'
        }}
      >
        {/* Left Side: The Iconic "Done, but with errors on page." */}
        <button
          onClick={handleOpenErrorModal}
          title="Double click to view webpage error details"
          className="flex items-center gap-1.5 px-1.5 py-0.5 hover:bg-[#d8d8d8] active:bg-[#c8c8c8] rounded-xs cursor-pointer border border-transparent hover:border-[#b0b0b0] bg-transparent text-left"
        >
          <div className="w-3.5 h-3.5 bg-[#fcd436] rounded-xs border border-[#9b7e05] flex items-center justify-center flex-shrink-0 shadow-xs">
            <span className="text-[10px] font-black text-[#1a1200] leading-none" style={{ fontFamily: 'Georgia, serif' }}>!</span>
          </div>
          <span className="text-[#1c1c1c] font-medium text-[11px] underline sm:no-underline">
            Done, but with errors on page. ({errorCount})
          </span>
        </button>

        {/* Right Side: Zones & Status */}
        <div className="hidden sm:flex items-center text-[11px] text-[#444444] divide-x divide-[#b0b0b0]">
          <span 
            onClick={handleSimulateMoreErrors}
            className="px-2.5 hover:bg-[#dcdcdc] cursor-pointer text-[10px] text-[#666666]"
            title="Click to throw another script error"
          >
            [Script Debug: ON]
          </span>
          <span className="px-2.5 flex items-center gap-1 text-[#333333]">
            <Globe className="w-3 h-3 text-[#2a68a5]" />
            <span>Internet</span>
          </span>
          <span className="px-2.5 text-[#555555]">
            Protected Mode: <strong className="text-[#a03020]">Off</strong>
          </span>
          <span className="px-2.5 font-bold text-[#222222]">
            100%
          </span>
        </div>
      </div>

      {/* Classic Windows XP / Vista "Internet Explorer - Webpage error" Dialog Box */}
      {isErrorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/35 backdrop-blur-[0.5px]">
          <div 
            className="w-full max-w-md bg-[#ece9d8] border-2 border-[#0055ea] rounded-t-md shadow-2xl overflow-hidden text-xs text-[#000000]"
            style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}
          >
            {/* Classic Windows XP Blue Header Title Bar */}
            <div 
              className="px-2 py-1.5 flex items-center justify-between text-white font-bold select-none"
              style={{
                background: 'linear-gradient(to bottom, #0058ee 0%, #3593ff 4%, #288eff 6%, #1268ee 8%, #0143cb 12%, #0055e5 88%, #0036a7 100%)',
                textShadow: '1px 1px 1px #002275'
              }}
            >
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 bg-yellow-400 rounded-full flex items-center justify-center text-[9px] text-black font-black">
                  !
                </div>
                <span className="text-xs">Internet Explorer &mdash; Webpage error</span>
              </div>
              <button
                onClick={() => setIsErrorModalOpen(false)}
                className="w-5 h-5 bg-[#d84030] hover:bg-[#e85040] active:bg-[#b02010] text-white rounded-xs flex items-center justify-center font-bold text-xs border border-[#ffffff]/60"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Dialog Content */}
            <div className="p-4 space-y-3.5 bg-[#ece9d8]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-yellow-600 flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                  <AlertTriangle className="w-5 h-5 text-[#442e03]" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#000000] m-0 mb-1">
                    An error has occurred in the script on this page.
                  </h4>
                  <p className="text-[11px] text-[#222222] m-0">
                    The script was unable to load an ActiveX control or DOM element for the Urban Grove Cafe interactive features.
                  </p>
                </div>
              </div>

              {/* Error Details Box */}
              <div className="bg-[#ffffff] border border-[#7f9db9] p-2.5 text-[11px] font-mono space-y-1 select-text">
                <div><strong className="font-sans text-[#333]">Line:</strong> 142</div>
                <div><strong className="font-sans text-[#333]">Char:</strong> 7</div>
                <div><strong className="font-sans text-[#333]">Error:</strong> <span className="text-[#b01000] font-bold">'document.all.caffieneSteam_obj' is null or not an object</span></div>
                <div><strong className="font-sans text-[#333]">Code:</strong> 0</div>
                <div className="truncate"><strong className="font-sans text-[#333]">URL:</strong> http://www.urbangrovecafe.com/assets/js/swf_compat_v2.js</div>
              </div>

              {/* Expanded Stack Details */}
              {showDetails && (
                <div className="bg-[#f5f5f5] border border-[#a0a0a0] p-2 text-[10px] font-mono text-[#555] max-h-24 overflow-y-auto space-y-0.5">
                  <div>at initSteamApplet (swf_compat_v2.js:142:7)</div>
                  <div>at window.onload (index.html:88:14)</div>
                  <div>at HTMLDocument.onreadystatechange (prototype_1.6.0.js:203:4)</div>
                  <div className="text-[#a02010]">Warning: ActiveContent.js could not initialize Macromedia Flash Player 9.0r28</div>
                </div>
              )}

              {/* Prompt Text */}
              <div className="text-[11px] font-semibold text-[#111]">
                Do you want to continue running scripts on this page?
              </div>

              {/* Checkbox */}
              <label className="flex items-center gap-1.5 text-[11px] text-[#333] cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  checked={alwaysShow}
                  onChange={(e) => setAlwaysShow(e.target.checked)}
                  className="rounded-xs"
                />
                <span>Always display this message when a page contains errors</span>
              </label>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-[#d0ccc0] flex items-center justify-between gap-2">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="px-2.5 py-1 text-[11px] bg-[#ece9d8] border border-[#003c74] rounded-xs shadow-xs hover:bg-[#dedad0] active:bg-[#ccc7bc]"
                >
                  {showDetails ? '<< Hide Details' : 'Show Details >>'}
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsErrorModalOpen(false)}
                    className="px-5 py-1 text-[11px] font-bold text-black bg-[#ece9d8] border-2 border-[#0055ea] rounded-xs shadow-xs hover:bg-[#d8e4f8] active:bg-[#c0d4f0] focus:outline-none focus:ring-1 focus:ring-blue-600"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setIsErrorModalOpen(false)}
                    className="px-5 py-1 text-[11px] text-black bg-[#ece9d8] border border-[#7f9db9] rounded-xs shadow-xs hover:bg-[#dedad0] active:bg-[#ccc7bc]"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
