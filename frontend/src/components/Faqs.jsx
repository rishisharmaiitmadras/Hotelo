import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: 'How does the AI Hotel Search work?',
    answer: 'Aapko alag-alag complex filters set karne ki zaroorat nahi hai. Bas naturally search bar me likhein jaise "Goa beach resort under ₹5,000 with pool". Hamara AI aapki intent samajhkar sabse accurate matching hotels recommend karta hai.'
  },
  {
    id: 2,
    question: 'Are there any hidden platform fees during checkout?',
    answer: 'Nahi, bilkul nahi! Jo room rate aapko hotel card par dikhega, wahi final price hoga. Checkout par koi achanak hidden tax ya platform fee add nahi hota.'
  },
  {
    id: 3,
    question: 'How do I cancel or modify my booking?',
    answer: 'Aap apne profile page me "My Bookings" section par jaakar 1-click me booking cancel ya modify kar sakte hain. Free cancellation window ke andar full refund process ho jata hai.'
  },
  {
    id: 4,
    question: 'Are hotel reviews and photos verified?',
    answer: 'Haan, sabhi hotels, high-resolution photos aur ratings hamari AI engine aur verified guest reviews dwara regular cross-check kiye jaate hain taaki aapko real expectations milein.'
  },
  {
    id: 5,
    question: 'How can I apply promo codes or discount coupons?',
    answer: 'Payment page ya checkout window par aapko "Apply Coupon" ka option milega. Wahan valid promo code (e.g. AITRAVEL20) enter karte hi discount total amount se minus ho jayega.'
  },
  {
    id: 6,
    question: 'Can I request special amenities like early check-in or late check-out?',
    answer: 'Haan, booking confirmation page par aap "Special Requests" fill kar sakte hain. Hamara system directly hotel management ko alert bhej deta hai.'
  },
  {
    id: 7,
    question: 'What payment methods are supported?',
    answer: 'Hum sabhi major payment options support karte hain: UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, aur Pay at Hotel (select properties ke liye).'
  },
  {
    id: 8,
    question: 'How does instant refund work upon cancellation?',
    answer: 'Agar aap eligible free-cancellation window me cancel karte hain, toh refund amount aapke original payment source (UPI/Bank) me 24-48 business hours me credit ho jata hai.'
  },
  {
    id: 9,
    question: 'Is my personal and payment information secure?',
    answer: 'Haan, hamara platform 256-bit SSL encryption aur PCI-DSS compliant payment gateways use karta hai, jisse aapka personal data fully encrypted aur protected rehta hai.'
  },
  {
    id: 10,
    question: 'Can I book stays for group trips or business travels?',
    answer: 'Bilkul! Search karte waqt aap multiple rooms aur guests add kar sakte hain. Business travelers GST invoice ke sath GST tax benefits bhi claim kar sakte hain.'
  },
  {
    id: 11,
    question: 'What if I face any check-in issues at the hotel?',
    answer: 'Hamari 24/7 AI Customer Support aur Live Helpdesk always active rehti hai. Koi bhi problem hone par aap instantly app se support query raise kar sakte hain.'
  },
  {
    id: 12,
    question: 'How does the AI match percentage score work?',
    answer: 'AI aapki search query ke preferences (location, budget, amenities, view) ko hotel ke attributes se compare karke ek percentage match score calculate karta hai.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Got Questions?
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
          Everything you need to know about booking stays with our AI travel assistant.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.id}
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-slate-900/90 border-blue-500/40 shadow-lg shadow-blue-950/20'
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Question Header */}
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-blue-400' : 'text-slate-500'}`} />
                  <span className="text-base font-bold text-white">
                    {item.question}
                  </span>
                </div>

                <div className={`w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-600/20 text-blue-400 border-blue-500/30' : 'text-slate-400'}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Answer Body */}
              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 ml-8">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;