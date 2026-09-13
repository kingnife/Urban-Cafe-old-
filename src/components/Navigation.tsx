import React from 'react';
import { NavTab } from '../types';
import { Home, Info, BookOpen, Wrench, Image, Calendar, Mail, Compass } from 'lucide-react';

interface NavigationProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

interface TabDef {
  id: NavTab;
  label: string;
  icon: React.ReactNode;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onSelectTab }) => {
  const tabs: TabDef[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-3.5 h-3.5 mr-1 inline-block opacity-80" /> },
    { id: 'about', label: 'About Us', icon: <Info className="w-3.5 h-3.5 mr-1 inline-block opacity-80" /> },
    { id: 'menu', label: 'Menu', icon: <BookOpen className="w-3.5 h-3.5 mr-1 inline-block opacity-80" /> },
    { id: 'services', label: 'Services', icon: <Wrench className="w-3.5 h-3.5 mr-1 inline-block opacity-80" /> },
    { id: 'gallery', label: 'Gallery', icon: <Image className="w-3.5 h-3.5 mr-1 inline-block opacity-80" /> },
    { id: 'events', label: 'Events', icon: <Calendar className="w-3.5 h-3.5 mr-1 inline-block opacity-80" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-3.5 h-3.5 mr-1 inline-block opacity-80" /> },
    { id: 'directions', label: 'Directions', icon: <Compass className="w-3.5 h-3.5 mr-1 inline-block opacity-80" /> },
  ];

  return (
    <nav 
      aria-label="Main Navigation"
      className="w-full border-b border-[#bfae99] px-2 sm:px-4 pt-2 overflow-x-auto scrollbar-none"
      style={{
        background: 'linear-gradient(to bottom, #dcd1be 0%, #cfc0a9 50%, #c1b097 51%, #cbbaa1 100%)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)'
      }}
    >
      <div className="flex items-center gap-1 min-w-max">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`nav-tab-item flex items-center text-xs sm:text-[13px] ${isActive ? 'active' : ''}`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
