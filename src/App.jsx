import { useScroll, useSpring, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import WhatsIncluded from './components/WhatsIncluded'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import BookingCTA from './components/BookingCTA'
import Footer from './components/Footer'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[200] origin-left"
      style={{ scaleX, background: 'linear-gradient(90deg, #C9A84C, #E2C46E)' }}
    />
  )
}

export default function App() {
  return (
    <div className="bg-warm-white overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Experience />
      <WhatsIncluded />
      <HowItWorks />
      <Pricing />
      <Gallery />
      <Testimonials />
      <BookingCTA />
      <Footer />
    </div>
  )
}
