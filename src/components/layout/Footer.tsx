'use client';

import Link from 'next/link';
import { MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <path d="m10 15 5-3-5-3z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-secondary text-white relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display font-black text-2xl tracking-tight text-white">
                Play<span className="text-primary">Solution</span>
              </span>
            </div>
            <p className="font-body text-gray-400 italic mb-4">
              Where Little Dreams Come to Play
            </p>
            <p className="font-body text-gray-300 text-sm mb-6 line-clamp-2">
              Premium kindergarten equipment manufacturer creating safe, durable, and fun learning environments.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/play_solutions?igsh=aHIyanNremtoN3dx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white"
                title="Follow us on Instagram"
              >
                <InstagramIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <FacebookIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 font-body text-gray-300">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-white">Product Categories</h3>
            <ul className="space-y-3 font-body text-gray-300">
              <li><Link href="/products?category=indoor" className="hover:text-primary transition-colors">Indoor Play Equipment</Link></li>
              <li><Link href="/products?category=outdoor" className="hover:text-primary transition-colors">Outdoor Play Sets</Link></li>
              <li><Link href="/products?category=classroom" className="hover:text-primary transition-colors">Classroom Furniture</Link></li>
              <li><Link href="/products?category=slides-swings" className="hover:text-primary transition-colors">Slides & Swings</Link></li>
              <li><Link href="/products?category=ball-pools" className="hover:text-primary transition-colors">Ball Pools & Sandpits</Link></li>
              <li><Link href="/products?category=toys" className="hover:text-primary transition-colors">Educational Toys</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4 font-body text-gray-300 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-primary shrink-0" size={20} />
                <span>123 Play Street, Industrial Area, Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <span>hello@playsolution.in</span>
              </li>
              <li className="flex gap-3">
                <Clock className="text-primary shrink-0" size={20} />
                <span>Mon-Sat, 9am-6pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 text-center font-body text-gray-400 text-sm">
          © {new Date().getFullYear()} Play Solution. All rights reserved.
        </div>
      </div>

      {/* WhatsApp Floating Bubble */}
      <a
        href="https://wa.me/919876543210?text=Hi%2C+I%27m+interested+in+Play+Solution+products.+Can+you+share+more+details%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform group"
        title="Chat with us"
      >
        <MessageCircle size={30} />
        <span className="absolute -top-10 right-0 bg-white text-secondary text-sm font-medium py-1 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>
    </footer>
  );
}
