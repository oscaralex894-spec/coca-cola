import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const links = {
    Products: ['Coca-Cola Classic', 'Zero Sugar', 'Flavors', 'Limited Editions'],
    Company: ['About Us', 'Sustainability', 'Careers', 'Investors'],
    Support: ['Contact Us', 'FAQs', 'Store Locator', 'Order Tracking'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'Accessibility'],
  };

  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-16 border-b border-white/10">
          <div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Stay Refreshed.</h2>
            <p className="text-white/60 text-lg mb-8 max-w-md">
              Subscribe to get first access to limited edition drops, exclusive events, and personalized offers.
            </p>
            <form className="flex gap-4 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:border-coke-red focus:outline-none transition-all"
              />
              <button className="px-8 py-4 bg-coke-red text-white font-bold rounded-2xl hover:bg-red-700 transition-colors">
                Join
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/40">{title}</h3>
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                        {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <span className="text-3xl font-bold tracking-tighter text-coke-red">Coca-Cola</span>
            <p className="text-white/40 text-xs">
              © 2026 The Coca-Cola Company. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-coke-red transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-coke-red transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-coke-red transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-coke-red transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
