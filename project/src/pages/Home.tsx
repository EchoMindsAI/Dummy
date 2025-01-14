import React from 'react';
import { ArrowRight, Bot, BarChart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80')] bg-cover bg-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-purple-900/40 backdrop-blur-[2px]"
          ></motion.div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimatedText
              text="Transform Your Business with Advanced AI-Powered Solutions"
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              We specialize in delivering cutting-edge AI solutions designed to empower businesses across all industries.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
             
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We combine cutting-edge AI technology with marketing expertise to deliver exceptional results for your business.
              </p>
            </FadeInWhenVisible>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Bot className="h-8 w-8 text-violet-400" />,
                title: "AI-Powered Insights",
                description: "Leverage machine learning algorithms to understand your market and customers better.",
                bg: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                icon: <BarChart className="h-8 w-8 text-violet-400" />,
                title: "Data-Driven Strategy",
                description: "Make informed decisions based on real-time analytics and predictive modeling.",
                bg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                icon: <Users className="h-8 w-8 text-violet-400" />,
                title: "Personalized Campaigns",
                description: "Create targeted marketing campaigns that resonate with your audience.",
                bg: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((feature, index) => (
              <FadeInWhenVisible key={index} delay={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative overflow-hidden rounded-lg"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${feature.bg})` }}
                  >
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
                  </div>
                  <div className="relative p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-black"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            backgroundSize: ['100% 100%', '120% 120%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have already revolutionized their approach with our AI-powered solutions.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
}