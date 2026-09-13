import React, { useState } from 'react';
import { NavTab } from '../types';
import { Coffee, Search, Clock, MapPin, Phone } from 'lucide-react';

interface HeaderProps {
  activeTab: NavTab;
  onNavigate: (tab: NavTab) => void;
  onSearch: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, onSearch }) => {
  const [searchVal, setSearchVal] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchVal.trim()) {
      onSearch(searchVal.trim());
    }
  };

  return (
    <header className="w-full">
      {/* Top Utility Bar with 2009 subtle dark bar styling */}
      <div className="bg-[#382313] text-[#d6c9be] text-[11px] border-b border-[#25160b] px-4 py-1.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#e6a86c]" />
            <span>Mon–Fri 6:30am–7:00pm &bull; Sat 7:30am–6:00pm &bull; Sun 8:00am–4:00pm</span>
          </span>
        </div>
        <div className="flex items-center gap-3 text-[#dfd2c7]">
          <button 
            onClick={() => onNavigate('contact')} 
            className="hover:text-white hover:underline cursor-pointer bg-transparent border-none p-0 text-[11px] text-[#dfd2c7]"
          >
            Contact
          </button>
          <span>|</span>
          <button 
            onClick={() => onNavigate('directions')} 
            className="hover:text-white hover:underline cursor-pointer bg-transparent border-none p-0 text-[11px] text-[#dfd2c7]"
          >
            Directions
          </button>
          <span>|</span>
          <button 
            onClick={() => onNavigate('contact')} 
            className="hover:text-white hover:underline cursor-pointer bg-transparent border-none p-0 text-[11px] text-[#dfd2c7]"
          >
            Opening Hours
          </button>
        </div>
      </div>

      {/* Main Photographic / Textured Header Banner */}
      <div 
        className="relative px-4 sm:px-6 py-4 sm:py-6 border-b border-[#bfae99]"
        style={{
          background: 'linear-gradient(to bottom, #fbf7f0 0%, #ede3d3 40%, #e0d3bf 100%)',
          boxShadow: 'inset 0 1px 0 #ffffff'
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Cafe Logo + Name + Tagline */}
          <div 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-3.5 cursor-pointer group select-none text-center md:text-left"
          >
            {/* 2009 Logo emblem with glossy coffee mug icon */}
            <div 
              className="w-14 h-14 rounded-md flex items-center justify-center relative flex-shrink-0"
              style={{
                background: 'linear-gradient(to bottom, #6d4a2d 0%, #4a2e18 50%, #37200f 51%, #4e321b 100%)',
                border: '1px solid #2b170a',
                boxShadow: '0 2px 4px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.3)'
              }}
            >
              <Coffee className="w-8 h-8 text-[#ffdfb8] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]" />
              <div className="absolute -bottom-1 -right-1 bg-[#b8311b] text-white text-[9px] font-bold px-1 py-0.5 rounded border border-[#6b1608] shadow-sm">
                '98
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 justify-center md:justify-start">
                <h1 
                  className="text-2xl sm:text-3xl font-extrabold tracking-tight m-0"
                  style={{
                    fontFamily: 'Georgia, Times New Roman, serif',
                    color: '#3a2211',
                    textShadow: '1px 1px 0 #ffffff, 2px 2px 2px rgba(0,0,0,0.15)'
                  }}
                >
                  Urban Grove Cafe
                </h1>
                <span className="hidden sm:inline-block text-[11px] font-bold text-[#8c5222] bg-[#fdf2e3] border border-[#d6be9f] px-1.5 py-0.5 rounded shadow-xs">
                  Est. 1998
                </span>
              </div>
              <p 
                className="text-xs sm:text-[13px] font-bold text-[#634832] m-0 mt-0.5 tracking-wide"
                style={{ fontFamily: 'Tahoma, Verdana, sans-serif' }}
              >
                Coffee &bull; Pastries &bull; Breakfast &bull; Good Times
              </p>
            </div>
          </div>

          {/* Right: Quick Contacts & Search Bar */}
          <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-auto">
            {/* Quick Contact snippet */}
            <div className="hidden sm:flex items-center gap-3 text-xs text-[#523924]">
              <span className="flex items-center gap-1 font-semibold">
                <Phone className="w-3.5 h-3.5 text-[#a8581e]" />
                <span>Call Ahead: <strong>(555) 234-5678</strong></span>
              </span>
              <span className="text-[#a89785]">&bull;</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#a8581e]" />
                <span>125 Market St, Downtown</span>
              </span>
            </div>

            {/* 2009 Style Search input */}
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-1 w-full max-w-[280px]">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  placeholder="Search menu or coffee..."
                  className="w-full text-xs px-2.5 py-1.5 pl-7 rounded border border-[#a89884] bg-[#ffffff] text-[#333333] shadow-inner focus:outline-none focus:border-[#7a4820] focus:ring-1 focus:ring-[#7a4820]"
                  style={{
                    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.15)'
                  }}
                />
                <Search className="w-3.5 h-3.5 text-[#887766] absolute left-2 top-2" />
              </div>
              <button
                type="submit"
                className="btn-web2-secondary text-xs px-2.5 py-1 flex-shrink-0"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};
