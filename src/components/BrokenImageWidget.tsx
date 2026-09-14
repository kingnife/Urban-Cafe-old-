import React, { useState } from 'react';
import { Tag, AlertTriangle, X, Download, FileQuestion, Printer } from 'lucide-react';

export const BrokenImageWidget: React.FC = () => {
  const [show404Modal, setShow404Modal] = useState(false);
  const [showBobsCoupon, setShowBobsCoupon] = useState(false);

  return (
    <>
      <div className="bg-white border border-[#cfc3b0] rounded-xs overflow-hidden shadow-xs">
        <div className="box-header-gradient px-3 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-[#9e3a19]" />
            <h4 className="font-bold text-xs text-[#442a15] m-0 uppercase tracking-wide">
              PRINTABLE COUPON (APRIL 2009)
            </h4>
          </div>
          <span className="text-[10px] text-[#b02e12] font-bold bg-[#ffeedd] px-1 py-0.2 rounded border border-[#e8ba99]">
            Save 50%
          </span>
        </div>

        <div className="p-3 space-y-2.5 bg-[#fefdfa]">
          <p className="text-[11px] text-[#4d3a2b] m-0">
            Print this coupon at home and present to the cashier between 7am and 10am for 50% off any specialty espresso beverage with purchase of any pastry!
          </p>

          {/* The Glorious 2009 Broken Image Box */}
          <div 
            onClick={() => setShow404Modal(true)}
            className="w-full bg-[#f8f6f0] border-2 border-dashed border-[#b8a894] p-3 rounded-xs flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#f1ebe0] transition-colors group relative"
            title="Click to view full-size coupon image"
          >
            {/* Vintage Broken Image Icon */}
            <div className="flex items-center gap-2 text-left">
              <div 
                className="w-9 h-10 bg-white border border-[#7f9db9] rounded-xs flex flex-col items-center justify-center relative shadow-xs"
                style={{ boxShadow: 'inset 0 0 2px rgba(0,0,0,0.1)' }}
              >
                {/* Red X icon mimicking early IE/Netscape broken image */}
                <div className="w-4 h-4 rounded-xs bg-[#dd3322] flex items-center justify-center text-white font-bold text-[10px] leading-none shadow-xs">
                  ✕
                </div>
                <div className="text-[8px] text-[#999] font-mono mt-0.5">.BMP</div>
              </div>

              <div className="text-[11px]">
                <div className="font-mono text-[#b02211] font-bold group-hover:underline">
                  coupon_april09_50off_PRINT_FINAL_v2.bmp
                </div>
                <div className="text-[10px] text-[#735e4d]">
                  [Image file corrupted or missing on FTP server]
                </div>
              </div>
            </div>

            <div className="text-[10px] text-[#945520] font-bold underline flex items-center gap-1 mt-1">
              <span>Click to open link / troubleshoot download</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-[#786554] pt-1">
            <span>Valid until April 30, 2009</span>
            <button
              onClick={() => setShowBobsCoupon(true)}
              className="text-[#873e13] font-bold hover:underline bg-transparent border-none p-0 cursor-pointer"
            >
              Alternative: View Text Coupon &raquo;
            </button>
          </div>
        </div>
      </div>

      {/* Simulated 2009 Apache 404 HTTP Error Modal */}
      {show404Modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/40 backdrop-blur-[0.5px]">
          <div 
            className="w-full max-w-lg bg-white border-2 border-[#555] rounded-xs shadow-2xl overflow-hidden text-xs text-black"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            {/* Classic Browser Title Bar */}
            <div className="bg-[#002f6c] text-white px-3 py-1.5 flex items-center justify-between text-xs font-sans font-bold select-none">
              <span>404 Not Found &mdash; Mozilla Firefox / Internet Explorer</span>
              <button 
                onClick={() => setShow404Modal(false)}
                className="w-4 h-4 bg-[#c82020] text-white rounded-xs flex items-center justify-center text-[10px] font-bold"
              >
                ✕
              </button>
            </div>

            {/* Apache 404 Standard Error Document Body */}
            <div className="p-6 space-y-4">
              <h1 className="text-2xl font-bold text-[#000000] border-b border-[#999] pb-2">
                Not Found
              </h1>
              
              <p className="text-sm">
                The requested URL <code className="font-mono text-xs bg-gray-100 p-0.5 border border-gray-300">/downloads/coupons/coupon_april09_50off_PRINT_FINAL_v2.bmp</code> was not found on this server.
              </p>
              
              <div className="p-3 bg-[#fff8e7] border border-[#e0c878] text-[11px] font-sans rounded-xs space-y-1">
                <div className="font-bold text-[#804000] flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Webmaster Note from Kevin (Bob's nephew):</span>
                </div>
                <p className="m-0 text-[#443322]">
                  "Sorry everyone! My USB thumb drive was accidentally washed in my jeans at the campus laundromat. I will re-scan Uncle Bob's coupon once I borrow another scanner this weekend."
                </p>
              </div>

              <p className="text-xs text-[#444]">
                Additionally, a 404 Not Found error was encountered while trying to use an ErrorDocument to handle the request.
              </p>

              <hr className="border-t border-[#888]" />

              <address className="text-[11px] italic text-[#333]">
                Apache/2.2.8 (Ubuntu) Server at www.urbangrovecafe.com Port 80
              </address>

              <div className="pt-2 flex justify-end gap-2 font-sans">
                <button
                  onClick={() => {
                    setShow404Modal(false);
                    setShowBobsCoupon(true);
                  }}
                  className="px-3 py-1 bg-[#ede6d8] border border-[#7a6850] rounded-xs font-bold text-xs hover:bg-[#ded4c0]"
                >
                  View Emergency Backup Coupon
                </button>
                <button
                  onClick={() => setShow404Modal(false)}
                  className="px-3 py-1 bg-[#3a2211] text-white rounded-xs font-bold text-xs hover:bg-[#523219]"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bob's Hand-Written Emergency Printable Coupon */}
      {showBobsCoupon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/50 backdrop-blur-[0.5px]">
          <div className="w-full max-w-md bg-[#fffef0] border-4 border-dashed border-[#8b4513] p-5 rounded-sm shadow-2xl text-[#2a1708] space-y-3 relative font-sans">
            <button 
              onClick={() => setShowBobsCoupon(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black font-bold text-sm"
            >
              ✕
            </button>

            <div className="text-center border-b-2 border-[#8b4513] pb-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#a83214]">Emergency Printable Voucher</span>
              <h3 className="text-xl font-bold m-0 text-[#3b1d07]" style={{ fontFamily: 'Georgia, serif' }}>
                URBAN GROVE CAFE
              </h3>
              <div className="text-xs font-semibold text-[#664422]">50% OFF ANY ESPRESSO DRINK</div>
            </div>

            <div className="text-xs space-y-1.5 text-[#3b2b1e]">
              <p>Present this voucher on your screen or printed on paper to Bob or Martha behind the counter:</p>
              <div className="p-2.5 bg-[#f7f3e6] border border-[#d9ccb0] font-mono text-[11px] text-center font-bold text-[#802010]">
                PROMO CODE: SCONE-SPRING-2009-OFFLINE
              </div>
              <p className="text-[11px] italic text-[#665544]">
                "Since our website image is broken, we will honor this text voucher for all friendly customers! Just mention the website glitch to Bob."
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-[#e2d5bd] text-xs">
              <button
                onClick={() => window.print()}
                className="flex items-center gap-1 text-[#8b4513] font-bold hover:underline"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print This Voucher</span>
              </button>
              <button
                onClick={() => setShowBobsCoupon(false)}
                className="btn-web2-primary text-xs py-1 px-3"
              >
                Done / Keep Browsing
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
