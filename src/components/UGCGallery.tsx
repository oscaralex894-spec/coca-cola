import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const ugcPosts = [
  {
    id: 1,
    user: '@alex_refreshed',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&q=80&w=400',
    likes: '2.4k',
  },
  {
    id: 2,
    user: '@sarah_moments',
    image: 'https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?auto=format&fit=crop&q=80&w=400',
    likes: '1.8k',
  },
  {
    id: 3,
    user: '@coke_lover_99',
    image: 'https://images.unsplash.com/photo-1594412323004-05ad45ff32a1?auto=format&fit=crop&q=80&w=400',
    likes: '3.1k',
  },
  {
    id: 4,
    user: '@daily_happiness',
    image: 'https://images.unsplash.com/photo-1551613204-2fa9fb585528?auto=format&fit=crop&q=80&w=400',
    likes: '950',
  },
  {
    id: 5,
    user: '@refresh_world',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400',
    likes: '4.2k',
  },
];

const UGCGallery = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Real Moments. <span className="text-coke-red">Real Happiness.</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of people sharing their Coca-Cola moments. Tag us with <span className="font-bold text-black">#ShareACoke</span> to be featured.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-12 no-scrollbar snap-x">
          {ugcPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-72 h-96 relative group rounded-3xl overflow-hidden snap-center"
            >
              <img
                src={post.image}
                alt={post.user}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <Instagram size={18} />
                    <span className="font-bold text-sm">{post.user}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Heart size={16} fill="currentColor" />
                      <span className="text-xs font-bold">{post.likes}</span>
                    </div>
                    <MessageCircle size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-coke-red transition-colors">
            Follow @CocaCola
          </button>
        </div>
      </div>
    </section>
  );
};

export default UGCGallery;
