import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const WHATSAPP = 'https://wa.me/212600000000'

export default function BookingCTA() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} id="book" className="relative overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: bgY,
          background: `
            radial-gradient(ellipse 70% 80% at 50% 100%, rgba(45,80,22,0.55) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 80% 20%, rgba(201,168,76,0.1) 0%, transparent 55%),
            linear-gradient(170deg, #1A120B 0%, #0D1A07 50%, #0A1505 100%)
          `,
        }}
      />
      {/* Mountain silhouette shape */}
      <div
        className="absolute inset-x-0 top-0 h-1/2 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(45,80,22,0.15) 0%, transparent 70%)`,
        }}
      />
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 py-24 md:py-36 text-center">
        <motion.p
          initial={{ opacity: 0, y: 6, filter: 'blur(3px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-6"
        >
          Ready When You Are
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-warm-white text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] mb-6 leading-[1.1]"
        >
          The mountains are waiting.
          <br />
          <em className="text-gold">Your story starts here.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8, filter: 'blur(3px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.45, delay: 0.125, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-warm-white/55 text-base md:text-lg max-w-xl mx-auto mb-12"
        >
          Message us on WhatsApp with your group size and preferred date.
          No forms. No waiting. Just a conversation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10, filter: 'blur(3px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.19, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gold text-dark font-bold text-base px-10 py-5 rounded-full hover:bg-gold-light transition-all duration-300 cursor-pointer shadow-2xl shadow-dark/40"
          >
            <WhatsAppIcon />
            Message Us on WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-warm-white/35 text-sm"
        >
          <span>1000 MAD · ~90€ per person</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>Private groups only</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>Setti Fatma, Ourika Valley</span>
        </motion.div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
