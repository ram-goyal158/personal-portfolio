// src/components/Projects.tsx
'use client'

import { motion, Variants } from 'framer-motion' 
import Image from 'next/image'
import Link from 'next/link'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

// project data
const projectsData = [

  {
    title: "BuyHaven E-Commerce",
    image: "/ecom.png",
    description: "A full-stack e-commerce platform with a modern UI, featuring product filtering, shopping cart, and user authentication.",
    tech: ["Next.js", "MongoDB", "Express", "Node.js", "Tailwind CSS"],
    github: "https://github.com/ram-goyal158/BuyHaven-Ecommerce",
    live: "https://buy-haven-ecommerce.vercel.app/",
  },
  {
    title: "JobVerse Portal",
    image: "/job.png",
    description: "A comprehensive job portal connecting job seekers and employers, with features like job search and resume uploads.",
    tech: ["React", "Node.js", "MongoDB", "Redux", "Material-UI"],
    github: "https://github.com/ram-goyal158/jobverse",
    live: "https://jobverse-theta.vercel.app/",
  },
]

// animation variants
const sectionVariants: Variants = { 
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = { 
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Projects() {
  
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400">02.</span> My Creations
        </motion.h2>
        
        <motion.div 
          className="flex flex-col gap-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.title}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center glassmorphism p-8"
              variants={itemVariants}
            >
              {/* project image*/}
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-2xl group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-transform duration-500 group-hover:scale-105 bg-black p-2"
                />
              </div>

              {/* project details */}
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-slate-100 mb-3">{project.title}</h3>
                <p className="text-slate-300 leading-relaxed mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-6">
                  <Link href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-200 font-semibold hover:text-cyan-400 transition-colors duration-300">
                    <FiExternalLink size={20} /> Live Demo
                  </Link>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-200 font-semibold hover:text-cyan-400 transition-colors duration-300">
                    <FiGithub size={20} /> Source Code
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}