import React from 'react';
import { NavTab, NewsItem } from '../types';
import { TODAY_SPECIAL, SERVICES_LIST, LATEST_NEWS, CUSTOMER_REVIEWS } from '../data/cafeData';
import { Coffee, Croissant, Utensils, PartyPopper, Star, ArrowRight, Tag, Heart, Award } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (tab: NavTab) => void;
  onOpenSpecialModal: () => void;
  onOpenNewsModal: (news: NewsItem) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenSpecialModal,
  onOpenNewsModal
}) => {
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-[#824b1f]" />;
      case 'Croissant':
        return <Croissant className="w-5 h-5 text-[#b06720]" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-[#426b34]" />;
      case 'PartyPopper':
        return <PartyPopper className="w-5 h-5 text-[#912d1b]" />;
      default:
        return <Coffee className="w-5 h-5 text-[#824b1f]" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. MAIN WELCOME SECTION (Two-column layout) */}
      <section className="bg-white border border-[#cfc3b0] p-4 sm:p-5 rounded-sm shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          {/* Left: Large Café Photograph */}
          <div className="md:col-span-5">
            <div 
              className="p-1.5 bg-[#fbf9f5] border border-[#beb09d] rounded-xs"
              style={{
                boxShadow: '0 3px 6px rgba(0,0,0,0.18), inset 0 0 0 1px #ffffff'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=700&q=80"
                alt="Urban Grove Cafe cozy dining interior and barista bar"
                className="w-full h-52 sm:h-64 object-cover block border border-[#8a7a67]"
              />
              <div className="text-[11px] text-center text-[#6e5d4d] pt-1.5 font-medium italic">
                Our cozy downtown dining hall & espresso bar on Market Street
              </div>
            </div>
          </div>

          {/* Right: Welcome copy and 2009 glossy buttons */}
          <div className="md:col-span-7 space-y-3">
            <div className="border-b border-[#e2d8ca] pb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#965520] block">
                Downtown Neighborhood Coffeehouse
              </span>
              <h2 
                className="text-xl sm:text-2xl font-bold text-[#3d2412] m-0"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                WELCOME TO URBAN GROVE CAFE
              </h2>
            </div>

            <p className="text-xs sm:text-[13px] text-[#4d3a2b] leading-relaxed">
              Serving freshly brewed coffee, homemade pastries and good food since 1998. Located in the heart of historic downtown, Urban Grove Cafe is where neighbors gather for morning espressos, midday business luncheons, and warm afternoon treats.
            </p>

            <p className="text-xs sm:text-[13px] text-[#4d3a2b] leading-relaxed">
              Every bean is ethically sourced and roasted with care in small weekly batches. Our bakers arrive each morning at 5:00 AM to prepare artisanal muffins, croissants, and sourdough breads from scratch with wholesome local ingredients.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('menu')}
                className="btn-web2-primary"
              >
                <Coffee className="w-4 h-4 mr-1.5" />
                View Our Menu
              </button>

              <button
                onClick={() => onNavigate('directions')}
                className="btn-web2-secondary"
              >
                Find Us &bull; Map &amp; Hours
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TODAY'S SPECIAL (Boxed Promotional Section) */}
      <section 
        className="border border-[#b82d1c] rounded-xs overflow-hidden"
        style={{
          boxShadow: '0 2px 5px rgba(0,0,0,0.12)'
        }}
      >
        <div className="box-header-dark flex items-center justify-between px-3.5 py-2">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-[#ffcc66]" />
            <span className="font-bold text-xs sm:text-sm tracking-wide text-white uppercase">
              TODAY'S SPECIAL &bull; {TODAY_SPECIAL.badge}
            </span>
          </div>
          <span className="text-[11px] font-bold text-[#ffd580] bg-[#311709] px-2 py-0.5 rounded border border-[#6b3815]">
            {TODAY_SPECIAL.availableUntil}
          </span>
        </div>

        <div className="bg-[#fffdf8] p-3.5 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            <div className="sm:col-span-4">
              <div 
                className="p-1 bg-white border border-[#c4b59f] rounded-xs"
                style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.15)' }}
              >
                <img
                  src={TODAY_SPECIAL.imageUrl}
                  alt={TODAY_SPECIAL.name}
                  className="w-full h-36 sm:h-40 object-cover block border border-[#806f59]"
                />
              </div>
            </div>

            <div className="sm:col-span-8 space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base sm:text-lg font-bold text-[#7a1c0f] m-0">
                  {TODAY_SPECIAL.name}
                </h3>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xs text-[#888888] line-through">
                    {TODAY_SPECIAL.originalPrice}
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-[#9e2313] bg-[#feece9] border border-[#e5a297] px-2 py-0.5 rounded-xs">
                    {TODAY_SPECIAL.price}
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#523d2b] leading-relaxed">
                {TODAY_SPECIAL.description}
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenSpecialModal}
                  className="btn-web2-red"
                >
                  Order / Ask About It &raquo;
                </button>
                <span className="text-[11px] text-[#735e4d] italic">
                  Ask your server or telephone (555) 234-5678 for takeout prep!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TWO-COLUMN SPLIT: OUR SERVICES (Left 7 cols) & LATEST NEWS (Right 5 cols) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left: OUR SERVICES (2-column layout with small illustrated/glossy icons) */}
        <section className="md:col-span-7 bg-white border border-[#cfc3b0] rounded-xs overflow-hidden shadow-xs">
          <div className="box-header-gradient px-3.5 py-2 flex items-center justify-between">
            <h3 className="font-bold text-xs sm:text-sm text-[#442a15] m-0 uppercase tracking-wide">
              OUR SERVICES &amp; OFFERINGS
            </h3>
            <button
              onClick={() => onNavigate('services')}
              className="text-[11px] font-bold text-[#824416] hover:underline bg-transparent border-none p-0 cursor-pointer"
            >
              Full Details &raquo;
            </button>
          </div>

          <div className="p-3 sm:p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {SERVICES_LIST.map((service) => (
                <div 
                  key={service.id}
                  className="beveled-panel p-2.5 rounded-xs flex gap-2.5 items-start hover:border-[#a89680] transition-colors"
                >
                  <div 
                    className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(to bottom, #ffffff 0%, #ede6db 50%, #dfd4c3 51%, #eae2d4 100%)',
                      border: '1px solid #baa894',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                    }}
                  >
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#3b2311] m-0 mb-0.5">
                      {service.title}
                    </h4>
                    <p className="text-[11px] text-[#5c4938] leading-snug m-0">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sub banner for catering */}
            <div className="mt-3 pt-2.5 border-t border-[#e2d7c8] flex items-center justify-between text-xs text-[#523d2b]">
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#945523]" />
                <span>Hosting an office conference? Ask about our 96oz Coffee-to-Go boxes!</span>
              </span>
              <button
                onClick={() => onNavigate('services')}
                className="text-[11px] font-bold text-[#824416] hover:underline"
              >
                Catering Info
              </button>
            </div>
          </div>
        </section>

        {/* Right: LATEST NEWS */}
        <section className="md:col-span-5 bg-white border border-[#cfc3b0] rounded-xs overflow-hidden shadow-xs">
          <div className="box-header-gradient px-3.5 py-2 flex items-center justify-between">
            <h3 className="font-bold text-xs sm:text-sm text-[#442a15] m-0 uppercase tracking-wide">
              LATEST NEWS
            </h3>
            <span className="text-[10px] text-[#735d49]">Spring 2009</span>
          </div>

          <div className="p-3 sm:p-4 divide-y divide-[#ece2d5]">
            {LATEST_NEWS.map((item) => (
              <div key={item.id} className="py-2.5 first:pt-0 last:pb-0">
                <div className="flex gap-2.5 items-start">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-14 h-14 object-cover rounded-xs border border-[#a89784] flex-shrink-0"
                    style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
                  />
                  <div className="space-y-1">
                    <div className="text-[10px] text-[#855325] font-semibold">
                      {item.date} &bull; by {item.author}
                    </div>
                    <h4 className="text-xs font-bold text-[#2e1d10] leading-snug m-0">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#574435] leading-snug line-clamp-2 m-0">
                      {item.excerpt}
                    </p>
                    <div>
                      <button
                        onClick={() => onOpenNewsModal(item)}
                        className="text-[11px] font-bold text-[#0044aa] hover:text-[#990000] hover:underline inline-flex items-center gap-0.5 cursor-pointer bg-transparent border-none p-0"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 4. CUSTOMER REVIEWS (Traditional Testimonial Section) */}
      <section className="bg-white border border-[#cfc3b0] rounded-xs overflow-hidden shadow-xs">
        <div className="box-header-gradient px-3.5 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-[#9c301e]" />
            <h3 className="font-bold text-xs sm:text-sm text-[#442a15] m-0 uppercase tracking-wide">
              CUSTOMER REVIEWS &amp; TESTIMONIALS
            </h3>
          </div>
          <span className="text-[11px] text-[#6d5744]">From Downtown Neighbors &amp; Regulars</span>
        </div>

        <div className="p-3.5 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {CUSTOMER_REVIEWS.map((review) => (
              <div 
                key={review.id}
                className="beveled-panel p-3 rounded-xs flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-8 h-8 rounded-full object-cover border border-[#998772]"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#382210] leading-tight">
                        {review.name}
                      </div>
                      {review.role && (
                        <div className="text-[10px] text-[#786350] leading-tight">
                          {review.role}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 4-5 Small Star Icons */}
                  <div className="flex items-center gap-0.5 text-[#e0881b]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < review.rating ? 'fill-current' : 'text-[#d8c8b4]'}`} 
                      />
                    ))}
                    <span className="text-[10px] text-[#7a6452] ml-1 font-semibold">{review.date}</span>
                  </div>

                  <p className="text-[11px] text-[#4d3a2b] italic leading-relaxed m-0">
                    "{review.comment}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
