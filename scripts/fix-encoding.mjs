import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

// When PowerShell 5.1 read UTF-8 files as Windows-1252 and wrote back as UTF-8,
// multi-byte sequences got double-encoded. Fix by re-interpreting as latin1 bytes.
const dir = 'src/components'
const files = readdirSync(dir).filter(f => f.endsWith('.jsx'))

for (const file of files) {
  const path = join(dir, file)
  const raw = readFileSync(path)
  // Decode as latin1 to get original byte values, then re-encode properly
  const latin1 = raw.toString('latin1')
  // Re-encode: interpret as if each char is a raw byte, get a Buffer, decode as utf8
  const fixed = Buffer.from(latin1, 'latin1').toString('utf8')
  // Only write if it changed (i.e. file was corrupted)
  if (fixed !== raw.toString('utf8')) {
    writeFileSync(path, fixed, 'utf8')
    console.log('Fixed:', file)
  } else {
    console.log('OK:   ', file)
  }
}
