import { type FunctionComponent, useEffect, useRef } from 'react'

import { useCamera, useScanning, type ScanOptions } from '../hooks/index.js'
import { type DetectedBarcode } from '../types.js'

export interface ScannerProps extends React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> {
  options?: ScanOptions
  onCapture?: (barcodes: DetectedBarcode[]) => void
  onCameraError?: (error: Error) => void
  onScanError?: (error: Error) => void
  trackConstraints?: MediaTrackConstraints;
  paused?: boolean;
}

const BarcodeScanner: FunctionComponent<ScannerProps> = ({
  options,
  onCapture,
  onCameraError,
  onScanError,
  trackConstraints,
  paused = false,
  ...props
}) => {
  const instance = useRef<HTMLVideoElement>(null)
  const { isCameraReady, error: cameraError } = useCamera(instance, trackConstraints)
  const {
    detectedBarcodes,
    error: scanError,
    startScan,
    stopScan
  } = useScanning(instance, options)

  useEffect(() => {
    if (isCameraReady && !paused) {
      startScan()
    } else {
      stopScan()
    }
  }, [stopScan, isCameraReady, startScan, paused])

  useEffect(() => {
    if (detectedBarcodes !== undefined) {
      onCapture?.(detectedBarcodes)
    }
  }, [detectedBarcodes, onCapture])

  useEffect(() => {
    if (cameraError !== undefined) {
      onCameraError?.(cameraError)
    }
  }, [cameraError, onCameraError])

  useEffect(() => {
    if (scanError !== undefined) {
      onScanError?.(scanError)
    }
  }, [onScanError, scanError])

  useEffect(() => {
    const video = instance.current
    if (!video) return
    if (isCameraReady && !paused) {
      video.play().catch(console.error)
    } else {
      video.pause()
    }
  }, [paused, isCameraReady])

  return (
    <video
      ref={instance}
      /**
       * `object-fit: cover` will automatically fill the entire video,
       * if the aspect ratio not match with camera,
       * it will cause enlargement screen, so user need consider it
       */
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      autoPlay
      muted
      /**
       * set video play in element to fix iOS black screen error
       */
      playsInline
      {...props}
    />
  )
}

export default BarcodeScanner
