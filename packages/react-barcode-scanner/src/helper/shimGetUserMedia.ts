import { shimGetUserMedia as chromeShim } from 'webrtc-adapter/src/js/chrome/getusermedia'
import { shimGetUserMedia as edgeShim } from 'webrtc-adapter/src/js/edge/getusermedia'
import { shimGetUserMedia as firefoxShim } from 'webrtc-adapter/src/js/firefox/getusermedia'
import { shimGetUserMedia as safariShim } from 'webrtc-adapter/src/js/safari/safari_shim'
import { detectBrowser } from 'webrtc-adapter/src/js/utils'

import { idempotent } from '@preflower/utils'

export default idempotent(() => {
  const { browser } = detectBrowser(window)

  switch (browser) {
    case 'chrome':
      chromeShim(window)
      break
    case 'firefox':
      firefoxShim(window)
      break
    case 'edge':
      edgeShim(window)
      break
    case 'safari':
      safariShim(window)
      break
    default:
      throw new Error('[react-barcode-scanner]: MediaStream is not supported')
  }
})
