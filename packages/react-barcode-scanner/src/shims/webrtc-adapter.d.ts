declare module 'webrtc-adapter/src/js/utils' {
  interface detectBrowserResult {
    browser: string | null
    version: string | null
  }

  function detectBrowser (window: Window): detectBrowserResult
}

declare module 'webrtc-adapter/src/js/chrome/getusermedia'
declare module 'webrtc-adapter/src/js/edge/getusermedia'
declare module 'webrtc-adapter/src/js/firefox/getusermedia'
declare module 'webrtc-adapter/src/js/safari/safari_shim' {
  function shimGetUserMedia (window: Window): void
}
