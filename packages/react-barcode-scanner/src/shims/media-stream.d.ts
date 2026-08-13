declare global {
  // standard MediaTrackConstraintSet not support torch
  // but some browser support torch, so we need expand it
  interface MediaTrackConstraintSet {
    torch?: boolean
  }

  interface MediaTrackCapabilities {
    torch?: boolean
  }
}

export {}
