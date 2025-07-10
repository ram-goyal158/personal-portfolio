// src/components/About.tsx
'use client'

import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiNextdotjs, SiMongodb, SiExpress, SiTailwindcss, SiTypescript } from 'react-icons/si'

// Animation variant for the main container
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

// Animation variant for child elements
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

// Tech skill component for reusability
const TechSkill = ({ icon, name }: { icon: React.ReactElement; name: string }) => (
  <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-slate-800/70 hover:bg-cyan-400/10 transition-colors duration-300">
    <span className="text-4xl text-cyan-400">{icon}</span>
    <span className="text-sm text-slate-300">{name}</span>
  </div>
)

export default function About() {
  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8"
    >
      <motion.div
        className="max-w-4xl w-full mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Animation triggers once when 30% of the element is in view
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          variants={itemVariants}
        >
          <span className="text-cyan-400">01.</span> About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Left Side: About Text */}
          <motion.div 
            className="md:col-span-3 glassmorphism p-8"
            variants={itemVariants}
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              Hello! I&#39;m Ram Goyal, a developer from India with a passion for creating beautiful and functional things for the internet. My journey into web development started with a simple curiosity, which has now grown into a full-fledged career.
              <br/><br/>
              I specialize in the <strong className="text-white">MERN stack</strong>, with a particular love for <strong className="text-white">Next.js</strong> and its powerful ecosystem. I enjoy the entire process of development, from brainstorming ideas and designing user interfaces to building robust back-end APIs and deploying applications.
              <br/><br/>
              When I&#39;m not coding, you can find me exploring new technologies, contributing to open-source, or brewing a perfect cup of coffee.
            </p>
          </motion.div>
          
          {/* Right Side: Tech Skills */}
          <motion.div 
            className="md:col-span-2 space-y-4"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-slate-200 mb-4 text-center md:text-left">Core Technologies</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4">
              <TechSkill icon={<SiNextdotjs />} name="Next.js" />
              <TechSkill icon={<FaReact />} name="React" />
              <TechSkill icon={<SiTypescript />} name="TypeScript" />
              <TechSkill icon={<FaNodeJs />} name="Node.js" />
              <TechSkill icon={<SiExpress />} name="Express" />
              <TechSkill icon={<SiMongodb />} name="MongoDB" />
              <TechSkill icon={<SiTailwindcss />} name="Tailwind" />
              <TechSkill icon={<FaDatabase />} name="SQL" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}