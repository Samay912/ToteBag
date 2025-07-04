import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Globe } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To create beautiful, functional bags while promoting sustainable practices and ethical manufacturing.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly exploring new materials and designs to push the boundaries of sustainable fashion.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a community of conscious consumers who value quality, sustainability, and style.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Making a positive difference worldwide through responsible sourcing and fair trade practices.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Crafting Tomorrow's 
              <span className="text-primary-500"> Accessories</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Founded in 2020, ToteBag Co. began with a simple vision: to create beautiful, 
              sustainable bags that don't compromise on style or functionality. What started 
              as a small studio has grown into a global movement of conscious consumers.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our founders, Sarah and Mike, were frustrated by the lack of stylish, 
                eco-friendly bag options in the market. They decided to change that by 
                partnering with skilled artisans and sustainable material suppliers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to offer a collection that proves you don't have to 
                choose between style and sustainability. Every bag tells a story of 
                craftsmanship, care, and commitment to our planet.
              </p>
            </div>

            <motion.button
              className="px-8 py-4 bg-primary-500 text-white rounded-full font-semibold text-lg hover:bg-primary-600 transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.img
                src="https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Artisan crafting tote bag"
                className="w-full h-auto rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              
              {/* Floating Quote */}
              <motion.div
                className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 bg-white rounded-2xl p-4 sm:p-6 shadow-xl w-[calc(100%-2rem)] sm:max-w-sm"
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ rotate: 2, y: -5 }}
              >
                <p className="text-gray-700 font-medium italic">
                  "Every stitch is a promise of quality and sustainability."
                </p>
                <div className="mt-2 text-sm text-primary-500 font-semibold">
                  - Sarah, Co-Founder
                </div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-2xl rotate-3 -z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 text-center mb-12">
            What Drives Us
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <motion.div
                  className="inline-flex p-4 bg-primary-100 text-primary-600 rounded-2xl mb-4"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 10,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  <value.icon className="w-8 h-8" />
                </motion.div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                  {value.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;