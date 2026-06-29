import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const WHATSAPP = 'https://wa.me/212600000000'

const links = [
  { label: 'Experience', href: '#experience' },
  { label: "What's Included", href: '#included' },
  { label: 'How It Works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  const navBg = scrolled
    ? 'bg-warm-white/96 backdrop-blur-md shadow-sm shadow-dark/5'
    : 'bg-transparent'

  const textColor = scrolled ? 'text-dark' : 'text-warm-white'
  const mutedColor = scrolled ? 'text-dark/60 hover:text-dark' : 'text-warm-white/75 hover:text-warm-white'

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          aria-label="The Beldi Detour home"
          className={`font-serif font-semibold text-lg md:text-xl tracking-tight transition-colors duration-300 ${textColor}`}
        >
          The Beldi Detour
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${mutedColor}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-forest-green text-warm-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-forest-deep transition-all duration-200 cursor-pointer"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${textColor}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden bg-warm-white border-t border-sand/70 overflow-hidden"
          >
            <nav className="px-5 pt-4 pb-6 flex flex-col gap-1" aria-label="Mobile navigation">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className="text-dark/70 hover:text-dark text-base font-medium py-3 border-b border-sand/40 last:border-0 transition-colors cursor-pointer"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.3 }}
                className="mt-4 bg-forest-green text-warm-white font-semibold py-3.5 rounded-full text-center text-sm hover:bg-forest-deep transition-colors cursor-pointer"
              >
                Book Your Detour on WhatsApp
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
