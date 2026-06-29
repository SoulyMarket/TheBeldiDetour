import sharp from 'sharp'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

const dir = 'public/images'
const files = readdirSync(dir).filter(f => f.endsWith('.png'))

for (const file of files) {
  const src = join(dir, file)
  const dest = join(dir, file.replace('.png', '.webp'))
  const before = statSync(src).size
  await sharp(src).webp({ quality: 82, effort: 6 }).toFile(dest)
  const after = statSync(dest).size
  const pct = Math.round((1 - after / before) * 100)
  console.log(`${file} → webp  ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB  (-${pct}%)`)
}
