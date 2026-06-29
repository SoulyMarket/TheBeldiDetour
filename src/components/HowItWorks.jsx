import { motion } from 'framer-motion'
import { MessageCircle, MapPin, Mountain, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    num: '01',
    title: 'Book via WhatsApp',
    desc: 'Send us a message with your group size and preferred date. We confirm within a few hours. No forms, no waiting, no hassle.',
  },
  {
    icon: MapPin,
    num: '02',
    title: 'Meet in Marrakech',
    desc: 'We pick you up at an agreed point in the city. Settle in, relax, and watch the medina fade behind you as the mountains come into view.',
  },
  {
    icon: Mountain,
    num: '03',
    title: 'Into the Ourika Valley',
    desc: '90 minutes through one of Morocco\'s most beautiful valleys to Setti Fatma. The drive through the Atlas foothills is a journey in itself.',
  },
  {
    icon: Sparkles,
    num: '04',
    title: 'Live the Day',
    desc: 'A half-day in the mountains doing things you can\'t do anywhere else. Tea, tagine, traditions, meditation, and a stone to take home. Return by late afternoon.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="section-pad bg-warm-white relative">
      {/* Subtle bg accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 50% 40% at 100% 100%, rgba(45,80,22,0.06) 0%, transparent 65%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-5"
          >
            The Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-dark text-4xl md:text-5xl lg:text-[3rem]"
          >
            From your hotel to the
            <br />
            <em className="text-forest-green">heart of the Atlas.</em>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-9 left-[3.75rem] right-[3.75rem] h-px bg-sand" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.12,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="relative"
                >
                  {/* Step node */}
                  <div className="relative flex items-center gap-4 lg:block mb-5 lg:mb-6">
                    <div className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-2xl bg-warm-white border-2 border-sand flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon size={22} strokeWidth={1.5} className="text-forest-green" />
                    </div>
                    {/* Mobile step number */}
                    <span className="lg:hidden font-serif text-4xl font-semibold text-sand">
                      {step.num}
                    </span>
                  </div>

                  {/* Desktop step number */}
                  <p className="hidden lg:block font-serif text-4xl font-semibold text-sand mb-3">
                    {step.num}
                  </p>

                  <h3 className="font-serif text-dark text-xl mb-2.5">{step.title}</h3>
                  <p className="text-dark/60 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 md:mt-16 p-6 md:p-8 rounded-2xl bg-forest-green/6 border border-forest-green/10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="font-serif text-dark text-lg md:text-xl mb-1">
                Half-day experience · Morning or afternoon departure
              </p>
              <p className="text-dark/55 text-sm">
                Flexible timing to fit your Marrakech schedule. Back before dinner, every time.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-sage" />
              <span className="text-dark/60 text-sm font-medium">Private & small groups only</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
