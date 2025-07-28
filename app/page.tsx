"use client";

import { motion } from 'framer-motion';
import Intro from './components/Intro';

// Social links data
const socialLinks = [
  {
    href: "mailto:armondschneider@gmail.com",
    label: "Email",
    text: "Email"
  },
  {
    href: "https://www.linkedin.com/in/armondschneider/",
    label: "LinkedIn",
    text: "LinkedIn"
  },
  {
    href: "https://x.com/armondme",
    label: "X (formerly Twitter)",
    text: "X"
  },
  {
    href: "https://www.github.com/armondschneider",
    label: "Github",
    text: "Github"
  }
];

// Animation variants for better organization
const containerVariants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const footerVariants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)",
    transition: { 
      delay: 0.3, 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Intro />
      </motion.div>
      
      {/* Footer */}
      <motion.footer 
        className="mt-12 pt-8 border-t border-gray-100"
        variants={footerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-xl mb-4 flex flex-wrap gap-6 text-sm text-gray-500">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 hover:underline transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ 
                delay: 0.5 + (index * 0.1),
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              {link.text}
            </motion.a>
          ))}
        </div>
        
        <motion.p 
          className="mt-4 text-sm text-gray-500"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        >
          © {new Date().getFullYear()} Armond Schneider. Made with love...by me
        </motion.p>
      </motion.footer>
    </div>
  );
}