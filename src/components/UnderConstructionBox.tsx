import React, { useState } from 'react';
import { Construction, MessageSquare, AlertCircle, Trash2, CheckCircle2 } from 'lucide-react';

export const UnderConstructionBox: React.FC = () => {
  const [spamDeleted, setSpamDeleted] = useState(false);
  const [showSpamNotice, setShowSpamNotice] = useState(false);

  const handleDeleteSpam = () => {
    setSpamDeleted(true);
    setShowSpamNotice(true);
    setTimeout(() => setShowSpamNotice(false), 4000);
  };

  return (
    <div className="bg-white border border-[#cfc3b0] rounded-xs overflow-hidden shadow-xs">
      <div className="box-header-gradient px-3 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Construction className="w-3.5 h-3.5 text-[#b06a14]" />
          <h4 className="font-bold text-xs text-[#442a15] m-0 uppercase tracking-wide">
            ONLINE RESERVATIONS &amp; GUESTBOOK
          </h4>
        </div>
        <span className="text-[10px] text-[#b03010] font-bold bg-[#fff0ea] border border-[#f5b8a6] px-1 py-0.2 rounded">
          ⚠️ Under Construction
        </span>
      </div>

      <div className="p-3 space-y-3 bg-[#fdfbf7]">
        {/* Yellow Hazard Caution Bar */}
        <div 
          className="p-2 border border-[#d6a524] rounded-xs text-xs text-[#422d05] flex items-center gap-2"
          style={{
            background: 'repeating-linear-gradient(45deg, #fff2c4, #fff2c4 10px, #ffe68a 10px, #ffe68a 20px)'
          }}
        >
          <div className="bg-[#241705] text-[#ffd438] px-2 py-0.5 font-bold text-[10px] rounded-xs uppercase tracking-wider flex-shrink-0">
            Pardon Our Dust!
          </div>
          <span className="text-[11px] font-medium bg-white/70 px-1.5 py-0.5 rounded">
            Online table reservations are undergoing PHP/MySQL database upgrades. Expected launch: <strong>Late Summer 2009</strong>.
          </span>
        </div>

        {/* Note from Kevin */}
        <div className="text-[11px] text-[#4d3a2b] space-y-1">
          <p className="m-0">
            For now, please call the cafe front counter directly at <strong>(555) 234-5678</strong> to hold a table or book our back lounge for private club meetings.
          </p>
        </div>

        {/* Vintage Guestbook Section with Spam bot artifact */}
        <div className="border-t border-[#e2d5c2] pt-2">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1 text-xs font-bold text-[#442b17]">
              <MessageSquare className="w-3 h-3 text-[#945826]" />
              <span>Community Guestbook (Page 1 of 42)</span>
            </div>
            <span className="text-[10px] text-[#7a6452]">Captcha protection: OFFLINE</span>
          </div>

          <div className="space-y-1.5 text-[11px]">
            {/* Real entry 1 */}
            <div className="p-1.5 bg-[#ffffff] border border-[#d9cebe] rounded-xs">
              <div className="flex items-center justify-between text-[10px] text-[#8c5222] font-semibold">
                <span>Sarah M. from Pine Street</span>
                <span>Nov 14, 2008 4:12 PM</span>
              </div>
              <p className="m-0 text-[#3b2b1e] mt-0.5">
                "Bob, the cinnamon swirl pastries this morning were divine! Best coffee spot in the district."
              </p>
            </div>

            {/* Real entry 2 */}
            <div className="p-1.5 bg-[#ffffff] border border-[#d9cebe] rounded-xs">
              <div className="flex items-center justify-between text-[10px] text-[#8c5222] font-semibold">
                <span>Dave &amp; Jenny</span>
                <span>Dec 02, 2008 10:45 AM</span>
              </div>
              <p className="m-0 text-[#3b2b1e] mt-0.5">
                "We had our first date here 5 years ago and always celebrate our anniversary by table 2!"
              </p>
            </div>

            {/* Hilarious 2009 Spam Bot Entry that slipped past broken Captcha */}
            {!spamDeleted ? (
              <div className="p-1.5 bg-[#fff8f8] border border-[#f5b8b8] rounded-xs">
                <div className="flex items-center justify-between text-[10px] text-[#c02818] font-mono">
                  <span>rx_watches_discount99@hotmail.com</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] bg-red-100 text-red-700 px-1 rounded">SPAM DETECTED</span>
                    <span>Mar 12, 2009 03:22 AM</span>
                  </div>
                </div>
                <p className="m-0 text-[#601010] font-mono text-[10px] mt-0.5">
                  BUY CHEAP ROLEX WATCHES &amp; PHARMA PILLS NO PRESCRIPTION NEEDED CLICK HERE HTTP://WWW.CHEAP-DEALS-09.RU/PHARMA
                </p>
                <div className="flex justify-end pt-1">
                  <button
                    onClick={handleDeleteSpam}
                    className="text-[9px] text-[#a02010] hover:underline flex items-center gap-0.5 cursor-pointer bg-transparent border-none p-0 font-bold"
                  >
                    <Trash2 className="w-2.5 h-2.5" />
                    <span>[Moderator: Delete Spam Entry]</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-1.5 bg-[#eefcee] border border-[#b8e5b8] text-[10px] text-green-800 rounded-xs flex items-center justify-between">
                <span>✓ Spam comment deleted by moderator. Thank you for reporting!</span>
                <button
                  onClick={() => setSpamDeleted(false)}
                  className="text-[9px] underline text-green-900 bg-transparent border-none cursor-pointer"
                >
                  Undo
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
