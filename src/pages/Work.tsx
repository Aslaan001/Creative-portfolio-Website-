import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';

// Sample project data
const projects = [
  {
    id: '1',
    title: 'Nebula Vision',
    category: 'Brand Identity',
    image: 'https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'nebula-vision',
    tags: ['branding', 'design'],
  },
  {
    id: '2',
    title: 'Quantum Labs',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/5926386/pexels-photo-5926386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'quantum-labs',
    tags: ['web', 'development'],
  },
  {
    id: '3',
    title: 'Echo Stream',
    category: 'Mobile App',
    image: 'https://images.pexels.com/photos/5083406/pexels-photo-5083406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'echo-stream',
    tags: ['mobile', 'development'],
  },
  {
    id: '4',
    title: 'Pulse Analytics',
    category: 'UI/UX Design',
    image: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'pulse-analytics',
    tags: ['ui', 'ux', 'design'],
  },
  {
    id: '5',
    title: 'Verde Organics',
    category: 'Brand Identity',
    image: 'https://images.pexels.com/photos/5966513/pexels-photo-5966513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'verde-organics',
    tags: ['branding', 'design'],
  },
  {
    id: '6',
    title: 'Horizon Finance',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'horizon-finance',
    tags: ['web', 'development'],
  },
  {
    id: '7',
    title: 'Lunar Fitness',
    category: 'Mobile App',
    image: 'https://images.pexels.com/photos/3757959/pexels-photo-3757959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'lunar-fitness',
    tags: ['mobile', 'development'],
  },
  {
    id: '8',
    title: 'Nova Coffee',
    category: 'Brand Identity',
    image: 'https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'nova-coffee',
    tags: ['branding', 'design'],
  },
];

// Unique categories for filter
const categories = ['All', ...new Set(projects.map(project => project.category))];

const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  // Handle filter change
  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <ScrollReveal>
            <h1 className="heading-xl mb-8 max-w-4xl">
              Our <span className="text-primary-200">Creative</span> Portfolio
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mb-8">
              Explore our collection of exceptional projects that showcase our expertise, creativity, and dedication to delivering outstanding results.
            </p>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="py-12 bg-light-200 dark:bg-dark-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center mb-10 gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => handleFilterChange(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-light-300 dark:bg-dark-300 text-dark-800 dark:text-light-300 hover:bg-primary-100 dark:hover:bg-primary-900/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} {...project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-24 bg-light-100 dark:bg-dark-100">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg mb-6">
                Our <span className="text-gradient">Creative Process</span>
              </h2>
              <p className="text-lg text-dark-800 dark:text-light-300">
                We follow a proven methodology to ensure every project delivers exceptional results.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Discovery', 'Strategy', 'Design', 'Development'].map((step, index) => (
              <ScrollReveal key={step} delay={index * 0.1} direction="up">
                <motion.div 
                  className="relative bg-light-200 dark:bg-dark-200 p-8 rounded-xl h-full"
                  whileHover={{ y: -10, boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-7xl font-bold text-primary-100 dark:text-primary-900/30 absolute top-6 right-6">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10">{step}</h3>
                  <p className="text-dark-800 dark:text-light-300 relative z-10">
                    {index === 0 && "We immerse ourselves in your brand, understanding your goals, audience, and industry landscape."}
                    {index === 1 && "We develop a comprehensive plan aligning with your objectives and business requirements."}
                    {index === 2 && "Our creative team crafts compelling visual concepts tailored to your brand identity."}
                    {index === 3 && "We bring designs to life with clean, efficient code and rigorous quality assurance."}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-primary-50 dark:bg-dark-300">
        <div className="container-custom">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-12 text-center">
              <h2 className="heading-lg text-white mb-6">
                Have a Project in Mind?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Let's discuss how we can help bring your ideas to life with our creative expertise.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <motion.a 
                  href="/contact" 
                  className="btn bg-white text-primary-600 hover:bg-white/90"
                >
                  Start a Project
                </motion.a>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Work;