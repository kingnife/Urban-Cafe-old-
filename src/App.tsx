import React, { useState } from 'react';
import { NavTab, NewsItem } from './types';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HomeView } from './components/HomeView';
import { MenuView } from './components/MenuView';
import { AboutView } from './components/AboutView';
import { ServicesView } from './components/ServicesView';
import { GalleryView } from './components/GalleryView';
import { EventsView } from './components/EventsView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { SpecialOrderModal } from './components/SpecialOrderModal';
import { NewsModal } from './components/NewsModal';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSpecialModalOpen, setIsSpecialModalOpen] = useState<boolean>(false);
  const [activeNews, setActiveNews] = useState<NewsItem | null>(null);

  const handleHeaderSearch = (query: string) => {
    setSearchQuery(query);
    setActiveTab('menu');
  };

  const handleNavigate = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen py-0 sm:py-3 md:py-6 px-0 sm:px-2 md:px-4">
      {/* 2009 Centered Fixed/Max-width Central Container (~980px) */}
      <div 
        id="main-cafe-container" 
        className="max-w-[980px] w-full mx-auto web2-container rounded-none sm:rounded-sm overflow-hidden flex flex-col"
        style={{
          border: '1px solid #9e8e7c'
        }}
      >
        {/* Header with logo, tagline, utility links, search */}
        <Header 
          activeTab={activeTab} 
          onNavigate={handleNavigate} 
          onSearch={handleHeaderSearch} 
        />

        {/* Tabbed Navigation Bar */}
        <Navigation 
          activeTab={activeTab} 
          onSelectTab={handleNavigate} 
        />

        {/* Main Content Area */}
        <main className="p-3 sm:p-5 md:p-6 bg-[#fcfbfa] flex-grow min-h-[500px]">
          {activeTab === 'home' && (
            <HomeView
              onNavigate={handleNavigate}
              onOpenSpecialModal={() => setIsSpecialModalOpen(true)}
              onOpenNewsModal={(news) => setActiveNews(news)}
            />
          )}

          {activeTab === 'about' && (
            <AboutView onNavigate={handleNavigate} />
          )}

          {activeTab === 'menu' && (
            <MenuView initialSearchQuery={searchQuery} />
          )}

          {activeTab === 'services' && (
            <ServicesView />
          )}

          {activeTab === 'gallery' && (
            <GalleryView />
          )}

          {activeTab === 'events' && (
            <EventsView />
          )}

          {(activeTab === 'contact' || activeTab === 'directions') && (
            <ContactView initialFocus={activeTab} />
          )}
        </main>

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>

      {/* Today's Special Order Modal */}
      <SpecialOrderModal
        isOpen={isSpecialModalOpen}
        onClose={() => setIsSpecialModalOpen(false)}
      />

      {/* Latest News Full Reader Modal */}
      <NewsModal
        news={activeNews}
        onClose={() => setActiveNews(null)}
      />
    </div>
  );
};

export default App;
