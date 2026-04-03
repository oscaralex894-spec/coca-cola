import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Search, Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#' },
    { name: 'Personalize', href: '#' },
    { name: 'Experiences', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Rewards', href: '#' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            <span className={cn(
              "text-3xl font-bold tracking-tighter transition-colors duration-300",
              isScrolled ? "text-coke-red" : "text-white"
            )}>
              Coca-Cola
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors duration-200 hover:text-coke-red',
                isScrolled ? 'text-gray-800' : 'text-white'
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-5">
          <button className={cn(
            "p-2 rounded-full transition-colors",
            isScrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
          )}>
            <Search size={20} />
          </button>
          <button className={cn(
            "p-2 rounded-full transition-colors",
            isScrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
          )}>
            <User size={20} />
          </button>
          <button className={cn(
            "p-2 rounded-full relative transition-colors",
            isScrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
          )}>
            <ShoppingCart size={20} />
            <span className="absolute top-0 right-0 bg-coke-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              0
            </span>
          </button>
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} className={isScrolled ? "text-gray-800" : "text-white"} /> : <Menu size={24} className={isScrolled ? "text-gray-800" : "text-white"} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white absolute top-full left-0 right-0 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-800 hover:text-coke-red"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
