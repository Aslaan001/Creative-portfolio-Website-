import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Shield, Award, Users, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import ParallaxSection from '../components/ParallaxSection';
import AnimatedCounter from '../components/AnimatedCounter';
import ProjectCard from '../components/ProjectCard';

// Sample data for projects
const featuredProjects = [
  {
    id: '1',
    title: 'Nebula Vision',
    category: 'Brand Identity',
    image: 'https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'nebula-vision',
  },
  {
    id: '2',
    title: 'Quantum Labs',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/5926386/pexels-photo-5926386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'quantum-labs',
  },
  {
    id: '3',
    title: 'Echo Stream',
    category: 'Mobile App',
    image: 'https://images.pexels.com/photos/5083406/pexels-photo-5083406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'echo-stream',
  },
];

// Sample services
const services = [
  {
    icon: <Star className="text-primary-500 w-6 h-6" />,
    title: 'Branding',
    description: 'We build brands that stand out with strategic positioning and captivating visual identities.',
  },
  {
    icon: <BarChart className="text-primary-500 w-6 h-6" />,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that connect with your audience and drive measurable results.',
  },
  {
    icon: <Shield className="text-primary-500 w-6 h-6" />,
    title: 'Web Development',
    description: 'Custom websites and applications built with cutting-edge technology and optimal performance.',
  },
  {
    icon: <Users className="text-primary-500 w-6 h-6" />,
    title: 'UI/UX Design',
    description: 'User-centered design that creates seamless, intuitive digital experiences for your audience.',
  },
];

// Sample testimonials
const testimonials = [
  {
    quote: "Elite8 completely transformed our digital presence. Their creative approach and technical expertise delivered results beyond our expectations.",
    author: "Jessica Chen",
    position: "CEO, TechVision",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    quote: "Working with Elite8 was a game-changer for our brand. They understood our vision immediately and executed it flawlessly.",
    author: "Marcus Johnson",
    position: "Marketing Director, Nexus Global",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

// Stats for counter section
const stats = [
  { value: 150, suffix: '+', title: 'Projects Completed' },
  { value: 12, suffix: '+', title: 'Years Experience' },
  { value: 98, suffix: '%', title: 'Client Satisfaction' },
  { value: 40, suffix: '+', title: 'Team Members' },
];

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-800/20 to-secondary-800/20 mix-blend-multiply z-10"></div>
          <ParallaxSection direction="up" speed={0.3} className="h-full">
            <img 
              src="https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Creative workspace"
              className="w-full h-full object-cover"
            />
          </ParallaxSection>
        </div>
        
        <div className="container-custom relative z-10">
          <ScrollReveal direction="up" className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="heading-xl text-white mb-6">
                We bring <span className="text-gradient">digital ideas</span> to life
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
                Award-winning creative agency crafting bold brands and 
                immersive digital experiences for forward-thinking companies.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/work" className="btn btn-primary px-8 py-4">
                    View Our Work <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/contact" className="btn bg-white/10 text-white backdrop-blur-md hover:bg-white/20 px-8 py-4">
                    <Play className="mr-2 w-5 h-5" /> Showreel
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.2
          }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center p-2">
            <motion.div 
              className="w-1 h-3 bg-white rounded-full"
              animate={{ 
                y: [0, 12, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </motion.div>
      </section>
      
      {/* Services Section */}
      <section className="py-24 bg-light-100 dark:bg-dark-200">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg mb-6">
                Our <span className="text-gradient">Services</span>
              </h2>
              <p className="text-lg text-dark-800 dark:text-light-300">
                We offer a full range of creative services to help your business stand out in the digital landscape.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <motion.div 
                  className="bg-light-200 dark:bg-dark-300 p-6 rounded-xl h-full"
                  whileHover={{ y: -10, boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-dark-800 dark:text-light-300">
                    {service.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* About/Stats Section */}
      <section className="py-24 bg-primary-50 dark:bg-dark-300">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="heading-lg mb-6">
                Crafting <span className="text-gradient">Digital Excellence</span> Since 2012
              </h2>
              <p className="text-lg mb-8 text-dark-800 dark:text-light-300">
                We're a team of passionate designers, developers, and digital strategists dedicated to creating exceptional digital experiences. Our collaborative approach and focus on results have made us a trusted partner for businesses worldwide.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link to="/about" className="btn btn-primary">
                  About Us <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </ScrollReveal>
            
            <div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <ScrollReveal key={index} delay={index * 0.1} direction="up">
                    <div className="bg-white dark:bg-dark-200 p-6 rounded-xl">
                      <AnimatedCounter 
                        end={stat.value} 
                        suffix={stat.suffix} 
                        className="text-4xl md:text-5xl font-bold text-primary-500 mb-2"
                      />
                      <p className="text-dark-800 dark:text-light-300">{stat.title}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-24 bg-light-200 dark:bg-dark-100">
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
              <div>
                <h2 className="heading-lg mb-4">
                  Featured <span className="text-gradient">Work</span>
                </h2>
                <p className="text-lg text-dark-800 dark:text-light-300 max-w-2xl">
                  Explore our selected projects that showcase our creativity, technical expertise, and strategic thinking.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 md:mt-0"
              >
                <Link to="/work" className="btn btn-primary">
                  View All Projects <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-r from-primary-900 to-secondary-900 text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg mb-6">
                What Our <span className="text-primary-400">Clients Say</span>
              </h2>
              <p className="text-lg text-white/80">
                Don't take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <motion.div 
                  className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
                  whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(0,0,0,0.2)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover mr-4" 
                    />
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.author}</h4>
                      <p className="text-white/70">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-lg italic text-white/90 mb-4">"{testimonial.quote}"</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-light-100 dark:bg-dark-200">
        <div className="container-custom">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-12 text-center">
              <h2 className="heading-lg text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Let's create something amazing together. Our team is ready to bring your vision to life.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-white/90">
                  Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Home;