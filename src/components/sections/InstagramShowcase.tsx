'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Heart, MessageCircle, ExternalLink, X, Film, Image as ImageIcon, Sparkles, Volume2, VolumeX } from 'lucide-react';

const InstagramIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

interface InstagramPost {
  id: string;
  type: 'video' | 'image';
  title: string;
  thumbnail: string;
  videoUrl?: string;
  likes: string;
  comments: string;
  caption: string;
  schoolTag: string;
  date: string;
  url: string;
}

const instaPosts: InstagramPost[] = [
  {
    id: 'insta-1',
    type: 'video',
    title: 'Outdoor Multi-Play Station Installation at Sunshine Preschool',
    thumbnail: 'https://placehold.co/600x800/FF6B35/white?text=Reel:+Outdoor+Play+Set',
    videoUrl: '/videos/hero_showcase.mp4',
    likes: '1,420',
    comments: '84',
    caption: 'Creating magical playtime moments for little learners! Installed our custom Multi-Play Station at Sunshine Preschool Pune 🌈✨ #PlaySolution #KindergartenPlayground #SchoolEquipment',
    schoolTag: 'Sunshine Preschool, Pune',
    date: '2 DAYS AGO',
    url: 'https://www.instagram.com/play_solutions?igsh=aHIyanNremtoN3dx',
  },
  {
    id: 'insta-2',
    type: 'image',
    title: 'Colorful Indoor Soft Play Station & Ball Pool Setup',
    thumbnail: 'https://placehold.co/600x800/4ECDC4/white?text=Photo:+Soft+Play+Zone',
    likes: '980',
    comments: '42',
    caption: 'Transforming indoor spaces into vibrant sensory play zones for toddlers! Non-toxic, soft foam climbing blocks & ball pools. 🎈',
    schoolTag: 'Little Stars Academy, Hyderabad',
    date: '4 DAYS AGO',
    url: 'https://www.instagram.com/play_solutions?igsh=aHIyanNremtoN3dx',
  },
  {
    id: 'insta-3',
    type: 'video',
    title: 'Spiral Slide & Toddler Swings Setup Walkthrough',
    thumbnail: 'https://placehold.co/600x800/FF6B9D/white?text=Reel:+Spiral+Slide+Tour',
    videoUrl: '/videos/playground_reel1.mp4',
    likes: '2,150',
    comments: '116',
    caption: 'Watch the kids react to their brand new spiral slide & heavy-duty swing set! Tested for 100% child safety & extreme durability. 🎠',
    schoolTag: 'Rainbow Kids, Mumbai',
    date: '1 WEEK AGO',
    url: 'https://www.instagram.com/play_solutions?igsh=aHIyanNremtoN3dx',
  },
  {
    id: 'insta-4',
    type: 'image',
    title: 'Ergonomic Kindergarten Classroom Furniture Setup',
    thumbnail: 'https://placehold.co/600x800/7B68EE/white?text=Photo:+Classroom+Setup',
    likes: '840',
    comments: '31',
    caption: 'Bright colors elevate classroom learning! Check out our heavy-duty rounded tables & storage units installed at Tiny Tots International.',
    schoolTag: 'Tiny Tots, Bangalore',
    date: '1 WEEK AGO',
    url: 'https://www.instagram.com/play_solutions?igsh=aHIyanNremtoN3dx',
  },
  {
    id: 'insta-5',
    type: 'video',
    title: 'Manufacturing & Safety Testing in Our Workshop',
    thumbnail: 'https://placehold.co/600x800/45B7D1/white?text=Reel:+Safety+Testing',
    videoUrl: '/videos/playground_reel2.mp4',
    likes: '3,100',
    comments: '190',
    caption: 'Behind the scenes: Every piece of Play Solution equipment undergoes rigorous load testing and smooth-edge inspection before dispatch. 🛡️',
    schoolTag: 'Play Solution Factory, Mumbai',
    date: '2 WEEKS AGO',
    url: 'https://www.instagram.com/play_solutions?igsh=aHIyanNremtoN3dx',
  },
  {
    id: 'insta-6',
    type: 'image',
    title: 'Custom Outdoor See-Saw & Spring Riders Assembly',
    thumbnail: 'https://placehold.co/600x800/96CEB4/white?text=Photo:+Spring+Riders',
    likes: '1,290',
    comments: '58',
    caption: 'Weather-proof UV resistant spring riders ready to withstand years of active outdoor play in sunny climates! ☀️',
    schoolTag: 'Happy Hearts, Chennai',
    date: '3 WEEKS AGO',
    url: 'https://www.instagram.com/play_solutions?igsh=aHIyanNremtoN3dx',
  },
];

export default function InstagramShowcase() {
  const [filter, setFilter] = useState<'all' | 'video' | 'image'>('all');
  const [activeModalPost, setActiveModalPost] = useState<InstagramPost | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  const filteredPosts = filter === 'all' 
    ? instaPosts 
    : instaPosts.filter(post => post.type === filter);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-[#1A1A2E] to-slate-950 text-white relative overflow-hidden">
      {/* Liquid Glass Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-pink-500/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-orange-500/15 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-pink-400 text-sm font-extrabold mb-4 shadow-lg"
          >
            <InstagramIcon size={18} className="text-pink-500" />
            <span>@play_solutions on Instagram</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4 tracking-tight"
          >
            Watch Instagram Reels & Videos Live 🎥
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg"
          >
            Stream real video clips & photos of our playground installations directly on the website from our official Instagram feed.
          </motion.p>
        </div>

        {/* Filter Pills & Follow CTA */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-10 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-sm font-extrabold transition-all flex items-center gap-2 ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Sparkles size={16} /> All Posts
            </button>
            <button
              onClick={() => setFilter('video')}
              className={`px-5 py-2 rounded-full text-sm font-extrabold transition-all flex items-center gap-2 ${
                filter === 'video'
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Film size={16} /> Instagram Reels
            </button>
            <button
              onClick={() => setFilter('image')}
              className={`px-5 py-2 rounded-full text-sm font-extrabold transition-all flex items-center gap-2 ${
                filter === 'image'
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <ImageIcon size={16} /> Photos
            </button>
          </div>

          <a
            href="https://www.instagram.com/play_solutions?igsh=aHIyanNremtoN3dx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 hover:opacity-95 text-white font-extrabold shadow-lg shadow-pink-500/25 hover:scale-105 active:scale-95 transition-all text-sm"
          >
            <InstagramIcon size={18} />
            <span>Follow @play_solutions</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl cursor-pointer"
              onClick={() => setActiveModalPost(post)}
            >
              {/* Media Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-950">
                {post.type === 'video' && post.videoUrl ? (
                  <video
                    src={post.videoUrl}
                    poster={post.thumbnail}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}

                {/* Glass Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Badge top right */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-xs font-bold text-white shadow-md">
                    {post.type === 'video' ? <Film size={14} className="text-pink-400" /> : <ImageIcon size={14} className="text-amber-400" />}
                    {post.type === 'video' ? 'Reel' : 'Photo'}
                  </span>
                </div>

                {/* Play Button Overlay for Videos */}
                {post.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-orange-500 group-hover:to-pink-500 transition-all duration-300">
                      <Play size={28} className="fill-white ml-1" />
                    </div>
                  </div>
                )}

                {/* School Tag Location */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/30 shadow-sm">
                    📍 {post.schoolTag}
                  </span>
                </div>

                {/* Post Footer Info */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10">
                  <h3 className="font-display font-bold text-lg text-white mb-2 line-clamp-2 leading-snug group-hover:text-pink-300 transition-colors">
                    {post.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-gray-300 pt-2 border-t border-white/15">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 font-bold text-white">
                        <Heart size={14} className="text-pink-500 fill-pink-500" /> {post.likes}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-gray-300">
                        <MessageCircle size={14} /> {post.comments}
                      </span>
                    </div>
                    <span className="text-pink-400 font-extrabold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Play Video <ExternalLink size={12} />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video & Photo Fullscreen Glass Modal */}
      <AnimatePresence>
        {activeModalPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalPost(null)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-xl"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-slate-900/95 border border-white/20 rounded-3xl overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-2"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalPost(null)}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-950/70 border border-white/20 text-white flex items-center justify-center hover:bg-pink-600 transition-colors shadow-lg"
              >
                <X size={20} />
              </button>

              {/* Media Section */}
              <div className="relative aspect-[4/5] bg-black flex items-center justify-center">
                {activeModalPost.type === 'video' && activeModalPost.videoUrl ? (
                  <div className="relative w-full h-full">
                    <video
                      src={activeModalPost.videoUrl}
                      controls
                      autoPlay
                      loop
                      muted={isMuted}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="absolute top-4 left-4 p-2.5 rounded-full bg-slate-950/70 border border-white/20 text-white hover:bg-pink-500 transition-colors shadow-md z-20"
                    >
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                  </div>
                ) : (
                  <Image
                    src={activeModalPost.thumbnail}
                    alt={activeModalPost.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* Caption & Insta Details Section */}
              <div className="p-6 md:p-8 flex flex-col justify-between bg-slate-900 text-white">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-pink-500 p-0.5">
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                          <InstagramIcon size={18} className="text-pink-400" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-display font-extrabold text-white text-base">play_solutions</h4>
                        <p className="text-xs text-pink-400 font-semibold">{activeModalPost.schoolTag}</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display font-black text-xl text-white mb-3">
                    {activeModalPost.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium">
                    {activeModalPost.caption}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span>{activeModalPost.date}</span>
                    <div className="flex items-center gap-4 text-white font-bold">
                      <span>❤️ {activeModalPost.likes} likes</span>
                      <span>💬 {activeModalPost.comments} comments</span>
                    </div>
                  </div>

                  <a
                    href={activeModalPost.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 text-white font-extrabold text-center flex items-center justify-center gap-2 hover:opacity-95 transition-opacity shadow-lg shadow-pink-500/30 text-sm"
                  >
                    <InstagramIcon size={18} />
                    <span>Watch Reel on Instagram</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
