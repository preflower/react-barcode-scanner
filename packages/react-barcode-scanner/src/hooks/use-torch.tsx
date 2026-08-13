import { useEffect, useRef } from 'react'

import { useScannerStore } from '../context/barcode-scanner-context.js'

import { useAtom } from './use-atom.js'

/**
 * Control torch of camera
 * @param {boolean} defaultTorchOn Whether torch is on by default
 * @returns {object} { isTorchSupported, isTorchOn, setIsTorchOn }
 *   - isTorchSupported: Whether device supports torch
 *   - error: Error object
 *   - isTorchOn: Whether torch is on
 *   - setIsTorchOn: Set boolean state of torch
 *
 * @example
 * import React from 'react'
 * import { useTorch } from 'react-barcode-scanner'
 *
 * export default () => {
 *   const { isTorchSupported, error, isTorchOn, setIsTorchOn } = useTorch()
 *
 *   if (error) {
 *     return <p>{error.message}</p>
 *   }
 *
 *   return (
 *     <div style={{ width: '100%', height: '360px' }}>
 *       <button onClick={() => setIsTorchOn(!isTorchOn)}>Switch Torch</button>
 *     </div>
 *   )
 * }
 */
export function useTorch (defaultTorchOn = false): {
  isTorchSupported: boolean,
  error: Error | undefined,
  isTorchOn: boolean,
  setIsTorchOn: (torch: boolean) => void
  } {
  const store = useScannerStore()
  const defaultTorchOnRef = useRef(defaultTorchOn)
  const [storedTorchOn] = useAtom(store.torchOn)
  const [storedTorchSupported] = useAtom(store.torchSupported, false)
  const [error] = useAtom(store.torchError)

  useEffect(() => {
    store.initializeTorch(defaultTorchOnRef.current)
  }, [store])

  return {
    isTorchSupported: storedTorchSupported ?? false,
    error,
    isTorchOn: storedTorchOn ?? defaultTorchOnRef.current,
    setIsTorchOn: store.setTorchOn
  }
}
