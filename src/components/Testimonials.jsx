import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    quote:
      'I\'ve done a lot of "authentic experience" tours and they always feel staged. This was genuinely different. The mountains, the tea, the cooking battle. It felt like we were guests, not tourists. Best afternoon of our whole trip.',
    name: 'Emma R.',
    location: 'London, UK',
    initials: 'ER',
    color: '#C9A84C',
  },
  {
    quote:
      'We were a group of four who had already spent three days in the medina and were starting to feel a bit overwhelmed. The Beldi Detour gave us exactly what we needed: space, silence, and something to laugh about while cooking a tagine we barely won.',
    name: 'Thomas & Claire V.',
    location: 'Amsterdam, Netherlands',
    initials: 'TV',
    color: '#2D5016',
  },
  {
    quote:
      'The photos alone were worth it. But the meditation in the mountains at sunset, with no one else around. That\'s what I still think about. Book it. Just book it.',
    name: 'Sarah M.',
    location: 'New York, USA',
    initials: 'SM',
    color: '#6B3A2A',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-warm-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 55% 45% at 50% 50%, rgba(139,168,136,0.1) 0%, transparent 65%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-5"
          >
            From the Mountain
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-dark text-4xl md:text-5xl lg:text-[3rem]"
          >
            What people say
            <br />
            <em className="text-forest-green">when they get back.</em>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-dark/[0.03] border border-dark/8 rounded-2xl p-7 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label="5 stars">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} size={14} fill="#C9A84C" strokeWidth={0} className="text-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-dark/70 text-sm leading-relaxed flex-1">
                &ldquo;{r.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-dark/8">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-warm-white text-xs font-semibold"
                  style={{ backgroundColor: r.color }}
                  aria-hidden="true"
                >
                  {r.initials}
                </div>
                <div>
                  <p className="text-dark font-semibold text-sm">{r.name}</p>
                  <p className="text-dark/45 text-xs">{r.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center text-dark/35 text-xs mt-8 italic"
        >
          Placeholder testimonials. Replace with real guest reviews once collected.
        </motion.p>
      </div>
    </section>
  )
}
