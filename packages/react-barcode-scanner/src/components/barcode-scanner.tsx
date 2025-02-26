import { type FunctionComponent, useEffect, useRef } from 'react'
import { useCamera, useScanning, type ScanOptions } from '../hooks'
import { type DetectedBarcode } from '../types'

interface ScannerProps extends React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> {
  options?: ScanOptions
  onCapture?: (barcodes: DetectedBarcode[]) => void
  trackConstraints?: MediaTrackConstraints;
  paused?: boolean;
}

const BarcodeScanner: FunctionComponent<ScannerProps> = ({
  options,
  onCapture,
  trackConstraints,
  paused = false,
  ...props
}) => {
  const instance = useRef<HTMLVideoElement>(null)
  const [isCameraSupport] = useCamera(instance, trackConstraints)
  const [detected, open, close] = useScanning(instance, options)

  useEffect(() => {
    if (isCameraSupport && !paused) {
      open()
    } else {
      close()
    }
  }, [close, isCameraSupport, open, paused])

  useEffect(() => {
    if (detected !== undefined) {
      onCapture?.(detected)
    }
  }, [detected, onCapture])

  useEffect(() => {
    const video = instance.current
    if (!video) return
    if (isCameraSupport && !paused) {
      video.play().catch(console.error)
    } else {
      video.pause()
    }
  }, [paused, isCameraSupport])

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
