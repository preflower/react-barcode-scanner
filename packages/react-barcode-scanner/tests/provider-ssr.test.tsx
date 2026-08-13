import { renderToString } from 'react-dom/server'
import { describe, expect, it } from 'vite-plus/test'

import {
  BarcodeScannerProvider,
  globalScannerStore
} from '../src/context/barcode-scanner-context.js'
import { useTorch } from '../src/hooks/use-torch.js'

const TorchState = (): string => {
  const { isTorchOn } = useTorch()
  return isTorchOn ? 'on' : 'off'
}

describe('BarcodeScannerProvider SSR', () => {
  it('isolates the initial torch state for each Provider', () => {
    const html = renderToString(
      <>
        <BarcodeScannerProvider initialTorchOn>
          <span id="first"><TorchState /></span>
        </BarcodeScannerProvider>
        <BarcodeScannerProvider initialTorchOn={false}>
          <span id="second"><TorchState /></span>
        </BarcodeScannerProvider>
      </>
    )

    expect(html).toContain('<span id="first">on</span>')
    expect(html).toContain('<span id="second">off</span>')
  })

  it('does not write hook defaults into the global store during SSR', () => {
    expect(globalScannerStore.torchOn.get()).toBeUndefined()

    const html = renderToString(<TorchState />)

    expect(html).toBe('off')
    expect(globalScannerStore.torchOn.get()).toBeUndefined()
  })
})
