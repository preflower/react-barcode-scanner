import { createContext, type ReactNode, useContext, useRef } from 'react'

import { createScannerStore, type ScannerStore } from '../state/scanner-store.js'

const BarcodeScannerContext = createContext<ScannerStore | null>(null)

export const globalScannerStore = createScannerStore()

export interface BarcodeScannerProviderProps {
  initialTorchOn?: boolean
  children: ReactNode
}

export function BarcodeScannerProvider ({
  initialTorchOn = false,
  children
}: BarcodeScannerProviderProps): ReactNode {
  const storeRef = useRef<ScannerStore | null>(null)
  storeRef.current ??= createScannerStore(initialTorchOn)

  return (
    <BarcodeScannerContext.Provider value={storeRef.current}>
      {children}
    </BarcodeScannerContext.Provider>
  )
}

export function useScannerStore (): ScannerStore {
  return useContext(BarcodeScannerContext) ?? globalScannerStore
}
