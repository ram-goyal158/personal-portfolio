// src/components/Contact.tsx
'use client'

import { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Contact() {
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name: form.name.valueOf,
      email: form.email.value,
      message: form.message.value,
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      setFormStatus('Message sent successfully!')
      form.reset()
    } else {
      setFormStatus('Failed to send message. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <motion.div
        className="max-w-4xl mx-auto px-4 md:px-8 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-4" variants={itemVariants}>
          <span className="text-cyan-400">04.</span> Get In Touch
        </motion.h2>

        <motion.p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12" variants={itemVariants}>
          I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll get back to you as soon as possible!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div className="text-left space-y-6" variants={itemVariants}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-400/10 rounded-full text-cyan-400">
                <FiMail size={22} />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">Email</h4>
                <a href="mailto:ramgoyal4551@gmail.com" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  ramg40186@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-400/10 rounded-full text-cyan-400">
                <FiPhone size={22} />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">Phone</h4>
                <a href="tel:+919990905479" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  (+91) 9990905479
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-400/10 rounded-full text-cyan-400">
                <FiMapPin size={22} />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">Location</h4>
                <a 
                  href="https://www.google.com/maps/place/Uttar+Pradesh,+India" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  Uttar Pradesh, India
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit}
            method="POST"
            className="space-y-5 text-left"
            variants={itemVariants}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Your Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border-2 border-slate-700 focus:border-cyan-400 focus:ring-cyan-400/50 focus:outline-none focus:ring-2 transition-all" 
                placeholder="What should I call you?"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Your Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border-2 border-slate-700 focus:border-cyan-400 focus:ring-cyan-400/50 focus:outline-none focus:ring-2 transition-all" 
                placeholder="Where can I reach you?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Your Message</label>
              <textarea 
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border-2 border-slate-700 focus:border-cyan-400 focus:ring-cyan-400/50 focus:outline-none focus:ring-2 transition-all"
                placeholder="Let's talk about..."
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
            {formStatus && <p className="text-sm text-green-400 mt-2">{formStatus}</p>}
          </motion.form>
        </div>

        <motion.div className="mt-20 text-slate-500 text-sm font-mono" variants={itemVariants}>
          <p>Designed & Built by Ram Goyal</p>
          <p>© {new Date().getFullYear()}</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
