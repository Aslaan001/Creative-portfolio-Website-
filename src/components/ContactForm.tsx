import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-700 rounded-lg p-6 text-center"
        >
          <div className="mx-auto w-16 h-16 bg-success-100 dark:bg-success-800/30 rounded-full flex items-center justify-center mb-4">
            <Check size={32} className="text-success-600 dark:text-success-400" />
          </div>
          <h3 className="text-2xl font-bold text-success-700 dark:text-success-400 mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-success-600 dark:text-success-300">
            Thanks for reaching out. We'll get back to you as soon as possible.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-dark-800 dark:text-light-200 mb-1">
                Your Name <span className="text-error-500">*</span>
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name 
                    ? 'border-error-500 bg-error-50 dark:bg-error-900/10' 
                    : 'border-light-300 dark:border-dark-300 bg-light-100 dark:bg-dark-200'
                } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-300`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-error-600 dark:text-error-400">{errors.name}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark-800 dark:text-light-200 mb-1">
                Email Address <span className="text-error-500">*</span>
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email 
                    ? 'border-error-500 bg-error-50 dark:bg-error-900/10' 
                    : 'border-light-300 dark:border-dark-300 bg-light-100 dark:bg-dark-200'
                } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-300`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-error-600 dark:text-error-400">{errors.email}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-dark-800 dark:text-light-200 mb-1">
              Subject
            </label>
            <motion.select
              whileFocus={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-light-300 dark:border-dark-300 bg-light-100 dark:bg-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-300"
            >
              <option value="">Select a subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Project Quote">Project Quote</option>
              <option value="Partnership">Partnership</option>
              <option value="Job Opportunity">Job Opportunity</option>
              <option value="Other">Other</option>
            </motion.select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-dark-800 dark:text-light-200 mb-1">
              Message <span className="text-error-500">*</span>
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.message 
                  ? 'border-error-500 bg-error-50 dark:bg-error-900/10' 
                  : 'border-light-300 dark:border-dark-300 bg-light-100 dark:bg-dark-200'
              } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-300`}
              placeholder="Tell us about your project or inquiry..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-error-600 dark:text-error-400">{errors.message}</p>
            )}
          </div>
          
          <div className="pt-2">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className={`w-full btn btn-primary py-4 relative overflow-hidden ${
                isSubmitting ? 'opacity-90 cursor-wait' : ''
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : "Send Message"}
            </motion.button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;