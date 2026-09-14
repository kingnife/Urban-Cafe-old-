import React, { useState } from 'react';
import { Megaphone, Pause, Play, AlertCircle } from 'lucide-react';

export const MarqueeTicker: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [noticeIndex, setNoticeIndex] = useState(0);

  const announcements = [
    "*** 📢 TODAY'S ANNOUNCEMENTS (Updated April 14, 2009): Free Wi-Fi password is still 'latte1998' ***",
    "*** NOTICE: Please do NOT unplug the credit card terminal at Table 3 to charge your Motorola RAZR or iPod ***",
    "*** Due to an oven heating coil failure, today's blueberry muffins may look slightly asymmetrical ***",
    "*** Webmaster Kevin is studying for his university midterms, so online gift cards are temporarily delayed ***",
    "*** Please vote for Urban Grove in the 2009 Downtown Gazette Readers' Choice Awards! (Category #14: Best Scone) ***",
    "*** ATTENTION: Thursday Acoustic Night starts at 7:30 PM sharp. Bring your own acoustic instrument! ***"
  ];

  return (
    <div 
      className="w-full bg-[#fffde8] border-b border-[#d8c89d] text-[11px] text-[#4d3a1f] px-2 py-1 flex items-center gap-2 select-none overflow-hidden"
      style={{
        boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.04)',
        fontFamily: 'Tahoma, Arial, sans-serif'
      }}
    >
      {/* Little Badge Label */}
      <div className="flex items-center gap-1 font-bold text-[#8a3f12] bg-[#f7eccb] px-1.5 py-0.5 rounded-xs border border-[#d6be8c] flex-shrink-0 text-[10px]">
        <Megaphone className="w-3 h-3 text-[#b33a10]" />
        <span className="uppercase tracking-wider">Bulletin:</span>
      </div>

      {/* Marquee Body */}
      <div 
        className="flex-grow overflow-hidden relative cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={() => setIsPaused(!isPaused)}
        title="Click to pause/resume ticker"
      >
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="4"
          className="text-[#3b2b1a] font-medium"
        >
          {announcements.join('  •  •  •  ')}
        </marquee>
      </div>

      {/* Quick Pause / Next button */}
      <div className="flex items-center gap-1 flex-shrink-0 text-[10px] text-[#7d674f]">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="px-1 py-0.5 bg-[#ede4cf] hover:bg-[#ded1b6] border border-[#bfae92] rounded-xs cursor-pointer flex items-center gap-0.5 text-[#523e27]"
          title={isPaused ? "Resume Ticker" : "Pause Ticker"}
        >
          {isPaused ? <Play className="w-2.5 h-2.5 text-green-700" /> : <Pause className="w-2.5 h-2.5" />}
          <span className="hidden sm:inline">{isPaused ? 'Resume' : 'Pause'}</span>
        </button>
      </div>
    </div>
  );
};
