import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

const dir = 'src/components'
const files = readdirSync(dir).filter(f => f.endsWith('.jsx'))

for (const file of files) {
  const path = join(dir, file)
  let src = readFileSync(path, 'utf8')

  // Halve numeric values in duration: and transition delay: properties
  src = src.replace(/\bduration:\s*([\d.]+)/g, (_, n) => `duration: ${+(+n * 0.5).toFixed(3)}`)
  src = src.replace(/\bdelay:\s*([\d.]+)/g,    (_, n) => `delay: ${+(+n * 0.5).toFixed(3)}`)

  // Halve staggerChildren and delayChildren
  src = src.replace(/\bstaggerChildren:\s*([\d.]+)/g, (_, n) => `staggerChildren: ${+(+n * 0.5).toFixed(3)}`)
  src = src.replace(/\bdelayChildren:\s*([\d.]+)/g,   (_, n) => `delayChildren: ${+(+n * 0.5).toFixed(3)}`)

  // Halve blur filter values  e.g. blur(8px) → blur(4px)
  src = src.replace(/blur\(([\d.]+)px\)/g, (_, n) => `blur(${+(+n * 0.5).toFixed(1)}px)`)

  // Halve translate-y initial values   e.g. y: 32  (but NOT y: 0 or negative)
  src = src.replace(/\by:\s*([1-9][\d.]*)/g, (_, n) => `y: ${+(+n * 0.5).toFixed(1)}`)

  writeFileSync(path, src, 'utf8')
  console.log('Updated:', file)
}
