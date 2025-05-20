import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Facebook, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-light-100 dark:bg-dark-200 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold mb-4">
                Elite<span className="text-primary-500">8</span>
              </h3>
              <p className="text-dark-800 dark:text-light-300 mb-6">
                We craft digital experiences that inspire, engage, and deliver exceptional results for businesses worldwide.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="w-10 h-10 rounded-full bg-light-300 dark:bg-dark-300 flex items-center justify-center text-dark-800 dark:text-light-100 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'Work', 'About', 'Contact'].map((item, index) => (
                <li key={index}>
                  <NavLink 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-dark-800 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-300"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {['Digital Marketing', 'Web Development', 'Branding', 'UI/UX Design', 'Video Production'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-dark-800 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p className="text-dark-800 dark:text-light-300 mb-4">
              123 Creative Street<br />
              New York, NY 10001<br />
              United States
            </p>
            <a 
              href="mailto:hello@elite8digital.com" 
              className="flex items-center text-primary-500 hover:text-primary-600 transition-colors duration-300"
            >
              <Mail size={16} className="mr-2" />
              hello@elite8digital.com
            </a>
            <a 
              href="tel:+12345678900" 
              className="text-dark-800 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-300 mt-2 block"
            >
              +1 (234) 567-8900
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-light-300 dark:border-dark-300 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
            <p className="text-dark-800 dark:text-light-300">
              &copy; {currentYear} Elite8 Digital. All rights reserved.
            </p>
            <span className="hidden md:inline text-dark-800 dark:text-light-300">|</span>
            <p className="text-dark-800 dark:text-light-300">
              Developed by <a href="https://github.com/aslaankhan" className="text-primary-500 hover:text-primary-600 transition-colors duration-300">Aslaan Khan</a>
            </p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-dark-800 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-500 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-dark-800 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-500 text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-dark-800 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-500 text-sm transition-colors duration-300"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;