import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] },
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-warm-white relative overflow-hidden">
      {/* Decorative background element */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 100% 50%, rgba(139,168,136,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image placeholder */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] grain">
              <img
                src="/images/clothing.png"
                alt="Tourists wearing traditional Amazigh Berber clothing in the Atlas Mountains"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-rich-brown text-warm-white rounded-2xl px-6 py-5 shadow-2xl shadow-dark/20"
            >
              <p className="font-serif text-3xl font-semibold leading-none">90</p>
              <p className="text-warm-white/70 text-xs mt-1 tracking-wide">min from</p>
              <p className="text-warm-white/70 text-xs tracking-wide">Marrakech</p>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2 space-y-6">
            <motion.p {...fadeUp} className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
              Why The Beldi Detour
            </motion.p>

            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-serif text-dark text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.1]"
            >
              This isn't your next tour.
              <br />
              <em className="text-forest-green">It's the story you actually tell.</em>
            </motion.h2>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5 text-dark/70 leading-relaxed text-base md:text-[1.05rem]"
            >
              <p>
                Every tourist visits the medina. Every tourist takes a camel photo. Every tourist
                comes back from Marrakech with the same stories.
              </p>
              <p>
                The Beldi Detour was built for the traveller who wants more. We take you to a
                natural plane in the heart of the Atlas Mountains, a place that isn't on TripAdvisor,
                isn't overrun with vendors, and isn't trying to be anything other than what it is.
              </p>
              <p>
                This is where the mountains are quiet, the mint is fresh from the ground, and the
                tagine is yours to earn through a bit of friendly competition.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-4 grid grid-cols-2 gap-5"
            >
              {[
                { num: '5+', label: 'Unique activities in one afternoon' },
                { num: '100%', label: 'Off the beaten tourist path' },
              ].map(stat => (
                <div key={stat.label} className="border-l-2 border-gold pl-4">
                  <p className="font-serif text-3xl font-semibold text-dark">{stat.num}</p>
                  <p className="text-dark/55 text-sm mt-1 leading-snug">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
