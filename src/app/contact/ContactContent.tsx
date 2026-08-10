'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, MapPin, Phone, Mail, MessageCircle, Clock, ChevronDown } from 'lucide-react';

type FormData = {
  fullName: string;
  organization: string;
  phone: string;
  email: string;
  city: string;
  interest: string;
  message: string;
};

export default function ContactContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsSubmitted(true);
  };

  const faqs = [
    {
      q: 'What is the minimum order quantity?',
      a: 'There is no minimum order quantity. Whether you need a single slide or a complete playground setup, we\'re happy to help. We offer competitive pricing for bulk orders.'
    },
    {
      q: 'Do you offer installation services?',
      a: 'Yes! We provide professional installation services across all major Indian cities. Our trained team ensures safe and proper setup of all equipment.'
    },
    {
      q: 'What materials do you use?',
      a: 'We use high-quality, non-toxic materials including FRP (Fiberglass Reinforced Plastic), HDPE, powder-coated steel, and child-safe plastics. All materials meet international safety standards.'
    },
    {
      q: 'Do you provide warranty?',
      a: 'Yes, all our products come with a minimum 1-year warranty against manufacturing defects. Many of our products offer extended warranties of up to 3 years.'
    },
    {
      q: 'Can I visit your showroom?',
      a: 'Absolutely! Our showroom in Mumbai is open Monday to Saturday, 9 AM to 6 PM. We recommend calling ahead to schedule a visit so we can give you a personalized tour.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-display font-black text-4xl md:text-5xl text-secondary mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            Have questions about our products? Need a custom quote? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24">
          
          {/* Left column — Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {isSubmitted ? (
              <motion.div 
                className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
                <h3 className="font-display font-bold text-2xl text-secondary mb-2">Thank you!</h3>
                <p className="text-gray-600">Our team will contact you within 24 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-primary font-medium hover:underline"
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name*</label>
                    <input 
                      {...register("fullName", { required: "Full name is required" })} 
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">School/Organization*</label>
                    <input 
                      {...register("organization", { required: "Organization is required" })} 
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Delhi Public School"
                    />
                    {errors.organization && <p className="text-red-500 text-sm mt-1">{errors.organization.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone*</label>
                    <input 
                      type="tel"
                      {...register("phone", { required: "Phone number is required" })} 
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                    <input 
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                      })} 
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City*</label>
                    <input 
                      {...register("city", { required: "City is required" })} 
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Mumbai"
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Interest</label>
                    <select 
                      {...register("interest")}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-white"
                    >
                      <option value="">Select a category</option>
                      <option value="indoor">Indoor Play Equipment</option>
                      <option value="outdoor">Outdoor Play Sets</option>
                      <option value="furniture">Classroom Furniture</option>
                      <option value="slides">Slides & Swings</option>
                      <option value="ball-pools">Ball Pools & Sandpits</option>
                      <option value="educational">Educational Toys</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    {...register("message")}
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Right column — Contact Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8 h-fit">
            <div className="rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 h-48 flex items-center justify-center mb-8 border border-gray-100">
              <div className="text-center text-gray-500">
                <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <span className="font-medium">Map Coming Soon</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">Our Office</h4>
                  <p className="text-gray-600">123 Play Street, Industrial Area, Mumbai, Maharashtra 400001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">Phone</h4>
                  <a href="tel:+919876543210" className="text-gray-600 hover:text-primary transition-colors">+91 98765 43210</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">Email</h4>
                  <a href="mailto:hello@playsolution.in" className="text-gray-600 hover:text-primary transition-colors">hello@playsolution.in</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">WhatsApp</h4>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-medium rounded-lg transition-colors mt-1">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">Working Hours</h4>
                  <p className="text-gray-600">Mon — Sat, 9:00 AM — 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl text-secondary">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className="font-semibold text-secondary pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-5 pt-0 text-gray-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
