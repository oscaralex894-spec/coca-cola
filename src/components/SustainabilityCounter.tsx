import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Recycle, Globe, Droplets, Leaf } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const SustainabilityCounter = () => {
  const [count, setCount] = useState(124589234);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Recycled Plastic', value: '100%', icon: Recycle, color: 'text-green-600' },
    { label: 'Water Replenished', value: '1.5B Liters', icon: Droplets, color: 'text-blue-600' },
    { label: 'Carbon Reduced', value: '25%', icon: Leaf, color: 'text-emerald-600' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-coke-red rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Globe size={14} /> Our World. Our Responsibility.
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
                Building a World <br />
                <span className="text-white/70 italic">Without Waste</span>
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                  <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-2">Bottles Recycled Globally</p>
                  <p className="text-5xl md:text-6xl font-mono font-bold tracking-tighter">
                    {count.toLocaleString()}
                  </p>
                </div>
              </div>

              <button className="px-8 py-4 bg-white text-coke-red font-bold rounded-full hover:bg-gray-100 transition-colors">
                Learn About Our Goals
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-white rounded-3xl shadow-xl"
                >
                  <stat.icon className={cn("mb-4", stat.color)} size={32} />
                  <p className="text-3xl font-bold text-black mb-1">{stat.value}</p>
                  <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
              <div className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl flex flex-col justify-center items-center text-center">
                <p className="text-sm font-bold uppercase tracking-widest mb-2">Join the Movement</p>
                <p className="text-xs text-white/60">Scan your bottle to track your personal impact.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityCounter;
