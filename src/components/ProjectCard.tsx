import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  slug: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, category, image, slug, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg cursor-pointer"
    >
      <Link to={`/work/${slug}`} className="block h-full">
        <div className="aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
        </div>
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/30 to-transparent p-6 flex flex-col justify-end"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="transform group-hover:translate-y-0 translate-y-4 transition-transform duration-300">
            <span className="inline-block text-primary-400 font-medium mb-2">
              {category}
            </span>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              {title}
              <ArrowUpRight 
                size={20} 
                className="ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" 
              />
            </h3>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;