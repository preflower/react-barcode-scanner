import { useScannerStore } from '../context/barcode-scanner-context.js'

import { useAtom } from './use-atom.js'

export function useStreamState (): [MediaStream | undefined, (newState: MediaStream | undefined) => void] {
  const store = useScannerStore()
  const [stream] = useAtom(store.stream)

  return [stream, store.setStream]
}
