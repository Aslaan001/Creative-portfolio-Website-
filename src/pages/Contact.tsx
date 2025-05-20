import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  // Contact info
  const contactInfo = [
    {
      icon: <Mail className="text-primary-500 w-6 h-6" />,
      title: 'Email Us',
      details: 'hello@elite8digital.com',
      action: 'mailto:hello@elite8digital.com',
    },
    {
      icon: <MapPin className="text-primary-500 w-6 h-6" />,
      title: 'Visit Us',
      details: '123 Creative Street, New York, NY 10001',
      action: '#',
    },
    {
      icon: <Phone className="text-primary-500 w-6 h-6" />,
      title: 'Call Us',
      details: '+1 (234) 567-8900',
      action: 'tel:+12345678900',
    },
    {
      icon: <Clock className="text-primary-500 w-6 h-6" />,
      title: 'Working Hours',
      details: 'Mon-Fri: 9AM - 6PM EST',
      action: '#',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <ScrollReveal>
            <h1 className="heading-xl mb-8 max-w-4xl">
              Let's <span className="text-primary-200">Connect</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mb-8">
              Have a project in mind or want to learn more about our services? We'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Contact Info Cards */}
      <section className="py-16 bg-light-100 dark:bg-dark-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <motion.a
                  href={item.action}
                  className="bg-light-200 dark:bg-dark-200 p-6 rounded-xl h-full flex flex-col items-center text-center"
                  whileHover={{ y: -10, boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-dark-800 dark:text-light-300">
                    {item.details}
                  </p>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-24 bg-light-200 dark:bg-dark-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <h2 className="heading-lg mb-6">
                Send Us a <span className="text-gradient">Message</span>
              </h2>
              <p className="text-lg mb-8 text-dark-800 dark:text-light-300">
                Fill out the form below, and our team will get back to you as soon as possible. We're excited to learn about your project and how we can help bring your vision to life.
              </p>
              
              <div className="bg-primary-50 dark:bg-primary-900/10 p-6 rounded-xl mb-8">
                <div className="flex items-start">
                  <Send className="text-primary-500 w-6 h-6 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-dark-800 dark:text-light-300">
                    <span className="font-bold block mb-1">Quick Response Guarantee</span>
                    We aim to respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>
              
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our team ready to help"
                className="w-full rounded-xl shadow-lg" 
              />
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="bg-white dark:bg-dark-300 p-8 rounded-xl shadow-lg">
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-0">
        <div className="h-96 bg-light-300 dark:bg-dark-300 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent mix-blend-multiply"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-100 p-6 rounded-xl shadow-xl"
            >
              <MapPin className="w-12 h-12 text-primary-500 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Elite8 Digital HQ</h3>
              <p className="text-dark-800 dark:text-light-300">
                123 Creative Street<br />
                New York, NY 10001
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-light-100 dark:bg-dark-100">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg mb-6">
                Frequently <span className="text-gradient">Asked Questions</span>
              </h2>
              <p className="text-lg text-dark-800 dark:text-light-300">
                Everything you need to know about working with us.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Timelines vary based on project scope and complexity. A typical website project takes 6-12 weeks, while branding projects may take 4-8 weeks. We\'ll provide a detailed timeline during our initial consultation.'
              },
              {
                question: 'How do you price your services?',
                answer: 'We offer customized pricing based on your specific needs and project requirements. Our pricing reflects the value we bring and the quality of our work. We\'re happy to provide a detailed quote after understanding your project needs.'
              },
              {
                question: 'Do you work with clients internationally?',
                answer: 'Yes! We work with clients globally and have experience collaborating across different time zones. Our digital workflow makes it easy to work together regardless of location.'
              },
              {
                question: 'What information do you need to start a project?',
                answer: 'To get started, we typically need an overview of your business, project goals, target audience, timeline, and budget. During our kickoff meeting, we\'ll dive deeper to ensure we have all the information needed to make your project successful.'
              }
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div 
                  className="mb-6 bg-light-200 dark:bg-dark-200 rounded-xl p-6"
                  whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-dark-800 dark:text-light-300">
                    {faq.answer}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;