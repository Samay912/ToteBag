import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Product } from '../types';

const ProductShowcase: React.FC = () => {
  const products: Product[] = [
    {
      id: '1',
      name: 'Classic Canvas Tote',
      price: 49,
      image: 'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Timeless design meets everyday functionality',
      features: ['100% Organic Cotton', 'Reinforced Handles', 'Machine Washable']
    },
    {
      id: '2',
      name: 'Leather Luxury Tote',
      price: 129,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Premium leather craftsmanship',
      features: ['Genuine Leather', 'Interior Pockets', 'Lifetime Warranty']
    },
    {
      id: '3',
      name: 'Eco-Friendly Jute Tote',
      price: 35,
      image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Sustainable and stylish everyday companion',
      features: ['Biodegradable Jute', 'Cotton Lining', 'Eco Certification']
    },
    {
      id: '4',
      name: 'Designer Print Tote',
      price: 65,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Bold patterns for bold personalities',
      features: ['Artist Collaboration', 'Limited Edition', 'Premium Fabric']
    },
    {
      id: '5',
      name: 'Minimalist Tote',
      price: 42,
      image: 'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Clean lines, maximum impact',
      features: ['Minimalist Design', 'Durable Canvas', 'Multiple Colors']
    },
    {
      id: '6',
      name: 'Beach Essentials Tote',
      price: 38,
      image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Perfect for sunny adventures',
      features: ['Water Resistant', 'Large Capacity', 'Sand-Proof Base']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Our Featured Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover handcrafted tote bags that blend style, sustainability, and functionality. 
            Each piece is thoughtfully designed to complement your lifestyle.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  whileHover={{ scale: 1.1 }}
                />
                
                {/* Overlay Actions */}
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="flex space-x-4">
                    <motion.button
                      className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary-500 hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      className="p-3 bg-white rounded-full text-gray-900 hover:bg-red-500 hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>

                {/* Sale Badge */}
                {index === 1 && (
                  <motion.div
                    className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 500 }}
                  >
                    SALE
                  </motion.div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">(4.9)</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors duration-200">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary-500">
                    ${product.price}
                  </div>
                  <motion.button
                    className="px-6 py-2 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-4 border-2 border-primary-500 text-primary-500 rounded-full font-semibold text-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;