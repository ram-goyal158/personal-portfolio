// src/components/Experience.tsx
'use client'

import { motion } from 'framer-motion'
import { FaBriefcase, FaCertificate, FaDownload } from 'react-icons/fa'
import Link from 'next/link'

// experience data 
const experienceData = [
  {
    company: "NullClass",
    role: "VAPT Intern (Cyber Security)",
    year: "Jan 2025 - Present",
    description: "Conducted vulnerability assessments and penetration testing on web applications, identifying and reporting security flaws."
  },
  {
    company: "Freelance",
    role: "MERN Stack Developer",
    year: "2024",
    description: "Developed and maintained full-stack web applications for various clients, focusing on creating responsive UIs and robust back-end APIs."
  }
]

// certificate data 
const certificationData = [
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    file: "/AWS certificate.pdf"
  },
  {
    name: "AWS Security Specialty",
    issuer: "Amazon Web Services",
    file: "/AWS SECURITY.pdf"
  },
  {
    name: "Cyber Security Training",
    issuer: "NullClass",
    file: "/NullClass-undefined-Training-Certificate.pdf"
  }
]

// animation variants - fixed type definitions
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: "easeInOut" as const // Using const assertion for type safety
    } 
  },
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400">03.</span> Career & Credentials
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* left side: Experience Timeline */}
          <motion.div 
            variants={sectionVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <h3 className="flex items-center gap-3 text-3xl font-bold text-slate-100 mb-8">
              <FaBriefcase className="text-cyan-400" />
              Work Experience
            </h3>
            <div className="relative border-l-2 border-slate-700 pl-8 space-y-12">
              {experienceData.map((exp, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[42px] top-1 w-5 h-5 bg-slate-700 rounded-full border-4 border-slate-900"></div>
                  <p className="text-sm font-semibold text-cyan-400 mb-1">{exp.year}</p>
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <p className="text-md text-slate-300 mb-2">{exp.company}</p>
                  <p className="text-slate-400 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* right side: Certifications */}
          <motion.div 
            variants={sectionVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <h3 className="flex items-center gap-3 text-3xl font-bold text-slate-100 mb-8">
              <FaCertificate className="text-cyan-400" />
              Certifications
            </h3>
            <div className="space-y-6">
              {certificationData.map((cert, i) => (
                <div key={i} className="glassmorphism p-5 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-white">{cert.name}</h4>
                    <p className="text-sm text-slate-400">{cert.issuer}</p>
                  </div>
                  <Link 
                    href={cert.file}
                    target="_blank"
                    download
                    className="flex items-center justify-center p-3 bg-cyan-400/10 rounded-full text-cyan-400 hover:bg-cyan-400/20 hover:scale-110 transition-all duration-300"
                    aria-label={`Download ${cert.name} certificate`}
                  >
                    <FaDownload />
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}