---
"react-barcode-scanner": minor
---

Add an optional `BarcodeScannerProvider` for isolated multi-scanner stream and torch state while preserving the global single-scanner behavior. Reuse barcode detectors, serialize torch operations, make camera and stream cleanup race-safe, expose scanning and camera errors, repair the ESM and CommonJS package entries, and bundle the ESM-only barcode polyfill while preserving the zbar WASM runtime as an explicit downstream-bundler-compatible dependency.
