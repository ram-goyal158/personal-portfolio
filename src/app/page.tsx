import HeroSection from '@/components/HeroSection'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}
