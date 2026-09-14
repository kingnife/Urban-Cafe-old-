import React, { useState } from 'react';
import { NavTab } from '../types';
import { ArrowUp, Rss, Coffee, RefreshCw, AlertTriangle, X } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [visitorCount, setVisitorCount] = useState(4289);
  const [isGlitching, setIsGlitching] = useState(false);
  const [showSqlModal, setShowSqlModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRefreshCounter = () => {
    setIsGlitching(true);
    setTimeout(() => {
      // 50% chance to increment, or show classic MySQL error
      if (Math.random() > 0.4) {
        setShowSqlModal(true);
      } else {
        setVisitorCount(prev => prev + 1);
      }
      setIsGlitching(false);
    }, 400);
  };

  // Convert visitor count to 6-digit odometer array
  const digits = String(visitorCount).padStart(6, '0').split('');

  return (
    <footer className="w-full mt-8 border-t border-[#bfae99]">
      {/* Upper Footer Bar */}
      <div 
        className="px-4 py-4 text-center text-xs"
        style={{
          background: 'linear-gradient(to bottom, #ded2bf 0%, #d0c1ab 50%, #c4b39a 51%, #cbbaa2 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7)'
        }}
      >
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-bold text-[#442c19] text-xs">
          <button 
            onClick={() => onNavigate('home')} 
            className="hover:underline hover:text-[#7d3c0e] bg-transparent border-none p-0 cursor-pointer"
          >
            Home
          </button>
          <span className="text-[#998774]">&bull;</span>
          <button 
            onClick={() => onNavigate('about')} 
            className="hover:underline hover:text-[#7d3c0e] bg-transparent border-none p-0 cursor-pointer"
          >
            About Us
          </button>
          <span className="text-[#998774]">&bull;</span>
          <button 
            onClick={() => onNavigate('menu')} 
            className="hover:underline hover:text-[#7d3c0e] bg-transparent border-none p-0 cursor-pointer"
          >
            Menu
          </button>
          <span className="text-[#998774]">&bull;</span>
          <button 
            onClick={() => onNavigate('services')} 
            className="hover:underline hover:text-[#7d3c0e] bg-transparent border-none p-0 cursor-pointer"
          >
            Services
          </button>
          <span className="text-[#998774]">&bull;</span>
          <button 
            onClick={() => onNavigate('gallery')} 
            className="hover:underline hover:text-[#7d3c0e] bg-transparent border-none p-0 cursor-pointer"
          >
            Gallery
          </button>
          <span className="text-[#998774]">&bull;</span>
          <button 
            onClick={() => onNavigate('events')} 
            className="hover:underline hover:text-[#7d3c0e] bg-transparent border-none p-0 cursor-pointer"
          >
            Events
          </button>
          <span className="text-[#998774]">&bull;</span>
          <button 
            onClick={() => onNavigate('contact')} 
            className="hover:underline hover:text-[#7d3c0e] bg-transparent border-none p-0 cursor-pointer"
          >
            Contact
          </button>
          <span className="text-[#998774]">&bull;</span>
          <button 
            onClick={() => onNavigate('directions')} 
            className="hover:underline hover:text-[#7d3c0e] bg-transparent border-none p-0 cursor-pointer"
          >
            Directions
          </button>
        </div>
      </div>

      {/* Main Dark Footer */}
      <div className="bg-[#24150b] text-[#bdae9f] text-[11px] px-4 py-5 border-t border-[#3b2314] space-y-3.5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Coffee className="w-4 h-4 text-[#e0a86c]" />
            <span className="font-bold text-white">Urban Grove Cafe</span>
            <span>&mdash; 125 Market Street, Downtown &bull; Tel: (555) 234-5678</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#dfd3c5] hover:text-white hover:underline bg-transparent border-none cursor-pointer p-0"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top</span>
          </button>
        </div>

        {/* 2009 Broken Hit Counter Section */}
        <div className="border-t border-[#382213] pt-3 pb-1 flex flex-col md:flex-row items-center justify-between gap-3 bg-[#1c0f07] p-2.5 rounded border border-[#442816]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-[#e6cfb8]">
              You are visitor number:
            </span>

            {/* Odometer Display */}
            <div className="inline-flex bg-[#000000] border-2 border-[#55331a] rounded-xs px-1.5 py-0.5 shadow-inner gap-0.5 font-mono font-bold text-sm tracking-widest text-[#00ff41]">
              {isGlitching ? (
                <span className="text-red-400 text-xs px-2 animate-pulse">#ERR_CONN</span>
              ) : (
                digits.map((digit, idx) => (
                  <span 
                    key={idx} 
                    className="bg-[#111111] px-1 rounded-xs border border-[#222222] text-shadow-[0_0_2px_rgba(0,255,65,0.8)]"
                  >
                    {digit}
                  </span>
                ))
              )}
            </div>

            <button
              onClick={handleRefreshCounter}
              disabled={isGlitching}
              title="Refresh hit counter"
              className="px-2 py-0.5 bg-[#3a2213] hover:bg-[#52321c] border border-[#6b4226] text-[#dfcfbe] text-[10px] rounded-xs cursor-pointer flex items-center gap-1 active:scale-95"
            >
              <RefreshCw className={`w-2.5 h-2.5 ${isGlitching ? 'animate-spin' : ''}`} />
              <span>Refresh Count</span>
            </button>
          </div>

          <div className="text-[10px] text-[#a88d76] italic text-center md:text-right">
            *(Counter reset on Feb 18, 2009 after server reboot corrupted visitors.txt)*
          </div>
        </div>

        <div className="border-t border-[#382213] pt-3 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          <div>
            <span>&copy; 2009 Urban Grove Cafe. All Rights Reserved.</span>
            <span className="mx-2 text-[#573d28]">|</span>
            <span>Designed by <strong>MetroWave Creative Studios</strong></span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] text-[#918171]">
            <span className="inline-flex items-center gap-0.5 bg-[#170c06] border border-[#3b2314] px-1.5 py-0.5 rounded-xs">
              <Rss className="w-2.5 h-2.5 text-[#ff8800]" />
              <span>RSS 2.0</span>
            </span>
            <span 
              onClick={() => setShowSqlModal(true)}
              className="bg-[#170c06] border border-[#3b2314] px-1.5 py-0.5 rounded-xs cursor-pointer hover:text-white hover:border-[#664422]"
              title="Click to view markup validator error"
            >
              Valid XHTML 1.0 <span className="text-yellow-500 font-bold">(3 Warnings)</span>
            </span>
            <span>Best viewed in 1024&times;768 resolution</span>
          </div>
        </div>
      </div>

      {/* Simulated 2009 PHP / MySQL Error Modal */}
      {showSqlModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/50 backdrop-blur-[0.5px]">
          <div className="w-full max-w-lg bg-[#ffffff] border-2 border-[#b02010] rounded-xs shadow-2xl p-4 text-xs font-mono text-[#222222] space-y-3">
            <div className="flex items-center justify-between border-b border-[#dddddd] pb-2 font-sans font-bold text-red-700">
              <div className="flex items-center gap-1.5 text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>Internal Server Error &mdash; PHP 5.2.4</span>
              </div>
              <button 
                onClick={() => setShowSqlModal(false)}
                className="w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded flex items-center justify-center text-black"
              >
                ✕
              </button>
            </div>

            <div className="space-y-1.5 bg-[#fff5f5] border border-[#f5c6cb] p-3 rounded-xs text-[11px] text-[#721c24]">
              <div><strong>Warning:</strong> mysql_connect(): Too many connections in <b>/home/urbangrove/public_html/includes/counter.php</b> on line <b>24</b></div>
              <div><strong>Fatal error:</strong> Call to a member function query() on a non-object in <b>/home/urbangrove/public_html/includes/counter.php</b> on line <b>31</b></div>
            </div>

            <p className="text-[11px] text-[#555555] font-sans">
              Notice from Webmaster Kevin: "The shared GoDaddy hosting plan is hitting its concurrent database limit again during morning rush hour. Please refresh your browser or try again in a few minutes."
            </p>

            <div className="pt-2 flex justify-end font-sans">
              <button
                onClick={() => setShowSqlModal(false)}
                className="px-4 py-1.5 bg-[#3a2211] hover:bg-[#523219] text-white font-bold rounded-xs cursor-pointer text-xs"
              >
                Dismiss Error &amp; Return to Cafe
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
