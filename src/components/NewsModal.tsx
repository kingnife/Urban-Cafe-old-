import React from 'react';
import { NewsItem } from '../types';
import { Newspaper, X, Calendar, User } from 'lucide-react';

interface NewsModalProps {
  news: NewsItem | null;
  onClose: () => void;
}

export const NewsModal: React.FC<NewsModalProps> = ({ news, onClose }) => {
  if (!news) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div 
        className="bg-white border-4 border-[#573a24] rounded-sm max-w-lg w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 10px 40px rgba(0,0,0,0.85)'
        }}
      >
        {/* Title Bar */}
        <div className="box-header-dark px-3.5 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Newspaper className="w-4 h-4 text-[#ffd8b3]" />
            <span className="font-bold text-xs sm:text-sm text-white uppercase tracking-wide truncate max-w-[280px] sm:max-w-md">
              Cafe News &bull; {news.title}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-red-300 p-0.5 bg-transparent border-none cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 space-y-3.5">
          <div className="border-b border-[#dfd5c7] pb-2">
            <h3 className="text-base font-bold text-[#3d2412] m-0 mb-1">
              {news.title}
            </h3>
            <div className="flex items-center gap-3 text-[11px] text-[#78614e]">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#96471e]" />
                <span>{news.date}</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <User className="w-3 h-3 text-[#96471e]" />
                <span>{news.author}</span>
              </span>
            </div>
          </div>

          <div className="relative">
            <img
              src={news.thumbnail}
              alt={news.title}
              className="w-full h-48 object-cover rounded-xs border border-[#a89886]"
            />
          </div>

          <p className="text-xs sm:text-[13px] text-[#4d3a2b] leading-relaxed m-0">
            {news.fullText}
          </p>

          <div className="pt-2 border-t border-[#dfd5c7] flex justify-end">
            <button
              onClick={onClose}
              className="btn-web2-secondary text-xs"
            >
              Close Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
