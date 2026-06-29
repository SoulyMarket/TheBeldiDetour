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

export default function App() {
  return (
    <div className="bg-warm-white overflow-x-hidden">
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
