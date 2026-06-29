import { motion } from 'framer-motion'

const images = [
  {
    id: 'valley',
    src: '/images/valley.png',
    label: 'Lush green Ourika Valley with terraced Berber villages and mountain river',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    id: 'hero-atmosphere',
    src: '/images/hero.png',
    label: 'Atlas Mountains at golden hour with traditional Moroccan mint tea picnic',
    span: '',
  },
  {
    id: 'tagine-cooking',
    src: '/images/tagine.png',
    label: 'Hands preparing a traditional Moroccan tagine over an outdoor fire',
    span: '',
  },
  {
    id: 'amazigh-clothing',
    src: '/images/clothing.png',
    label: 'Tourists in traditional Amazigh Berber clothing against mountain backdrop',
    span: 'row-span-2',
  },
  {
    id: 'meditation',
    src: '/images/meditation.png',
    label: 'People sitting in meditation facing the Atlas Mountains at sunset',
    span: '',
  },
  {
    id: 'stone-painting',
    src: '/images/stone-painting.png',
    label: 'Close-up of hands painting geometric Berber patterns onto river stones',
    span: '',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-dark relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4"
          >
            The Detour in Pictures
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-warm-white text-4xl md:text-5xl lg:text-[3rem]"
          >
            No filters needed
            <br />
            <em className="text-sage">when the setting is real.</em>
          </motion.h2>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[260px] gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.09,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`relative rounded-2xl overflow-hidden group cursor-default ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-all duration-500" />
              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark/50 to-transparent" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center text-warm-white/35 text-sm mt-8"
        >
          Professional photos and video included in every booking. Yours to keep.
        </motion.p>
      </div>
    </section>
  )
}
