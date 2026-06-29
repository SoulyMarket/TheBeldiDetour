import { motion } from 'framer-motion'
import { Coffee, Flame, Camera, Leaf, Palette } from 'lucide-react'

const activities = [
  {
    icon: Coffee,
    title: 'Mint Tea Ceremony',
    desc: 'Traditional Moroccan welcome in the heart of the mountains. Tea brewed on-site, poured high, shared in silence with the Atlas all around you.',
    color: '#C9A84C',
    bg: 'rgba(201,168,76,0.08)',
  },
  {
    icon: Flame,
    title: 'Tagine Cooking Battle',
    desc: 'Two teams. One fire. May the best cook win. Learn authentic Amazigh spice blends and cook a full tagine from scratch, then eat the spoils.',
    color: '#C4784B',
    bg: 'rgba(196,120,75,0.08)',
  },
  {
    icon: Camera,
    title: 'Amazigh Portraits',
    desc: 'Dress in traditional Berber attire and let the mountains be your backdrop. Professional photos and video included. Real content, not tourist snaps.',
    color: '#2D5016',
    bg: 'rgba(45,80,22,0.08)',
  },
  {
    icon: Leaf,
    title: 'Mountain Meditation',
    desc: 'Guided stillness facing the Atlas. No phones. No noise. Just the wind, the peaks, and your breath. You\'ll understand why people come back for this.',
    color: '#8BA888',
    bg: 'rgba(139,168,136,0.1)',
  },
  {
    icon: Palette,
    title: 'Stone Painting Souvenir',
    desc: 'Take a piece of the mountains home. Paint your own stone under the open sky. A handmade memory that\'s yours alone.',
    color: '#6B3A2A',
    bg: 'rgba(107,58,42,0.07)',
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function WhatsIncluded() {
  return (
    <section id="included" className="section-pad bg-dark relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 0% 100%, rgba(45,80,22,0.2) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 100% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)
          `,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-5"
          >
            Everything Included
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-warm-white text-4xl md:text-5xl lg:text-[3rem] mb-5"
          >
            Five experiences.
            <br />
            <em className="text-gold">One afternoon.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-warm-white/50 text-base md:text-lg max-w-xl mx-auto"
          >
            No hidden costs. No tourist traps. Just everything that makes the day worth talking about.
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {activities.map((act, i) => {
            const Icon = act.icon
            return (
              <motion.div
                key={act.title}
                variants={itemVariants}
                className={`relative rounded-2xl border border-warm-white/8 p-7 group hover:border-warm-white/15 transition-all duration-300 ${
                  i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ background: act.bg }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${act.color}18`, border: `1px solid ${act.color}30` }}
                >
                  <Icon size={22} strokeWidth={1.6} style={{ color: act.color }} />
                </div>
                <h3 className="font-serif text-warm-white text-xl mb-3">{act.title}</h3>
                <p className="text-warm-white/55 text-sm leading-relaxed">{act.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
