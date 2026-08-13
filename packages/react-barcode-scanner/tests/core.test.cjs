'use strict'

const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')
const { pathToFileURL } = require('node:url')

const packageDirectory = path.resolve(__dirname, '..')

test('CommonJS package entry loads', () => {
  const library = require('../dist/index.cjs')
  assert.equal(typeof library.BarcodeScanner, 'function')
  assert.equal(typeof library.BarcodeScannerProvider, 'function')
  assert.equal(typeof library.useScanning, 'function')
})

test('build generates both module formats and declarations', () => {
  for (const file of [
    'index.js',
    'index.cjs',
    'index.d.ts',
    'index.d.cts',
    'polyfill.js',
    'polyfill.cjs',
    'polyfill.d.ts',
    'polyfill.d.cts'
  ]) {
    assert.equal(fs.existsSync(path.join(packageDirectory, 'dist', file)), true, file)
  }
})

test('ES module package entry loads as ESM', async () => {
  const entryUrl = pathToFileURL(path.join(packageDirectory, 'dist/index.js')).href
  const library = await import(entryUrl)
  assert.equal(typeof library.BarcodeScanner, 'function')
  assert.equal(typeof library.BarcodeScannerProvider, 'function')
  assert.equal(typeof library.useScanning, 'function')
})

test('CommonJS polyfill entry loads the ESM-only upstream package', async () => {
  const originalWindow = globalThis.window
  const originalDetector = globalThis.BarcodeDetector

  try {
    globalThis.window = globalThis
    delete globalThis.BarcodeDetector

    const { barcodeDetectorPolyfillReady } = require('../dist/polyfill.cjs')
    await barcodeDetectorPolyfillReady

    assert.equal(typeof globalThis.BarcodeDetector, 'function')
  } finally {
    if (originalWindow === undefined) {
      delete globalThis.window
    } else {
      globalThis.window = originalWindow
    }

    if (originalDetector === undefined) {
      delete globalThis.BarcodeDetector
    } else {
      globalThis.BarcodeDetector = originalDetector
    }
  }
})
