import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const WHATSAPP = 'https://wa.me/212771674839'

const included = [
  'Round-trip transfer from Marrakech',
  'Full mint tea ceremony in the mountains',
  'Tagine cooking competition (ingredients & fire)',
  'Traditional Amazigh clothing for photos',
  'Professional photos & video of the day',
  'Guided mountain meditation',
  'Stone painting activity & souvenir to keep',
  'All entrance fees and logistics',
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad bg-warm-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 0% 100%, rgba(45,80,22,0.07) 0%, transparent 60%)
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 6, filter: 'blur(3px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-5"
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-dark text-4xl md:text-5xl lg:text-[3rem]"
          >
            Simple. Fair.
            <br />
            <em className="text-forest-green">Worth every dirham.</em>
          </motion.h2>
        </div>

        {/* Pricing card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative rounded-3xl overflow-hidden grain"
            style={{
              background: `linear-gradient(145deg, #1D3810 0%, #2D5016 45%, #1A120B 100%)`,
              boxShadow: '0 40px 80px rgba(26,18,11,0.25), 0 0 0 1px rgba(201,168,76,0.12)',
            }}
          >
            {/* Top band */}
            <div className="px-8 md:px-12 pt-10 pb-8 border-b border-warm-white/8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div>
                  <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                    Per Person · All Inclusive
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-warm-white text-6xl md:text-7xl font-semibold">
                      1000
                    </span>
                    <span className="text-warm-white/60 text-xl font-light">MAD</span>
                  </div>
                  <p className="text-warm-white/45 text-base mt-1">≈ 90€ · $100 USD</p>
                </div>

                <div className="sm:text-right">
                  <div className="inline-block bg-warm-white/10 border border-warm-white/15 rounded-xl px-5 py-3">
                    <p className="text-warm-white text-sm font-medium">Private group</p>
                    <p className="text-warm-white/50 text-xs mt-0.5">Minimum 2 people</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Included list */}
            <div className="px-8 md:px-12 py-8">
              <p className="text-warm-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                Everything that's included
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {included.map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} strokeWidth={2.5} className="text-gold" />
                    </div>
                    <span className="text-warm-white/70 text-sm leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="px-8 md:px-12 pb-10">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full bg-gold text-dark font-semibold text-base py-4 rounded-2xl hover:bg-gold-light transition-all duration-300 cursor-pointer shadow-lg shadow-dark/30"
              >
                <WhatsAppIcon />
                Reserve Your Spot
              </a>
              <p className="text-center text-warm-white/35 text-xs mt-4">
                Message us to check availability. We'll confirm within hours.
              </p>
            </div>
          </motion.div>

          {/* Below card note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="text-center text-dark/45 text-sm mt-8"
          >
            No upfront payment required to reserve. Settled on the day.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
