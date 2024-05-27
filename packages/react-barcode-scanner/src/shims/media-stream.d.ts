declare global {
  // standard MediaTrackConstraintSet not support torch
  // but some browser support torch, so we need expand it
  interface MediaTrackConstraintSet {
    torch?: boolean
  }

  interface MediaTrackCapabilities {
    torch?: boolean
  }

  // Firefox need use `moz` prefix before v58
  // reference: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject#browser_compatibility
  interface HTMLVideoElement {
    mozSrcObject?: MediaStream
  }
}

export {}
