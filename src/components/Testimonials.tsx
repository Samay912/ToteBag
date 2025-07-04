import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Emma Richardson',
      text: 'Absolutely love my new tote bag! The quality is outstanding and it goes with everything. Plus, knowing it\'s sustainably made makes me feel even better about my purchase.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '2',
      name: 'James Wilson',
      text: 'I bought this as a gift for my wife and she couldn\'t be happier. The craftsmanship is incredible and the customer service was top-notch. Highly recommend!',
      rating: 5,
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '3',
      name: 'Sofia Chen',
      text: 'Perfect for my daily commute and weekend adventures. The bag is spacious, durable, and stylish. I\'ve gotten so many compliments on it!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '4',
      name: 'Michael Brown',
      text: 'Great quality and fast shipping. The bag exceeded my expectations and the eco-friendly aspect was a huge plus for me. Will definitely order again!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '5',
      name: 'Lisa Park',
      text: 'I\'ve been using this tote for months now and it still looks brand new. The material is so well-made and the design is timeless. Worth every penny!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: '6',
      name: 'David Kim',
      text: 'Fantastic product and company values. Love supporting a business that cares about sustainability while delivering exceptional quality.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what real customers have to say 
            about their ToteBag Co. experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <motion.div
                className="absolute top-4 right-4 text-primary-200"
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                <Quote className="w-8 h-8" />
              </motion.div>

              {/* Stars */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1 + 0.5 + i * 0.1,
                      type: "spring",
                      stiffness: 500
                    }}
                  >
                    <Star className="w-5 h-5 fill-current" />
                  </motion.div>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-primary-500 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of satisfied customers
          </p>
          <motion.button
            className="px-8 py-4 bg-primary-500 text-white rounded-full font-semibold text-lg hover:bg-primary-600 transition-colors duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;