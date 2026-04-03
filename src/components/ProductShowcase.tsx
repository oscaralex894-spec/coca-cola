import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Heart, Star, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Coca-Cola Classic',
    description: 'The original refreshing taste since 1886.',
    price: '$1.99',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400',
    tag: 'Iconic',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Coca-Cola Zero Sugar',
    description: 'Real Coke taste with zero sugar.',
    price: '$1.99',
    image: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&q=80&w=400',
    tag: 'Popular',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Coca-Cola Cherry',
    description: 'A sweet twist on the classic refreshment.',
    price: '$2.19',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400', // Placeholder
    tag: 'Flavor',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Coca-Cola Vanilla',
    description: 'Smooth vanilla flavor meets classic Coke.',
    price: '$2.19',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400', // Placeholder
    tag: 'Smooth',
    rating: 4.6,
  },
];

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Explore the <span className="text-coke-red">Collection</span></h2>
            <p className="text-gray-600 max-w-xl">
              From the original classic to exciting new flavors, find the perfect refreshment for your next moment.
            </p>
          </div>
          <button className="flex items-center gap-2 text-coke-red font-bold hover:gap-3 transition-all">
            View All Products <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-50 rounded-3xl p-6 transition-all hover:bg-white hover:shadow-2xl hover:shadow-black/5 border border-transparent hover:border-gray-100"
            >
              {/* Product Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                  {product.tag}
                </span>
              </div>

              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full text-gray-400 hover:text-coke-red transition-colors shadow-sm">
                <Heart size={18} />
              </button>

              {/* Image */}
              <div className="relative h-64 mb-6 overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs font-bold text-gray-700">{product.rating}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-coke-red transition-colors">{product.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between pt-4">
                  <span className="text-2xl font-bold">{product.price}</span>
                  <button className="p-3 bg-black text-white rounded-2xl hover:bg-coke-red transition-colors">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
