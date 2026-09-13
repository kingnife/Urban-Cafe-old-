import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/cafeData';
import { Coffee, Croissant, Utensils, PartyPopper, CheckCircle, Send, Check } from 'lucide-react';

export const ServicesView: React.FC = () => {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: 'Office Coffee Box & Pastries',
    eventDate: '',
    headcount: '15-25 people',
    notes: ''
  });

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

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inquiryForm.name && inquiryForm.email) {
      setInquirySubmitted(true);
    }
  };

  return (
    <div className="space-y-6">
      {/* Services Overview */}
      <section className="bg-white border border-[#cfc3b0] p-4 sm:p-5 rounded-xs shadow-xs">
        <div className="border-b border-[#dfd5c7] pb-3 mb-4">
          <span className="text-[11px] font-bold text-[#8c4c1a] uppercase tracking-wider block">
            Craftsmanship &amp; Catering
          </span>
          <h2 
            className="text-2xl font-bold text-[#3d2412] m-0"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            OUR SERVICES &amp; SPECIALTIES
          </h2>
        </div>

        <p className="text-xs sm:text-[13px] text-[#4d3a2b] leading-relaxed mb-4">
          Whether you are stopping by for a quiet morning espresso before your commute, picking up freshly boxed pastries for your team, or hosting a private milestone celebration, Urban Grove Cafe provides personalized neighborhood service.
        </p>

        {/* 4 Core Services in Detailed Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES_LIST.map((service) => (
            <div 
              key={service.id}
              className="beveled-panel p-4 rounded-xs border border-[#cfc3b0] flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3 border-b border-[#e5dcce] pb-2">
                  <div 
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(to bottom, #ffffff 0%, #ede6db 50%, #dfd4c3 51%, #eae2d4 100%)',
                      border: '1px solid #baa894',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                    }}
                  >
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#3b2311] m-0">
                      {service.title}
                    </h3>
                    <p className="text-[11px] text-[#7a6452] m-0">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#523e2e] leading-relaxed m-0">
                  {service.fullDesc}
                </p>

                {service.bullets && (
                  <ul className="list-disc pl-4 text-xs text-[#574435] space-y-1 pt-1 m-0">
                    {service.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATERING & EVENT INQUIRY SECTION */}
      <section className="bg-white border border-[#cfc3b0] rounded-xs overflow-hidden shadow-xs">
        <div className="box-header-gradient px-4 py-2.5 flex items-center justify-between">
          <h3 className="font-bold text-xs sm:text-sm text-[#442a15] m-0 uppercase tracking-wide">
            CATERING &amp; PRIVATE EVENT RESERVATION INQUIRY
          </h3>
          <span className="text-[11px] text-[#6d5744]">Quick 24-Hour Confirmation</span>
        </div>

        <div className="p-4 sm:p-5">
          {inquirySubmitted ? (
            <div className="p-4 bg-[#f2f8ed] border border-[#a4c995] rounded-xs text-center space-y-2">
              <CheckCircle className="w-8 h-8 text-[#417d2a] mx-auto" />
              <h4 className="text-sm font-bold text-[#2a5619] m-0">
                Thank You for Your Catering Request!
              </h4>
              <p className="text-xs text-[#3b6329] max-w-md mx-auto m-0">
                We have received your event inquiry for <strong>{inquiryForm.serviceType}</strong>. Our catering coordinator, Martha Johnson, will review your details and phone or email you within 24 hours to confirm menu choices.
              </p>
              <button
                onClick={() => setInquirySubmitted(false)}
                className="btn-web2-secondary text-xs mt-2"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3d2715] mb-1">
                    Your Name: <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                    placeholder="e.g. Johnathan Smith"
                    className="w-full text-xs px-2.5 py-1.5 rounded border border-[#baa995] bg-white shadow-inner focus:outline-none focus:border-[#7a4820]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3d2715] mb-1">
                    Company / Organization (Optional):
                  </label>
                  <input
                    type="text"
                    value={inquiryForm.company}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, company: e.target.value })}
                    placeholder="e.g. Downtown Legal Partners"
                    className="w-full text-xs px-2.5 py-1.5 rounded border border-[#baa995] bg-white shadow-inner focus:outline-none focus:border-[#7a4820]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3d2715] mb-1">
                    Email Address: <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={inquiryForm.email}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full text-xs px-2.5 py-1.5 rounded border border-[#baa995] bg-white shadow-inner focus:outline-none focus:border-[#7a4820]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3d2715] mb-1">
                    Telephone Number:
                  </label>
                  <input
                    type="tel"
                    value={inquiryForm.phone}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                    placeholder="(555) 000-0000"
                    className="w-full text-xs px-2.5 py-1.5 rounded border border-[#baa995] bg-white shadow-inner focus:outline-none focus:border-[#7a4820]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3d2715] mb-1">
                    Service / Package Type:
                  </label>
                  <select
                    value={inquiryForm.serviceType}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, serviceType: e.target.value })}
                    className="w-full text-xs px-2.5 py-1.5 rounded border border-[#baa995] bg-white shadow-inner focus:outline-none focus:border-[#7a4820]"
                  >
                    <option value="Office Coffee Box & Pastries">Office Coffee Box &amp; Fresh Pastries</option>
                    <option value="Luncheon Sandwich Platters & Soup">Luncheon Sandwich Platters &amp; Soup</option>
                    <option value="Private Evening Cafe Rental">Private Evening Cafe Rental (After 6:30 PM)</option>
                    <option value="Custom Event Catering Package">Custom Event Catering Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3d2715] mb-1">
                    Estimated Headcount:
                  </label>
                  <select
                    value={inquiryForm.headcount}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, headcount: e.target.value })}
                    className="w-full text-xs px-2.5 py-1.5 rounded border border-[#baa995] bg-white shadow-inner focus:outline-none focus:border-[#7a4820]"
                  >
                    <option value="10-15 people">10–15 guests</option>
                    <option value="15-25 people">15–25 guests</option>
                    <option value="25-50 people">25–50 guests</option>
                    <option value="50+ people">50+ guests (requires phone review)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3d2715] mb-1">
                  Additional Details, Dietary Needs or Date/Time Preferences:
                </label>
                <textarea
                  rows={3}
                  value={inquiryForm.notes}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, notes: e.target.value })}
                  placeholder="Please specify desired delivery date, time, and any vegetarian/gluten-free requirements..."
                  className="w-full text-xs p-2.5 rounded border border-[#baa995] bg-white shadow-inner focus:outline-none focus:border-[#7a4820]"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="btn-web2-primary"
                >
                  <Send className="w-3.5 h-3.5 mr-1.5" />
                  Submit Catering Inquiry
                </button>
                <span className="text-[11px] text-[#786350] italic">
                  Or call our catering desk directly at (555) 234-5678 ext. 2
                </span>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
