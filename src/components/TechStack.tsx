// src/components/TechStack.tsx
'use client'

import { motion } from 'framer-motion'
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiVercel,
} from 'react-icons/si'
import { IconType } from 'react-icons'

// Tech item
interface TechItem {
  name: string
  icon: IconType
  color: string // colour the icon
}

// Tech stack with the real colours
const techStack: TechItem[] = [
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' }, // Next.js is black, will look good on light bg
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, color: '#000000' }, // Express is also black
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Tech Arsenal
        </motion.h2>
        <motion.p
          className="text-lg text-slate-400 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The tools and technologies I use to build modern web experiences.
        </motion.p>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              className="group relative flex flex-col items-center justify-center p-4 bg-slate-800/60 backdrop-blur-md border border-slate-700/80 rounded-2xl aspect-square"
              variants={itemVariants}
              whileHover={{ scale: 1.1, zIndex: 10, transition: { duration: 0.2 } }}
            >
              
              <tech.icon
                className="text-5xl md:text-6xl transition-transform duration-300 transform group-hover:scale-110"
                style={{ color: tech.color }} // icon is coloured here
              />
              
              {/* dark icon colours */}
              {(tech.color === '#000000' || tech.color ==='#0B0C10') && (
                <div className="absolute inset-0 bg-white rounded-full -z-10 scale-50 opacity-80 blur-lg"></div>
              )}
              
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  boxShadow: `0 0 20px 5px ${tech.color}`,
                  backgroundColor: tech.color,
                }}
              />
              <div className="absolute -bottom-12 w-auto px-3 py-1.5 bg-slate-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {tech.name}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-slate-900"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}