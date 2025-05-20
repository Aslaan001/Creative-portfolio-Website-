import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight, Star, Users, Globe, Briefcase as BriefcaseBusiness } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import ParallaxSection from '../components/ParallaxSection';
import AnimatedCounter from '../components/AnimatedCounter';

// Team members data
const teamMembers = [
  {
    name: 'Alex Morgan',
    position: 'Creative Director',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Sophia Chen',
    position: 'Head of Design',
    image: 'https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'James Wilson',
    position: 'Technical Lead',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Maya Patel',
    position: 'UX Specialist',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

// Company values
const values = [
  {
    icon: <Award className="w-6 h-6 text-primary-500" />,
    title: 'Excellence',
    description: 'We pursue quality and refinement in everything we create, never settling for mediocrity.',
  },
  {
    icon: <Users className="w-6 h-6 text-primary-500" />,
    title: 'Collaboration',
    description: 'We believe the best results come from transparent communication and teamwork.',
  },
  {
    icon: <Star className="w-6 h-6 text-primary-500" />,
    title: 'Innovation',
    description: 'We constantly push boundaries and explore new possibilities in digital design.',
  },
  {
    icon: <Globe className="w-6 h-6 text-primary-500" />,
    title: 'Impact',
    description: 'We aim to create work that makes a meaningful difference for our clients and their audiences.',
  },
];

// Company stats
const stats = [
  { value: 150, suffix: '+', title: 'Projects Delivered' },
  { value: 12, suffix: '', title: 'Years of Excellence' },
  { value: 40, suffix: '+', title: 'Team Members' },
  { value: 25, suffix: '+', title: 'Industry Awards' },
];

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <ScrollReveal>
            <h1 className="heading-xl mb-8 max-w-4xl">
              About <span className="text-primary-200">Elite8</span> Digital
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mb-8">
              We're a creative powerhouse dedicated to transforming brands through innovative design and strategic thinking.
            </p>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-24 bg-light-100 dark:bg-dark-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="heading-lg mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-lg mb-6 text-dark-800 dark:text-light-300">
                Founded in 2012, Elite8 Digital began as a small team of passionate designers and developers with a shared vision: to create digital experiences that inspire, engage, and deliver exceptional results.
              </p>
              <p className="text-lg mb-6 text-dark-800 dark:text-light-300">
                Over the years, we've grown into a full-service creative agency working with clients across industries and continents. Our diverse team brings together expertise in design, development, strategy, and marketing to provide comprehensive solutions for modern businesses.
              </p>
              <p className="text-lg text-dark-800 dark:text-light-300">
                Today, we continue to push the boundaries of digital creativity, staying at the forefront of emerging technologies and design trends to help our clients stand out in an ever-evolving landscape.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <ParallaxSection direction="up" speed={0.1}>
                <div className="relative">
                  <div className="bg-primary-500 absolute -left-6 -top-6 w-64 h-64 rounded-lg -z-10"></div>
                  <div className="bg-secondary-500 absolute -right-6 -bottom-6 w-64 h-64 rounded-lg -z-10"></div>
                  <img 
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Our team collaborating"
                    className="w-full h-full object-cover rounded-lg shadow-xl" 
                  />
                </div>
              </ParallaxSection>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-24 bg-light-200 dark:bg-dark-200">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg mb-6">
                Our <span className="text-gradient">Values</span>
              </h2>
              <p className="text-lg text-dark-800 dark:text-light-300">
                These core principles guide our approach and define who we are as a creative agency.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <motion.div 
                  className="bg-light-100 dark:bg-dark-300 p-8 rounded-xl h-full flex"
                  whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mr-5 flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-dark-800 dark:text-light-300">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-24 bg-light-100 dark:bg-dark-100">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg mb-6">
                Meet Our <span className="text-gradient">Team</span>
              </h2>
              <p className="text-lg text-dark-800 dark:text-light-300">
                Our diverse team of experts brings creativity, technical knowledge, and strategic thinking to every project.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <motion.div 
                  className="relative group"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="overflow-hidden rounded-xl mb-4">
                    <motion.img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full aspect-square object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary-500">{member.position}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-24 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div 
                  className="text-center p-8"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix} 
                    className="text-5xl md:text-6xl font-bold text-primary-300 mb-4"
                  />
                  <p className="text-xl text-white/80">{stat.title}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Clients Section */}
      <section className="py-24 bg-light-200 dark:bg-dark-200">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg mb-6">
                Trusted by <span className="text-gradient">Leading Brands</span>
              </h2>
              <p className="text-lg text-dark-800 dark:text-light-300">
                We've had the privilege of working with fantastic clients across various industries.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[...Array(6)].map((_, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div 
                  className="py-4 flex justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-16 h-16 flex items-center justify-center">
                    <BriefcaseBusiness className="w-10 h-10 text-primary-500" />
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-light-100 dark:bg-dark-100">
        <div className="container-custom">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-12 text-center">
              <h2 className="heading-lg text-white mb-6">
                Join Our Creative Journey
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Ready to transform your business with our creative expertise? Let's start a conversation.
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

export default About;