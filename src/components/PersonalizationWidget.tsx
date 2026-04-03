import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, Check } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const PersonalizationWidget = () => {
  const [name, setName] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    setIsSearching(true);
    // Simulate search
    setTimeout(() => {
      setIsSearching(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Share a Coke with <span className="text-coke-red">Someone Special</span>
              </h2>
              <p className="text-gray-600 text-lg">
                The iconic campaign is back. Find your name or create a custom bottle for a friend.
              </p>
            </div>

            <form onSubmit={handleSearch} className="relative max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter a name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-6 py-5 bg-white border-2 border-gray-200 rounded-2xl focus:border-coke-red focus:outline-none transition-all text-lg font-medium pr-16"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-2 top-2 bottom-2 px-4 bg-coke-red text-white rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50"
                >
                  {isSearching ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Sparkles size={24} />
                    </motion.div>
                  ) : (
                    <Search size={24} />
                  )}
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-500 flex items-center gap-2">
                <Sparkles size={14} className="text-coke-red" />
                Over 1,000 names available in stock
              </p>
            </form>

            <div className="flex flex-wrap gap-4">
              {['Sarah', 'Michael', 'Emma', 'David'].map((n) => (
                <button
                  key={n}
                  onClick={() => setName(n)}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium hover:border-coke-red hover:text-coke-red transition-all"
                >
                  {n}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual Preview */}
          <div className="relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              {/* Bottle Visualization */}
              <div className="relative w-64 md:w-80 h-[500px] md:h-[600px]">
                <img
                  src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800"
                  alt="Coke Bottle"
                  className="w-full h-full object-contain drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                />

                {/* Dynamic Name Overlay */}
                <AnimatePresence mode="wait">
                  {name && (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-[45%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none"
                    >
                      <span className="text-white font-serif italic text-2xl md:text-3xl drop-shadow-lg tracking-wide opacity-90">
                        {name}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Check size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Status</p>
                  <p className="text-sm font-bold">In Stock</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Background Decorative Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-coke-red/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizationWidget;
