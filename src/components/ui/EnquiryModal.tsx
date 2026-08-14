'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, ArrowRight } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { getWhatsAppGeneralUrl } from '@/lib/whatsapp';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  productId?: string;
  productPrice?: string;
}

type FormInputs = {
  name: string;
  schoolName: string;
  phone: string;
  city: string;
  message?: string;
};

export default function EnquiryModal({ isOpen, onClose, productName, productId, productPrice }: EnquiryModalProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    let text = `Hello Play Solution! 👋\n\n`;
    if (productName) {
      text += `I am inquiring about *${productName}*`;
      if (productId) text += ` (Code/ID: ${productId})`;
      if (productPrice) text += ` - ${productPrice}`;
      text += `\n\n`;
    } else {
      text += `I would like to request a quote for school equipment.\n\n`;
    }
    text += `👤 *Name:* ${data.name}\n`;
    text += `🏫 *School/Org:* ${data.schoolName}\n`;
    text += `📞 *Phone:* ${data.phone}\n`;
    text += `📍 *City:* ${data.city}\n`;
    if (data.message) text += `💬 *Note:* ${data.message}\n`;

    const waUrl = getWhatsAppGeneralUrl(text);
    window.open(waUrl, '_blank');
    onClose();
  };

  const handleDirectWhatsApp = () => {
    let text = `Hello Play Solution! 👋\n\n`;
    if (productName) {
      text += `I am inquiring about *${productName}*`;
      if (productId) text += ` (Code/ID: ${productId})`;
      if (productPrice) text += ` - ${productPrice}`;
      text += `.\n\nPlease share price, availability, and delivery options!`;
    } else {
      text += `I would like to get a quote and catalogue for kindergarten school equipment.`;
    }
    const waUrl = getWhatsAppGeneralUrl(text);
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-secondary/40 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-3xl shadow-2xl z-[101] overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-lg text-white leading-tight">
                    {productName ? `Inquire via WhatsApp` : 'Direct WhatsApp Consultation'}
                  </h2>
                  <p className="text-xs text-emerald-100 font-medium">Instant reply from Play Solution sales team</p>
                </div>
              </div>
              <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar space-y-5">
              {/* Direct Instant WhatsApp Banner */}
              <button
                type="button"
                onClick={handleDirectWhatsApp}
                className="w-full py-3.5 px-5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-display font-extrabold text-base flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle size={22} />
                <span>Chat Directly on WhatsApp Now</span>
                <ArrowRight size={18} />
              </button>

              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-xs font-semibold uppercase">Or Share School Details</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {productName && (
                  <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 text-sm font-medium text-slate-800">
                    <span className="text-xs text-gray-500 block font-bold uppercase tracking-wider">Selected Item</span>
                    <span className="text-primary font-bold">{productName}</span> {productId && <span className="text-gray-500">({productId})</span>} {productPrice && <span className="text-emerald-600 font-extrabold ml-1">{productPrice}</span>}
                  </div>
                )}

                <div>
                  <label className="block font-body text-xs font-bold text-gray-700 mb-1">Your Name *</label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                </div>

                <div>
                  <label className="block font-body text-xs font-bold text-gray-700 mb-1">School / Organization Name *</label>
                  <input
                    {...register('schoolName', { required: 'School/Organization is required' })}
                    placeholder="e.g. Little Angels Preschool"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                  />
                  {errors.schoolName && <span className="text-red-500 text-xs mt-1">{errors.schoolName.message}</span>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-xs font-bold text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      {...register('phone', { required: 'Phone is required' })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                    />
                    {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
                  </div>
                  <div>
                    <label className="block font-body text-xs font-bold text-gray-700 mb-1">City / Location *</label>
                    <input
                      {...register('city', { required: 'City is required' })}
                      placeholder="e.g. Mumbai"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm"
                    />
                    {errors.city && <span className="text-red-500 text-xs mt-1">{errors.city.message}</span>}
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs font-bold text-gray-700 mb-1">Message (Optional)</label>
                  <textarea
                    {...register('message')}
                    rows={2}
                    placeholder="Ask about bulk prices, delivery time, or custom colors..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-display font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition-all mt-2"
                >
                  <MessageCircle size={18} />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
