import React, { useState } from 'react';
import { MenuCategory, MenuItem } from '../types';
import { MENU_ITEMS } from '../data/cafeData';
import { Coffee, Search, Printer, Check, Sparkles } from 'lucide-react';

interface MenuViewProps {
  initialSearchQuery?: string;
}

const CATEGORIES: MenuCategory[] = [
  'COFFEE & ESPRESSO',
  'TEA',
  'BREAKFAST',
  'SANDWICHES',
  'PASTRIES',
  'DESSERTS',
  'COLD DRINKS'
];

export const MenuView: React.FC<MenuViewProps> = ({ initialSearchQuery = '' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>(initialSearchQuery);
  const [copiedPrint, setCopiedPrint] = useState(false);

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Group items by category
  const groupedItems = CATEGORIES.reduce((acc, cat) => {
    const itemsInCat = filteredItems.filter((item) => item.category === cat);
    if (itemsInCat.length > 0) {
      acc[cat] = itemsInCat;
    }
    return acc;
  }, {} as Record<MenuCategory, MenuItem[]>);

  const handlePrint = () => {
    window.print();
    setCopiedPrint(true);
    setTimeout(() => setCopiedPrint(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Menu Header Banner */}
      <div className="bg-white border border-[#cfc3b0] p-4 rounded-xs shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#dfd5c7] pb-3">
          <div>
            <span className="text-[11px] font-bold text-[#8c4c1a] uppercase tracking-wider block">
              Daily Roasted &amp; Freshly Baked
            </span>
            <h2 
              className="text-2xl font-bold text-[#3d2412] m-0"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              URBAN GROVE CAFE MENU
            </h2>
          </div>

          <button
            onClick={handlePrint}
            className="btn-web2-secondary text-xs flex items-center gap-1.5"
          >
            {copiedPrint ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Printer className="w-3.5 h-3.5" />}
            <span>Printable Menu (PDF Style)</span>
          </button>
        </div>

        {/* Filter Bar */}
        <div className="pt-3 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`text-xs px-2.5 py-1 rounded-xs font-bold border transition-colors ${
                selectedCategory === 'ALL'
                  ? 'bg-[#593c25] text-white border-[#34200f] shadow-inner'
                  : 'bg-[#faf7f2] text-[#4d3622] border-[#c4b5a2] hover:bg-[#ede3d5]'
              }`}
            >
              All Items ({MENU_ITEMS.length})
            </button>
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[11px] px-2 py-1 rounded-xs font-bold border transition-colors ${
                    isSelected
                      ? 'bg-[#593c25] text-white border-[#34200f] shadow-inner'
                      : 'bg-[#faf7f2] text-[#4d3622] border-[#c4b5a2] hover:bg-[#ede3d5]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[200px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, tea, beans..."
              className="w-full text-xs px-2.5 py-1 pl-7 rounded border border-[#baa995] bg-white shadow-inner focus:outline-none focus:border-[#7a4820]"
            />
            <Search className="w-3.5 h-3.5 text-[#887766] absolute left-2 top-1.5" />
          </div>
        </div>
      </div>

      {/* Menu Categories List */}
      {Object.keys(groupedItems).length === 0 ? (
        <div className="bg-white border border-[#cfc3b0] p-8 text-center text-[#6e5a48]">
          <p className="text-sm font-semibold m-0">No menu items found matching "{searchQuery}".</p>
          <button
            onClick={() => { setSelectedCategory('ALL'); setSearchQuery(''); }}
            className="btn-web2-secondary text-xs mt-3"
          >
            Clear Search &amp; Show All
          </button>
        </div>
      ) : (
        Object.entries(groupedItems).map(([category, items]) => (
          <section
            key={category}
            className="bg-white border border-[#cfc3b0] rounded-xs overflow-hidden shadow-xs"
          >
            {/* Category Header */}
            <div className="box-header-gradient px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#8a4e1d]" />
                <h3 className="font-bold text-sm text-[#442a15] m-0 tracking-wider">
                  {category}
                </h3>
              </div>
              <span className="text-[11px] text-[#705a46] italic">
                {items.length} {items.length === 1 ? 'Selection' : 'Selections'}
              </span>
            </div>

            {/* Category Items List (Traditional 2009 Layout: Name - Price with dotted leader) */}
            <div className="p-4 sm:p-5 divide-y divide-[#eee6da]">
              {items.map((item) => (
                <div key={item.id} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="flex items-center gap-2 flex-grow">
                      <span className="text-xs sm:text-[13px] font-bold text-[#2d1b0f]">
                        {item.name}
                      </span>
                      {item.badge && (
                        <span className="text-[10px] font-bold text-[#962817] bg-[#fdedeb] border border-[#e5a89e] px-1.5 py-0.2 rounded-xs">
                          {item.badge}
                        </span>
                      )}
                      {item.popular && (
                        <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-[#825223] bg-[#fcf3e8] border border-[#decbb8] px-1.5 py-0.2 rounded-xs">
                          <Sparkles className="w-2.5 h-2.5 text-[#b06720]" />
                          House Favorite
                        </span>
                      )}
                      {/* Dotted leader for desktop view */}
                      <span className="hidden sm:inline-block flex-grow border-b border-dotted border-[#c4b5a2] mx-2 opacity-60"></span>
                    </div>

                    <span className="text-xs sm:text-[13px] font-bold text-[#824416] flex-shrink-0 self-end sm:self-auto">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#594738] leading-relaxed mt-1 mb-0 sm:max-w-[85%]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))
      )}

      {/* 2009 Era Menu Notice Box */}
      <div className="beveled-panel p-3.5 rounded-xs text-xs text-[#523e2e] space-y-1.5">
        <div className="font-bold text-[#382313] flex items-center gap-1.5">
          <span>&bull;</span>
          <span>CAFÉ MENU NOTES &amp; SUBSTITUTIONS:</span>
        </div>
        <p className="m-0 pl-3">
          <strong>Dairy Alternatives:</strong> Certified Organic Soy Milk or Almond Milk available in any handcrafted beverage (+ $0.50).
        </p>
        <p className="m-0 pl-3">
          <strong>Syrup Flavors:</strong> Madagascar Vanilla, Roasted Hazelnut, Caramel, Peppermint, Sugar-Free Vanilla (+ $0.40).
        </p>
        <p className="m-0 pl-3">
          <strong>Dietary Notice:</strong> Please inform our counter staff if anyone in your party has food allergies. We grind nuts on premises.
        </p>
      </div>
    </div>
  );
};
