import React from 'react';
import { UPCOMING_EVENTS } from '../data/cafeData';
import { Calendar, Clock, MapPin, Tag, Music, BookOpen, Coffee } from 'lucide-react';

export const EventsView: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white border border-[#cfc3b0] p-4 rounded-xs shadow-xs">
        <div className="border-b border-[#dfd5c7] pb-3 mb-2">
          <span className="text-[11px] font-bold text-[#8c4c1a] uppercase tracking-wider block">
            Community Gatherings &amp; Culture
          </span>
          <h2 
            className="text-2xl font-bold text-[#3d2412] m-0"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            EVENTS &amp; LIVE MUSIC CALENDAR
          </h2>
        </div>
        <p className="text-xs sm:text-[13px] text-[#4d3a2b] leading-relaxed m-0">
          Join us for weekly community gatherings, acoustic performances, coffee tasting seminars, and book circles. Admission to most evening events is complimentary for cafe patrons.
        </p>
      </div>

      {/* Events Listings */}
      <div className="space-y-4">
        {UPCOMING_EVENTS.map((event) => (
          <div
            key={event.id}
            className="bg-white border border-[#cfc3b0] rounded-xs overflow-hidden shadow-xs"
          >
            <div className="box-header-gradient px-4 py-2.5 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Music className="w-4 h-4 text-[#8c4c1a]" />
                <h3 className="font-bold text-sm text-[#3b2311] m-0">
                  {event.title}
                </h3>
              </div>
              <span className="text-xs font-bold text-[#8c4c1a] bg-[#faefe3] border border-[#d6be9f] px-2 py-0.5 rounded-xs">
                {event.day}
              </span>
            </div>

            <div className="p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div className="space-y-2 flex-grow">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#6e5845]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#9e541c]" />
                      <span>{event.time}</span>
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#9e541c]" />
                      <span>{event.dateStr}</span>
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#9e541c]" />
                      <span>Main Fireside Stage</span>
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#4d3a2b] leading-relaxed m-0">
                    {event.description}
                  </p>
                </div>

                <div className="sm:text-right flex flex-col items-start sm:items-end justify-between gap-2 flex-shrink-0">
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-[#2a5c18] bg-[#f0f7ec] border border-[#b1d4a0] px-2.5 py-1 rounded-xs">
                    <Tag className="w-3.5 h-3.5 text-[#2a5c18]" />
                    <span>{event.admission}</span>
                  </div>
                  <span className="text-[11px] text-[#7a6452] italic">
                    No reservations required
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Host an Event Notice */}
      <div className="beveled-panel p-4 rounded-xs border border-[#cfc3b0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h4 className="text-xs font-bold text-[#382313] m-0 mb-0.5 flex items-center gap-1.5">
            <Coffee className="w-4 h-4 text-[#8c4c1a]" />
            <span>Are you a local acoustic artist, poet, or club organizer?</span>
          </h4>
          <p className="text-[11px] text-[#544131] m-0">
            We love supporting neighborhood talents. Inquire with our manager Bob to book our fireside stage.
          </p>
        </div>
        <div className="text-xs font-bold text-[#8c4c1a] whitespace-nowrap">
          Call (555) 234-5678 ext. 3
        </div>
      </div>
    </div>
  );
};
