import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Navigation, Bus, Car } from 'lucide-react';

interface ContactViewProps {
  initialFocus?: 'contact' | 'directions';
}

export const ContactView: React.FC<ContactViewProps> = ({ initialFocus = 'contact' }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setIsSent(true);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white border border-[#cfc3b0] p-4 rounded-xs shadow-xs">
        <div className="border-b border-[#dfd5c7] pb-3 mb-2">
          <span className="text-[11px] font-bold text-[#8c4c1a] uppercase tracking-wider block">
            We'd Love to Hear From You
          </span>
          <h2 
            className="text-2xl font-bold text-[#3d2412] m-0"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            CONTACT US &bull; LOCATION &bull; HOURS
          </h2>
        </div>
        <p className="text-xs sm:text-[13px] text-[#4d3a2b] leading-relaxed m-0">
          Have a question about our menu, need to place a catering order, or looking for directions to our historic downtown cafe? Reach out or visit us in person!
        </p>
      </div>

      {/* Grid: Left Contact Info & Hours (5 cols) | Right Contact Form (7 cols) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column: Direct Info & Hours */}
        <div className="md:col-span-5 space-y-4">
          {/* Contact Details Box */}
          <div className="bg-white border border-[#cfc3b0] rounded-xs overflow-hidden shadow-xs">
            <div className="box-header-gradient px-3.5 py-2">
              <h3 className="font-bold text-xs sm:text-sm text-[#442a15] m-0 uppercase tracking-wide">
                CAFE CONTACT INFORMATION
              </h3>
            </div>
            <div className="p-4 space-y-3 text-xs text-[#4d3a2b]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8c4c1a] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#332011]">Street Address:</strong>
                  <span>Urban Grove Cafe</span><br />
                  <span>125 Market Street, Suite 104</span><br />
                  <span>Downtown Historic District</span><br />
                  <span className="text-[11px] text-[#786350]">(Between 2nd &amp; 3rd Avenues)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-[#f0e8dd]">
                <Phone className="w-4 h-4 text-[#8c4c1a] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#332011]">Telephone:</strong>
                  <span>Front Counter: (555) 234-5678</span><br />
                  <span>Catering Dept: (555) 234-5679</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-[#f0e8dd]">
                <Mail className="w-4 h-4 text-[#8c4c1a] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#332011]">Electronic Mail:</strong>
                  <span className="text-[#0044aa]">info@urbangrovecafe.com</span><br />
                  <span className="text-[#0044aa]">catering@urbangrovecafe.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours Box */}
          <div className="bg-white border border-[#cfc3b0] rounded-xs overflow-hidden shadow-xs">
            <div className="box-header-gradient px-3.5 py-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#8c4c1a]" />
                <h3 className="font-bold text-xs sm:text-sm text-[#442a15] m-0 uppercase tracking-wide">
                  OPERATING HOURS
                </h3>
              </div>
              <span className="text-[10px] text-[#2a5c18] font-bold bg-[#edf7e8] border border-[#aed49d] px-1.5 py-0.5 rounded-xs">
                Open Daily
              </span>
            </div>
            <div className="p-3 sm:p-4 text-xs">
              <table className="w-full text-left text-xs text-[#4d3a2b] border-collapse">
                <tbody>
                  <tr className="border-b border-[#eee4d6]">
                    <td className="py-1.5 font-bold text-[#382312]">Monday – Thursday:</td>
                    <td className="py-1.5 text-right font-medium">6:30 AM – 7:00 PM</td>
                  </tr>
                  <tr className="border-b border-[#eee4d6] bg-[#fbf9f5]">
                    <td className="py-1.5 font-bold text-[#382312]">Friday (Live Music):</td>
                    <td className="py-1.5 text-right font-medium">6:30 AM – 9:30 PM</td>
                  </tr>
                  <tr className="border-b border-[#eee4d6]">
                    <td className="py-1.5 font-bold text-[#382312]">Saturday:</td>
                    <td className="py-1.5 text-right font-medium">7:30 AM – 6:00 PM</td>
                  </tr>
                  <tr className="bg-[#fbf9f5]">
                    <td className="py-1.5 font-bold text-[#382312]">Sunday:</td>
                    <td className="py-1.5 text-right font-medium">8:00 AM – 4:00 PM</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-[11px] text-[#735e4d] italic mt-2 text-center">
                * Espresso bar &amp; fresh bakes available throughout all open hours
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:col-span-7">
          <div className="bg-white border border-[#cfc3b0] rounded-xs overflow-hidden shadow-xs h-full">
            <div className="box-header-gradient px-4 py-2.5 flex items-center justify-between">
              <h3 className="font-bold text-xs sm:text-sm text-[#442a15] m-0 uppercase tracking-wide">
                SEND US AN ELECTRONIC MESSAGE
              </h3>
              <span className="text-[11px] text-[#6d5744]">All fields with * are required</span>
            </div>

            <div className="p-4 sm:p-5">
              {isSent ? (
                <div className="p-6 bg-[#f2f8ed] border border-[#a4c995] rounded-xs text-center space-y-3">
                  <CheckCircle className="w-10 h-10 text-[#417d2a] mx-auto" />
                  <h4 className="text-base font-bold text-[#2a5619] m-0">
                    Message Successfully Sent!
                  </h4>
                  <p className="text-xs text-[#3b6329] leading-relaxed max-w-md mx-auto m-0">
                    Thank you, <strong>{formState.name}</strong>. Your note regarding "<strong>{formState.subject}</strong>" has been forwarded to Martha &amp; Bob at the front desk. We typically reply within 1–2 business days.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setFormState({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                    }}
                    className="btn-web2-secondary text-xs mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#3d2715] mb-1">
                      Your Full Name: <span className="text-red-700">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full text-xs px-2.5 py-1.5 rounded border border-[#baa995] bg-white shadow-inner focus:outline-none focus:border-[#7a4820]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#3d2715] mb-1">
                        Email Address: <span className="text-red-700">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="eleanor@example.com"
                        className="w-full text-xs px-2.5 py-1.5 rounded border border-[#baa995] bg-white shadow-inner focus:outline-none focus:border-[#7a4820]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#3d2715] mb-1">
                        Phone (Optional):
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full text-xs px-2.5 py-1.5 rounded border border-[#baa995] bg-white shadow-inner focus:outline-none focus:border-[#7a4820]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3d2715] mb-1">
                      Subject / Topic:
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full text-xs px-2.5 py-1.5 rounded border border-[#baa995] bg-white shadow-inner focus:outline-none focus:border-[#7a4820]"
                    >
                      <option value="General Inquiry">General Cafe Question</option>
                      <option value="Coffee Bean Inquiry">Retail Beans &amp; Roasting Schedule</option>
                      <option value="Live Music & Bookings">Live Music Booking / Open Mic</option>
                      <option value="Compliment or Feedback">Staff Compliment / Feedback</option>
                      <option value="Lost & Found">Lost &amp; Found Item</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3d2715] mb-1">
                      Your Message: <span className="text-red-700">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Please write your questions, comments, or requests here..."
                      className="w-full text-xs p-2.5 rounded border border-[#baa995] bg-white shadow-inner focus:outline-none focus:border-[#7a4820]"
                    />
                  </div>

                  <div className="pt-1 flex items-center justify-between">
                    <button
                      type="submit"
                      className="btn-web2-primary"
                    >
                      <Send className="w-3.5 h-3.5 mr-1.5" />
                      Send Message Now
                    </button>
                    <span className="text-[11px] text-[#7d6754] italic">
                      We never share your email address.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* "FIND US" / MAP SECTION */}
      <section id="directions" className="bg-white border border-[#cfc3b0] rounded-xs overflow-hidden shadow-xs">
        <div className="box-header-gradient px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Navigation className="w-4 h-4 text-[#8c4c1a]" />
            <h3 className="font-bold text-xs sm:text-sm text-[#442a15] m-0 uppercase tracking-wide">
              FIND US &bull; DIRECTIONS &amp; PARKING
            </h3>
          </div>
          <span className="text-[11px] text-[#6d5744]">Downtown Transit &amp; Parking Guide</span>
        </div>

        <div className="p-4 sm:p-5 space-y-4">
          {/* Authentic 2009 Styled Map Widget */}
          <div className="border-2 border-[#b09e8b] bg-[#e8e4db] rounded-xs overflow-hidden relative shadow-inner">
            {/* 2009 Map toolbar */}
            <div className="bg-[#543b27] text-white text-[11px] px-3 py-1 flex items-center justify-between">
              <span className="font-bold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#ffcc66]" />
                Interactive Street Map &bull; 125 Market St, Downtown
              </span>
              <span className="text-[10px] text-[#dfd0c0]">Map Scale: 1:5000</span>
            </div>

            {/* Simulated Vector Street Grid for Map */}
            <div className="h-64 sm:h-72 w-full bg-[#f4efe6] relative overflow-hidden flex items-center justify-center select-none">
              {/* Grid Roads */}
              <div className="absolute inset-0 opacity-40">
                <div className="absolute left-0 right-0 top-1/4 h-8 bg-[#ffffff] border-y border-[#d0c4b2]"></div>
                <div className="absolute left-0 right-0 top-1/2 h-12 bg-[#fffdf0] border-y-2 border-[#c2b29d] flex items-center justify-around text-[10px] font-bold text-[#8c7864] tracking-widest">
                  <span>MARKET STREET (EASTBOUND)</span>
                  <span>MARKET STREET (WESTBOUND)</span>
                </div>
                <div className="absolute left-0 right-0 bottom-1/5 h-8 bg-[#ffffff] border-y border-[#d0c4b2]"></div>

                <div className="absolute top-0 bottom-0 left-1/5 w-10 bg-[#ffffff] border-x border-[#d0c4b2]"></div>
                <div className="absolute top-0 bottom-0 left-1/2 w-10 bg-[#ffffff] border-x border-[#d0c4b2]"></div>
                <div className="absolute top-0 bottom-0 right-1/4 w-10 bg-[#ffffff] border-x border-[#d0c4b2]"></div>
              </div>

              {/* Park Grove representation */}
              <div className="absolute top-4 left-6 w-32 h-20 bg-[#d8ecd0] border border-[#a4c997] rounded-sm flex items-center justify-center text-[10px] font-bold text-[#3e6831]">
                City Center Park
              </div>

              {/* Cafe Marker Pin */}
              <div className="relative z-10 flex flex-col items-center animate-bounce duration-1000">
                <div className="bg-[#b82d1c] text-white text-[11px] font-bold px-2.5 py-1 rounded-sm border border-[#7a180b] shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                  <MapPin className="w-3.5 h-3.5 text-white" />
                  <span>URBAN GROVE CAFE</span>
                </div>
                <div className="w-2.5 h-2.5 bg-[#b82d1c] rotate-45 -mt-1 border-r border-b border-[#7a180b]"></div>
                <div className="w-4 h-1.5 bg-black/30 rounded-full mt-0.5"></div>
              </div>

              {/* Landmarks */}
              <div className="absolute bottom-6 right-10 bg-white/90 border border-[#bfae9b] p-2 text-[10px] text-[#4d3a2b] shadow-xs">
                <strong>Nearby Landmarks:</strong><br />
                &bull; Central Public Library (1 block north)<br />
                &bull; Downtown Cinema Center (across street)
              </div>
            </div>
          </div>

          {/* Transportation / Parking Guide */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="beveled-panel p-3 rounded-xs flex items-start gap-3">
              <Car className="w-5 h-5 text-[#8c4c1a] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#382312] m-0 mb-0.5">
                  Driving &amp; Parking
                </h4>
                <p className="text-[11px] text-[#544131] leading-relaxed m-0">
                  Metered street parking available directly along Market Street (free after 6:00 PM and all day Sunday). Covered municipal parking garage located just 50 yards west on 2nd Avenue ($1.50/hour).
                </p>
              </div>
            </div>

            <div className="beveled-panel p-3 rounded-xs flex items-start gap-3">
              <Bus className="w-5 h-5 text-[#8c4c1a] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#382312] m-0 mb-0.5">
                  Public Transit
                </h4>
                <p className="text-[11px] text-[#544131] leading-relaxed m-0">
                  Downtown Bus Lines #4, #12, and #17 stop directly in front of our building at the Market &amp; 3rd Station. The Central Light Rail Station is a short 4-minute walk to the east.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
