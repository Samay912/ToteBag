import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Shield, Truck, Heart, Recycle, Award } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      id: '1',
      icon: Leaf,
      title: 'Eco-Friendly Materials',
      description: 'Made from sustainable, organic, and recycled materials that respect our planet.',
      color: 'bg-green-100 text-green-600'
    },
    {
      id: '2',
      icon: Shield,
      title: 'Lifetime Warranty',
      description: 'We stand behind our quality with comprehensive coverage for manufacturing defects.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: '3',
      icon: Truck,
      title: 'Free Shipping',
      description: 'Complimentary shipping on all orders above $50. Fast and secure delivery worldwide.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: '4',
      icon: Heart,
      title: 'Handcrafted with Love',
      description: 'Each bag is carefully crafted by skilled artisans who take pride in their work.',
      color: 'bg-red-100 text-red-600'
    },
    {
      id: '5',
      icon: Recycle,
      title: 'Sustainable Process',
      description: 'Our entire production process minimizes waste and reduces environmental impact.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      id: '6',
      icon: Award,
      title: 'Award Winning Design',
      description: 'Recognition from top design institutions for innovation and aesthetic excellence.',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
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
            Why Choose Our Tote Bags?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're committed to creating products that not only look great but also 
            make a positive impact on the world around us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <motion.div
                className={`inline-flex p-4 rounded-2xl ${feature.color} mb-6`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <feature.icon className="w-8 h-8" />
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-500 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-primary-500 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-primary-500 rounded-3xl p-8 sm:p-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50,000+', label: 'Happy Customers' },
              { value: '99.5%', label: 'Satisfaction Rate' },
              { value: '100%', label: 'Sustainable Materials' },
              { value: '24/7', label: 'Customer Support' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1 + 0.6,
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }}
                whileHover={{ scale: 1.05 }}
                className="cursor-default"
              >
                <div className="text-3xl sm:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-100 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;