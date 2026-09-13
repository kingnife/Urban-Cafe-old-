import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/cafeData';
import { GalleryPhoto } from '../types';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const CATEGORIES = ['All', 'Café Interior', 'Coffee', 'Pastries', 'Food', 'Customers', 'Events'] as const;

export const GalleryView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos = selectedCategory === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  const openLightbox = (photo: GalleryPhoto) => {
    const idx = filteredPhotos.findIndex((p) => p.id === photo.id);
    if (idx !== -1) {
      setActivePhotoIndex(idx);
    }
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const showPrev = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const showNext = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const currentPhoto = activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white border border-[#cfc3b0] p-4 rounded-xs shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#dfd5c7] pb-3 mb-3">
          <div>
            <span className="text-[11px] font-bold text-[#8c4c1a] uppercase tracking-wider block">
              Photographs &amp; Moments
            </span>
            <h2 
              className="text-2xl font-bold text-[#3d2412] m-0"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              URBAN GROVE PHOTO GALLERY
            </h2>
          </div>
          <span className="text-xs text-[#75604e] italic">
            Click any thumbnail to open the Lightbox Viewer
          </span>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-2.5 py-1 rounded-xs font-bold border transition-colors ${
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
      </div>

      {/* Thumbnails Grid (Framed thumbnails with borders and subtle shadows) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(photo)}
            className="group cursor-pointer bg-white p-2 border border-[#c4b5a0] rounded-xs transition-all hover:border-[#875529] hover:shadow-md"
            style={{
              boxShadow: '0 2px 5px rgba(0,0,0,0.12)'
            }}
          >
            {/* Framed Photo */}
            <div className="relative overflow-hidden border border-[#8f7e6a] bg-[#221307] aspect-4/3">
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 flex items-center justify-center transition-colors">
                <div className="opacity-0 group-hover:opacity-100 bg-[#3b2311]/85 text-white text-[11px] font-bold px-2 py-1 rounded border border-white/40 flex items-center gap-1 shadow-md">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Enlarge</span>
                </div>
              </div>
            </div>

            <div className="pt-2 px-0.5">
              <span className="text-[10px] font-bold text-[#8c4c1a] block">
                {photo.category}
              </span>
              <h4 className="text-xs font-bold text-[#332011] leading-tight m-0 truncate">
                {photo.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* 2009 LIGHTBOX MODAL */}
      {currentPhoto && activePhotoIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs"
          onClick={closeLightbox}
        >
          <div 
            className="bg-[#ffffff] border-4 border-[#3d2716] rounded-sm shadow-2xl max-w-2xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: '0 10px 40px rgba(0,0,0,0.85), 0 0 0 1px #a48a73'
            }}
          >
            {/* 2009 Window Title Bar */}
            <div className="box-header-dark px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#e0a86c]" />
                <span className="font-bold text-xs text-white uppercase tracking-wider truncate max-w-[280px] sm:max-w-md">
                  {currentPhoto.title}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-[#ffd8b3]">
                  Image {activePhotoIndex + 1} of {filteredPhotos.length}
                </span>
                <button
                  onClick={closeLightbox}
                  className="text-white hover:text-red-300 p-0.5 bg-transparent border-none cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Photo Container */}
            <div className="p-3 bg-[#1f130b] flex items-center justify-center relative min-h-[300px]">
              <img
                src={currentPhoto.imageUrl}
                alt={currentPhoto.title}
                className="max-h-[60vh] w-auto max-w-full object-contain border border-[#523924]"
              />

              {/* Prev / Next navigation overlays */}
              <button
                onClick={showPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#3b2311]/80 hover:bg-[#59381e] text-white p-2 rounded border border-[#8a684b] shadow-lg transition-colors cursor-pointer"
                title="Previous Image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={showNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#3b2311]/80 hover:bg-[#59381e] text-white p-2 rounded border border-[#8a684b] shadow-lg transition-colors cursor-pointer"
                title="Next Image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Footer with Caption & Close */}
            <div className="bg-[#f7f3ed] border-t border-[#d8cdbd] p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
              <div>
                <span className="font-bold text-[#3d2412]">{currentPhoto.title} &bull; </span>
                <span className="text-[#594738]">{currentPhoto.caption}</span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-auto">
                <button
                  onClick={closeLightbox}
                  className="btn-web2-secondary text-xs py-1 px-3"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
