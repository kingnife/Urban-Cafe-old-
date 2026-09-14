import React, { useState } from 'react';
import { ShieldAlert, Play, RefreshCw, X, Coffee, Check } from 'lucide-react';

export const FlashPluginBox: React.FC = () => {
  const [isBlocked, setIsBlocked] = useState(true);
  const [showActiveXBar, setShowActiveXBar] = useState(false);
  const [isContentAllowed, setIsContentAllowed] = useState(false);
  const [steamPower, setSteamPower] = useState(1);

  const handleTriggerFlash = () => {
    setShowActiveXBar(true);
  };

  const handleAllowBlockedContent = () => {
    setShowActiveXBar(false);
    setIsBlocked(false);
    setIsContentAllowed(true);
  };

  return (
    <>
      {/* 2009 Top Gold/Yellow ActiveX Information Bar */}
      {showActiveXBar && (
        <div 
          className="w-full bg-[#fffee0] border-b-2 border-[#caa838] p-2 text-xs text-[#2a2408] flex items-center justify-between shadow-md select-none animate-fadeIn"
          style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#e0aa14] rounded-xs border border-[#8a6805] flex items-center justify-center text-white font-bold text-xs shadow-xs">
              🛡️
            </div>
            <span>
              <strong>Internet Explorer Information Bar:</strong> To help protect your security, Internet Explorer restricted this webpage from running scripts or ActiveX controls. 
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleAllowBlockedContent}
              className="px-2.5 py-1 bg-[#f4e292] hover:bg-[#ebd36c] border border-[#a88610] rounded-xs font-bold text-xs text-[#3a2e05] cursor-pointer shadow-xs"
            >
              Allow Blocked Content...
            </button>
            <button
              onClick={() => setShowActiveXBar(false)}
              className="text-[#665522] hover:text-black font-bold p-1"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Widget Container */}
      <div className="bg-white border border-[#cfc3b0] rounded-xs overflow-hidden shadow-xs">
        <div className="box-header-gradient px-3 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Coffee className="w-3.5 h-3.5 text-[#733e14]" />
            <h4 className="font-bold text-xs text-[#442a15] m-0 uppercase tracking-wide">
              VIRTUAL CAFE STEAM-CAM &trade;
            </h4>
          </div>
          <span className="text-[10px] text-[#6e5843] font-semibold">
            Macromedia Flash 9
          </span>
        </div>

        <div className="p-3 bg-[#1e1712] text-center text-white relative min-h-[160px] flex flex-col items-center justify-center">
          {/* Missing Plugin Placeholder Mode */}
          {!isContentAllowed ? (
            <div className="space-y-2.5 max-w-sm py-2">
              {/* Flash "f" Logo Placeholder */}
              <div className="w-12 h-12 mx-auto bg-[#be2617] rounded-sm border border-[#e05040] flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold font-serif italic text-white select-none">
                  f
                </span>
              </div>

              <div>
                <h5 className="text-xs font-bold text-[#f7d6a5] m-0">
                  Adobe Flash Player 9.0+ Required
                </h5>
                <p className="text-[10px] text-[#bdae9c] m-0 mt-0.5 leading-snug">
                  The interactive 360° cafe visualizer &amp; steam simulator requires the Flash Player browser extension.
                </p>
              </div>

              <div className="pt-1">
                <button
                  onClick={handleTriggerFlash}
                  className="px-3 py-1 text-xs font-bold text-[#2a1708] rounded-xs shadow-md cursor-pointer border border-[#c4922b]"
                  style={{
                    background: 'linear-gradient(to bottom, #ffd778 0%, #e6aa28 50%, #ca8c12 51%, #e3a624 100%)'
                  }}
                >
                  ▶ Activate Flash Plugin
                </button>
              </div>

              <div className="text-[9px] text-[#8c7866] italic">
                (Plugin NPAPI / ActiveX component version 9.0.124.0)
              </div>
            </div>
          ) : (
            /* Allowed: 2009 Flash Coffee Steam Toy Easter Egg */
            <div className="w-full space-y-2 py-1 text-center select-none">
              <div className="text-[11px] text-[#7de07d] font-mono flex items-center justify-center gap-1">
                <Check className="w-3.5 h-3.5" />
                <span>SWF Container Loaded (Flash 9.0 Compatible)</span>
              </div>

              {/* Animated retro coffee cup */}
              <div className="py-2 relative flex flex-col items-center justify-center">
                {/* Simulated CSS Steam puffs */}
                <div className="flex gap-2 justify-center mb-1 h-8 items-end">
                  <div className="text-[#e8d7c0] text-xs animate-bounce" style={{ animationDuration: '1.4s' }}>~</div>
                  <div className="text-[#e8d7c0] text-sm animate-bounce" style={{ animationDuration: '0.9s' }}>§</div>
                  <div className="text-[#e8d7c0] text-xs animate-bounce" style={{ animationDuration: '1.8s' }}>~</div>
                </div>

                <div className="w-16 h-10 bg-[#8c5225] border-2 border-[#ffdfb0] rounded-b-xl relative shadow-inner flex items-center justify-center">
                  <div className="w-12 h-3 bg-[#3d1e08] rounded-full border border-[#ffdfb0]/40"></div>
                  {/* Cup handle */}
                  <div className="w-4 h-6 border-2 border-[#ffdfb0] rounded-r-lg absolute -right-4 top-1"></div>
                </div>
              </div>

              <div className="text-[10px] text-[#dfcfbe]">
                Virtual Steam Intensity: <strong>{steamPower === 1 ? 'Mild Morning Roast' : 'Double Shot Espresso Boost!'}</strong>
              </div>

              <div className="flex items-center justify-center gap-2 pt-1">
                <button
                  onClick={() => setSteamPower(steamPower === 1 ? 2 : 1)}
                  className="px-2 py-0.5 bg-[#422d1d] hover:bg-[#573d28] border border-[#7d5738] text-[10px] rounded-xs text-[#ffeedb] cursor-pointer"
                >
                  ⚡ Boost Steam Power
                </button>
                <button
                  onClick={() => setIsContentAllowed(false)}
                  className="px-2 py-0.5 bg-[#2b160b] hover:bg-[#3b2011] border border-[#522f1b] text-[10px] rounded-xs text-[#a89280] cursor-pointer"
                >
                  Reset Plugin
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
