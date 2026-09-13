import React from 'react';
import { NavTab } from '../types';
import { Coffee, Award, Users, HeartHandshake, ShieldCheck, Flame, Wifi, Sparkles } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (tab: NavTab) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <section className="bg-white border border-[#cfc3b0] p-4 sm:p-5 rounded-xs shadow-xs">
        <div className="border-b border-[#dfd5c7] pb-3 mb-4">
          <span className="text-[11px] font-bold text-[#8c4c1a] uppercase tracking-wider block">
            Our Downtown Heritage
          </span>
          <h2 
            className="text-2xl font-bold text-[#3d2412] m-0"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            ABOUT URBAN GROVE CAFE
          </h2>
        </div>

        {/* Two-column layout: Left Story, Right Photo & Founders Note */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-7 space-y-3.5 text-xs sm:text-[13px] text-[#4d3a2b] leading-relaxed">
            <h3 className="text-base font-bold text-[#3d2311] m-0">
              A Downtown Dream Begun in 1998
            </h3>
            <p className="m-0">
              Urban Grove Cafe was founded in October 1998 by husband-and-wife team Bob and Martha Johnson. After spending fifteen years working in commercial printing and regional baking, they realized downtown had plenty of fast-food drive-thrus, but nowhere for downtown workers to sit down, enjoy a handcrafted espresso, and savor a genuine European-style butter croissant.
            </p>
            <p className="m-0">
              They leased a former brick haberdashery at 125 Market Street, restored the original fir floorboards, installed an Italian dual-group lever espresso machine, and opened the doors with just twelve wooden chairs and a glass pastry case.
            </p>

            <h3 className="text-base font-bold text-[#3d2311] m-0 pt-2">
              What Makes Urban Grove Different
            </h3>
            <p className="m-0">
              In an era where large chain coffee stores rely on automated pushbutton machines and frozen thaw-and-serve pastries shipped hundreds of miles, we remain dedicated to authentic craftsmanship:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#523d2e]">
              <li>
                <strong>Micro-Lot Roasting:</strong> We source fair-trade green beans from family co-ops in Huila, Colombia and Yirgacheffe, Ethiopia, roasting in 12-kilo batches every Tuesday.
              </li>
              <li>
                <strong>From-Scratch Bakery:</strong> Martha and our apprentice bakers arrive before sunrise at 5:00 AM each day to fold fresh laminated pastry dough with real butter.
              </li>
              <li>
                <strong>Community Stewardship:</strong> Sponsoring downtown public library reading series, high school art exhibits, and local neighborhood environmental cleanups.
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('menu')}
                className="btn-web2-primary"
              >
                <Coffee className="w-4 h-4 mr-1.5" />
                Explore Our Current Menu
              </button>
            </div>
          </div>

          {/* Right Column: Photograph & Founders Box */}
          <div className="md:col-span-5 space-y-4">
            <div 
              className="p-1.5 bg-[#fbf9f5] border border-[#beb09d] rounded-xs"
              style={{ boxShadow: '0 3px 6px rgba(0,0,0,0.18)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=600&q=80"
                alt="Founders Bob and Martha Johnson roasting coffee beans in the cafe workshop"
                className="w-full h-52 object-cover block border border-[#8a7a67]"
              />
              <div className="text-[11px] text-center text-[#6e5d4d] pt-1.5 font-medium italic">
                Founders Bob &amp; Martha Johnson inspecting morning coffee beans
              </div>
            </div>

            {/* Quote / Founders Note Box */}
            <div className="beveled-panel p-3.5 rounded-xs border-l-4 border-l-[#8c4c1a]">
              <h4 className="text-xs font-bold text-[#382313] m-0 mb-1 flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-[#8c4c1a]" />
                <span>A Word From the Founders:</span>
              </h4>
              <p className="text-[11px] text-[#544131] italic leading-relaxed m-0">
                "Over the past eleven years, we have seen first dates turn into weddings, university theses drafted on napkins, and neighbors become lifelong friends right here at these tables. We are honored to serve our downtown community every morning."
              </p>
              <div className="text-[10px] font-bold text-[#735843] text-right mt-1.5">
                &mdash; Bob &amp; Martha Johnson, Owners
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US? SECTION (with icon + text items) */}
      <section className="bg-white border border-[#cfc3b0] rounded-xs overflow-hidden shadow-xs">
        <div className="box-header-gradient px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#8c4c1a]" />
            <h3 className="font-bold text-xs sm:text-sm text-[#442a15] m-0 uppercase tracking-wide">
              WHY CHOOSE URBAN GROVE CAFE?
            </h3>
          </div>
          <span className="text-[11px] text-[#6d5744]">Four Pillars of Our Promise</span>
        </div>

        <div className="p-4 sm:p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Item 1 */}
            <div className="beveled-panel p-3 rounded-xs flex flex-col items-center text-center space-y-2">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(to bottom, #745136 0%, #432c1a 100%)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.25)'
                }}
              >
                <Flame className="w-5 h-5 text-[#ffd8b3]" />
              </div>
              <h4 className="text-xs font-bold text-[#382210] m-0">
                Fresh Micro-Roasts
              </h4>
              <p className="text-[11px] text-[#574435] leading-relaxed m-0">
                Beans roasted weekly within 7 days of consumption for optimal crema and peak aroma.
              </p>
            </div>

            {/* Item 2 */}
            <div className="beveled-panel p-3 rounded-xs flex flex-col items-center text-center space-y-2">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(to bottom, #8a5323 0%, #573313 100%)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.25)'
                }}
              >
                <Sparkles className="w-5 h-5 text-[#ffe8cc]" />
              </div>
              <h4 className="text-xs font-bold text-[#382210] m-0">
                5:00 AM Fresh Bakes
              </h4>
              <p className="text-[11px] text-[#574435] leading-relaxed m-0">
                All-butter croissants, jumbo fruit muffins, and sourdough baguettes prepared daily on site.
              </p>
            </div>

            {/* Item 3 */}
            <div className="beveled-panel p-3 rounded-xs flex flex-col items-center text-center space-y-2">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(to bottom, #395c2f 0%, #203b18 100%)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.25)'
                }}
              >
                <Users className="w-5 h-5 text-[#d8f5d0]" />
              </div>
              <h4 className="text-xs font-bold text-[#382210] m-0">
                Friendly Staff
              </h4>
              <p className="text-[11px] text-[#574435] leading-relaxed m-0">
                Experienced, certified baristas who take the time to know your favorite blend and brew.
              </p>
            </div>

            {/* Item 4 */}
            <div className="beveled-panel p-3 rounded-xs flex flex-col items-center text-center space-y-2">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(to bottom, #2b4f73 0%, #17324c 100%)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.25)'
                }}
              >
                <Wifi className="w-5 h-5 text-[#d4e6f7]" />
              </div>
              <h4 className="text-xs font-bold text-[#382210] m-0">
                Free High-Speed WiFi
              </h4>
              <p className="text-[11px] text-[#574435] leading-relaxed m-0">
                Fast 802.11g wireless internet and abundant AC power outlets for laptops and study groups.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
