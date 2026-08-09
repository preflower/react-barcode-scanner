import { defineConfig } from 'vite-plus'

const bundledDependencies = [
  '@preflower/barcode-detector-polyfill'
]

export default defineConfig({
  pack: {
    entry: {
      index: 'src/index.ts',
      polyfill: 'src/polyfill.ts'
    },
    format: ['esm', 'cjs'],
    platform: 'browser',
    target: 'es2015',
    outDir: 'dist',
    clean: true,
    dts: true,
    fixedExtension: false,
    hash: false,
    deps: {
      alwaysBundle: bundledDependencies,
      onlyBundle: false,
      neverBundle: ['@undecaf/zbar-wasm', 'react', 'react-dom']
    }
  }
})
