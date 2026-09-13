import React from 'react';
import { NavTab } from '../types';
import { ArrowUp, Rss, Coffee } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      <div className="bg-[#24150b] text-[#bdae9f] text-[11px] px-4 py-5 border-t border-[#3b2314] space-y-3">
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

        <div className="border-t border-[#382213] pt-3 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          <div>
            <span>&copy; 2009 Urban Grove Cafe. All Rights Reserved.</span>
            <span className="mx-2 text-[#573d28]">|</span>
            <span>Designed by <strong>MetroWave Creative Studios</strong></span>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-[#918171]">
            <span className="inline-flex items-center gap-0.5 bg-[#170c06] border border-[#3b2314] px-1.5 py-0.5 rounded-xs">
              <Rss className="w-2.5 h-2.5 text-[#ff8800]" />
              <span>RSS 2.0</span>
            </span>
            <span className="bg-[#170c06] border border-[#3b2314] px-1.5 py-0.5 rounded-xs">
              Valid XHTML 1.0 Strict
            </span>
            <span>Best viewed at 1024&times;768 resolution</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
