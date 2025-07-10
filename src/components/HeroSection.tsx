'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { Typewriter } from 'react-simple-typewriter'


const containerVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const // add as const here
    }
  }
};

export default function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      // More reliable scroll method
      window.scrollTo({
        top: projectsSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 bg-grid-white/[0.05] relative">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-gradient-to-tr from-blue-900/50 to-purple-900/50 blur-3xl pointer-events-none"></div>

      <motion.div
        className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left order-2 md:order-1">
          <motion.h2 variants={itemVariants} className="text-lg font-medium text-cyan-400 tracking-wider">
            HELLO, I AM
          </motion.h2>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold mt-3 bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400">
            Ram Goyal.
          </motion.h1>

          <motion.div variants={itemVariants} className="text-xl md:text-2xl mt-5 text-slate-300 h-16 md:h-auto">
            I build things for the web as a{' '}
            <span className="text-white font-bold">
              <Typewriter
                words={['Full Stack Developer.', 'MERN Stack Expert.', 'Next.js Enthusiast.']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a href="#contact">
              <button className="btn-primary w-full sm:w-auto">Contact Me</button>
            </a>
            <button
              onClick={scrollToProjects}
              className="btn-secondary w-full sm:w-auto"
            >
              View My Work
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex justify-center md:justify-start space-x-6">
            <a href="https://github.com/ram-goyal158" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125">
              <FiGithub size={26} />
            </a>
            <a href="https://www.linkedin.com/in/ram-goyal-58013b295/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125">
              <FiLinkedin size={26} />
            </a>
            <a href="https://www.instagram.com/ramgoyal158/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125">
              <FiInstagram size={26} />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Image with a glowing effect */}
        <motion.div
          className="relative group flex justify-center items-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition duration-500 animate-pulse"></div>
          <div className="relative rounded-full overflow-hidden w-80 h-80 border-4 border-slate-700">
            <Image
              src="/ram-goyal-profile.png"
              alt="Ram Goyal"
              width={320}
              height={320}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}