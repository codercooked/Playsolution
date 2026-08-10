'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

type FormInputs = {
  name: string;
  schoolName: string;
  phone: string;
  email?: string;
  city: string;
  message?: string;
};

export default function EnquiryModal({ isOpen, onClose, productName }: EnquiryModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // In a real application, submit this to your API route
    console.log(data);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      reset();
      onClose();
    }, 3000);
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
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-2xl shadow-2xl z-[101] overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="font-display font-bold text-xl text-secondary">
                {productName ? `Enquire About ${productName}` : 'Send an Enquiry'}
              </h2>
              <button onClick={onClose} className="text-gray-400 hover:text-primary transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center space-y-4"
                >
                  <CheckCircle className="text-green-500 w-16 h-16" />
                  <h3 className="font-display font-bold text-2xl text-secondary">Thank You!</h3>
                  <p className="font-body text-gray-600">Our team will contact you within 24 hours!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block font-body text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body text-secondary"
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                  </div>

                  <div>
                    <label className="block font-body text-sm font-medium text-gray-700 mb-1">School/Organization Name *</label>
                    <input
                      {...register('schoolName', { required: 'School/Organization is required' })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body text-secondary"
                    />
                    {errors.schoolName && <span className="text-red-500 text-xs mt-1">{errors.schoolName.message}</span>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-sm font-medium text-gray-700 mb-1">Phone *</label>
                      <input
                        type="tel"
                        {...register('phone', { required: 'Phone is required' })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body text-secondary"
                      />
                      {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-gray-700 mb-1">City *</label>
                      <input
                        {...register('city', { required: 'City is required' })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body text-secondary"
                      />
                      {errors.city && <span className="text-red-500 text-xs mt-1">{errors.city.message}</span>}
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body text-secondary"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                    <textarea
                      {...register('message')}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body text-secondary resize-none"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full mt-6">
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
