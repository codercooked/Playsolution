'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Target, Eye, ShieldCheck } from 'lucide-react';
import WaveDivider from '@/components/ui/WaveDivider';

export default function AboutContent() {
  const teamMembers = [
    { name: 'Rajesh Sharma', role: 'Founder & CEO', color: 'FF6B35', initials: 'RS' },
    { name: 'Priya Patel', role: 'Head of Design', color: 'FFD166', initials: 'PP' },
    { name: 'Amit Kumar', role: 'Operations Director', color: '4ECDC4', initials: 'AK' },
    { name: 'Sneha Reddy', role: 'Sales Manager', color: '7B68EE', initials: 'SR' },
  ];

  const certifications = [
    'ISI Certified', 'CE Mark', 'BIS Standard', 'ISO 9001:2015'
  ];

  const clientLogos = [
    'Delhi Public School', 'Ryan International', 'Kidzee', 'EuroKids',
    'Podar International', 'Vibgyor High', 'Orchids International', 'Kangaroo Kids'
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Section 1 — Hero */}
      <section className="relative pt-32 pb-24 bg-primary overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                  <pattern id="wavy" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                      <path d="M0 60 C 30 10, 90 110, 120 60" fill="none" stroke="white" strokeWidth="2" />
                  </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#wavy)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h1 className="font-display font-black text-white text-4xl md:text-5xl mb-6 leading-tight">
              We&apos;ve Been Building Play Spaces Since 2009
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Making every school a place where children love to learn and play
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full translate-y-[1px]">
          <WaveDivider color="#FAFAFA" />
        </div>
      </section>

      {/* Section 2 — Our Story */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50, rotate: 0 }}
              whileInView={{ opacity: 1, x: 0, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src="https://placehold.co/600x400/FF6B35/white?text=Our+Story" 
                alt="Our Story" 
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                Our Story
              </motion.div>
              <motion.h2 variants={fadeInUp} className="font-display font-bold text-2xl md:text-3xl text-secondary mb-6 leading-snug">
                From a Small Workshop to India&apos;s Trusted Play Equipment Brand
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-4 text-gray-600">
                <p>
                  Founded in 2009 in Mumbai by educators who saw the need for quality play equipment, Play Solution started with a simple belief: play is essential for a child&apos;s development.
                </p>
                <p>
                  We started with a small workshop making custom slides and swings for local schools. Our commitment to safety and vibrant designs quickly caught the attention of more educational institutions.
                </p>
                <p>
                  Today, we proudly serve over 200 schools across India with a complete range of kindergarten equipment, from indoor learning toys to massive outdoor multi-play stations.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 — Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Mission Card */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-primary">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl text-secondary mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To make every Indian school a safe, inspiring, and joyful space for children by providing world-class play equipment at accessible prices.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-accent">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display font-bold text-2xl text-secondary mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become India&apos;s most loved and trusted brand in kindergarten infrastructure, touching the lives of 1 million children by 2030.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 — Team */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-secondary">Meet Our Team</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image 
                  src={`https://placehold.co/200x200/${member.color}/white?text=${member.initials}`}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
                />
                <h3 className="font-display font-bold text-xl text-secondary mb-1">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Certifications */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-secondary">Our Certifications</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow p-6 text-center border-b-4 border-primary"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
                <p className="font-semibold text-secondary">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Client Logos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-secondary mb-4">Trusted by Leading Schools</h2>
            <p className="text-gray-500">Over 200+ institutions across India trust Play Solution</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
            {clientLogos.map((logo, index) => (
              <motion.div 
                key={index}
                className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-20 hover:bg-gray-200 transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <span className="text-gray-400 text-sm font-medium text-center leading-tight">
                  {logo}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
