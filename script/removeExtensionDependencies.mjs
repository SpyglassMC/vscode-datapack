#!/usr/bin/env node

import fs from 'fs/promises'

const manifestUrl = new URL('../package.json', import.meta.url)
const manifest = JSON.parse(await fs.readFile(manifestUrl, 'utf8'))
delete manifest.extensionDependencies
await fs.writeFile(manifestUrl, JSON.stringify(manifest, undefined, 4) + '\n', 'utf8')
