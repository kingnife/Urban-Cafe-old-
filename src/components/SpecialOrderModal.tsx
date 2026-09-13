import React, { useState } from 'react';
import { TODAY_SPECIAL } from '../data/cafeData';
import { Tag, X, CheckCircle, Clock, Coffee, PhoneCall } from 'lucide-react';

interface SpecialOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpecialOrderModal: React.FC<SpecialOrderModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupTime: 'In 15 minutes',
    quantity: '1',
    customNotes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
      onClick={handleResetAndClose}
    >
      <div 
        className="bg-white border-4 border-[#573a24] rounded-sm max-w-lg w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 10px 40px rgba(0,0,0,0.85)'
        }}
      >
        {/* 2009 Glossy Title Bar */}
        <div className="box-header-dark px-3.5 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-[#ffd8b3]" />
            <span className="font-bold text-xs sm:text-sm text-white uppercase tracking-wide">
              Today's Chef Special &bull; Inquire / Pre-Order
            </span>
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-white hover:text-red-300 p-0.5 bg-transparent border-none cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          {submitted ? (
            <div className="p-4 bg-[#f2f8ed] border border-[#a4c995] rounded-xs text-center space-y-2.5">
              <CheckCircle className="w-10 h-10 text-[#417d2a] mx-auto" />
              <h4 className="text-base font-bold text-[#2a5619] m-0">
                Special Order Request Logged!
              </h4>
              <p className="text-xs text-[#3b6329] leading-relaxed max-w-md mx-auto m-0">
                Thank you, <strong>{formData.name}</strong>! Your order request for <strong>{formData.quantity}x {TODAY_SPECIAL.name}</strong> ({TODAY_SPECIAL.price}) for pickup {formData.pickupTime} has been transmitted to our kitchen barista line.
              </p>
              <div className="beveled-panel p-2.5 text-[11px] text-[#554030] max-w-xs mx-auto text-left space-y-1">
                <div><strong>Order Reference:</strong> #UG-{Math.floor(1000 + Math.random() * 9000)}</div>
                <div><strong>Pickup Location:</strong> 125 Market St Counter</div>
                <div><strong>Payment:</strong> Cash or Card upon arrival</div>
              </div>
              <button
                onClick={handleResetAndClose}
                className="btn-web2-primary text-xs mt-2"
              >
                Close &amp; Return to Cafe
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Special Summary Card */}
              <div className="beveled-panel p-3 rounded-xs flex gap-3 items-center border border-[#d5cbbe]">
                <img
                  src={TODAY_SPECIAL.imageUrl}
                  alt={TODAY_SPECIAL.name}
                  className="w-16 h-16 object-cover rounded-xs border border-[#96826e] flex-shrink-0"
                />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-[#962817] bg-[#feece9] border border-[#e5a297] px-1.5 py-0.2 rounded-xs">
                    {TODAY_SPECIAL.price} &bull; Save $1.75 Today
                  </span>
                  <h4 className="text-xs font-bold text-[#3d2412] m-0">
                    {TODAY_SPECIAL.name}
                  </h4>
                  <p className="text-[11px] text-[#594738] leading-tight m-0 line-clamp-2">
                    {TODAY_SPECIAL.description}
                  </p>
                </div>
              </div>

              {/* Order Form */}
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#3d2715] mb-1">
                      Your Name: <span className="text-red-700">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Michael Ross"
                      className="w-full text-xs px-2.5 py-1.5 rounded border border-[#baa995] bg-white shadow-inner focus:outline-none focus:border-[#7a4820]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#3d2715] mb-1">
                      Phone Number: <span className="text-red-700">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                      className="w-full text-xs px-2.5 py-1.5 rounded border border-[#baa995] bg-white shadow-inner focus:outline-none focus:border-[#7a4820]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#3d2715] mb-1">
                      Estimated Pickup Time:
                    </label>
                    <select
                      value={formData.pickupTime}
                      onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                      className="w-full text-xs px-2.5 py-1.5 rounded border border-[#baa995] bg-white shadow-inner focus:outline-none focus:border-[#7a4820]"
                    >
                      <option value="In 10-15 minutes">In 10–15 minutes</option>
                      <option value="In 30 minutes">In 30 minutes</option>
                      <option value="In 1 hour">In 1 hour</option>
                      <option value="Later this afternoon">Later this afternoon</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-[#3d2715] mb-1">
                      Quantity:
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full text-xs px-2.5 py-1.5 rounded border border-[#baa995] bg-white shadow-inner focus:outline-none focus:border-[#7a4820]"
                    >
                      <option value="1">1 Combo Set ($5.75)</option>
                      <option value="2">2 Combo Sets ($11.50)</option>
                      <option value="3">3 Combo Sets ($17.25)</option>
                      <option value="4+">4+ (Will confirm by phone)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#3d2715] mb-1">
                    Special Preparation / Dietary Notes (Optional):
                  </label>
                  <input
                    type="text"
                    value={formData.customNotes}
                    onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                    placeholder="e.g. Decaf espresso, extra hot, soy milk, no pecans..."
                    className="w-full text-xs px-2.5 py-1.5 rounded border border-[#baa995] bg-white shadow-inner focus:outline-none focus:border-[#7a4820]"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="submit"
                      className="btn-web2-red text-xs"
                    >
                      Submit Pre-Order Request
                    </button>
                    <button
                      type="button"
                      onClick={handleResetAndClose}
                      className="btn-web2-secondary text-xs"
                    >
                      Cancel
                    </button>
                  </div>

                  <span className="text-[11px] text-[#705c4b] italic flex items-center gap-1">
                    <PhoneCall className="w-3 h-3 text-[#96471e]" />
                    <span>Or call (555) 234-5678</span>
                  </span>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
