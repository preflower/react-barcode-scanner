'use client'

import { useCallback, useMemo, useState } from 'react'
import {
  BarcodeScanner,
  BarcodeScannerProvider,
  useStreamState,
  useTorch
} from 'react-barcode-scanner'
import 'react-barcode-scanner/polyfill'

const COPY = {
  'en-US': {
    note: 'Each card owns a separate BarcodeScannerProvider. Some browsers or devices cannot open the same physical camera twice; an error in only one card still demonstrates that the scopes are isolated.',
    scanner: 'Scanner',
    resetScope: 'Reset Provider scope',
    format: 'Format',
    qrCode: 'QR code',
    code128: 'Code 128',
    both: 'QR code + Code 128',
    pause: 'Pause',
    resume: 'Resume',
    unmount: 'Unmount scanner',
    mount: 'Mount scanner',
    retry: 'Retry camera',
    torchOn: 'Turn torch off',
    torchOff: 'Turn torch on',
    diagnostics: 'Instance diagnostics',
    provider: 'Provider scope',
    streamId: 'Stream ID',
    track: 'Video track',
    trackState: 'Track state',
    scannerState: 'Scanner state',
    torchSupport: 'Torch supported',
    torchState: 'Torch requested',
    mounted: 'mounted',
    unmounted: 'unmounted',
    waiting: 'waiting for camera',
    ready: 'ready',
    paused: 'paused',
    unavailable: 'camera unavailable',
    yes: 'yes',
    no: 'no',
    on: 'on',
    off: 'off',
    none: 'none',
    cameraError: 'Camera error',
    scanError: 'Scanning error',
    torchError: 'Torch error',
    result: 'Latest detected values',
    empty: 'No barcode detected in this scope.',
    clear: 'Clear',
    resetHelp: 'Resetting this scope unmounts its Provider and creates a fresh store. The other scanner must remain unchanged.'
  },
  'zh-CN': {
    note: '每张卡片分别拥有独立的 BarcodeScannerProvider。部分浏览器或设备无法同时打开同一个物理相机；如果只有其中一张卡片报错，也能验证两个作用域相互隔离。',
    scanner: '扫码器',
    resetScope: '重置 Provider 作用域',
    format: '条码格式',
    qrCode: '二维码',
    code128: 'Code 128',
    both: '二维码 + Code 128',
    pause: '暂停',
    resume: '继续',
    unmount: '卸载扫码器',
    mount: '挂载扫码器',
    retry: '重试相机',
    torchOn: '关闭闪光灯',
    torchOff: '打开闪光灯',
    diagnostics: '实例诊断信息',
    provider: 'Provider 作用域',
    streamId: '媒体流 ID',
    track: '视频轨道',
    trackState: '轨道状态',
    scannerState: '扫码器状态',
    torchSupport: '支持闪光灯',
    torchState: '闪光灯请求状态',
    mounted: '已挂载',
    unmounted: '已卸载',
    waiting: '正在等待相机',
    ready: '已就绪',
    paused: '已暂停',
    unavailable: '相机不可用',
    yes: '是',
    no: '否',
    on: '开启',
    off: '关闭',
    none: '无',
    cameraError: '相机错误',
    scanError: '扫码错误',
    torchError: '闪光灯错误',
    result: '最近识别结果',
    empty: '当前作用域尚未识别到条码。',
    clear: '清空',
    resetHelp: '重置会卸载当前 Provider 并创建全新的 store，另一个扫码器的状态不应发生变化。'
  }
}

const buttonStyle = {
  border: '1px solid rgba(148, 163, 184, 0.45)',
  borderRadius: '8px',
  padding: '7px 10px',
  fontWeight: 600,
  cursor: 'pointer'
}

const diagnosticStyle = {
  display: 'grid',
  gridTemplateColumns: 'minmax(120px, auto) minmax(0, 1fr)',
  gap: '6px 12px',
  margin: 0,
  fontSize: '14px'
}

function DiagnosticRow ({ label, children }) {
  return (
    <>
      <dt style={{ color: '#64748b' }}>{label}</dt>
      <dd style={{ margin: 0, minWidth: 0, overflowWrap: 'anywhere' }}>{children}</dd>
    </>
  )
}

function ScannerInstance ({ instanceName, copy }) {
  const [stream] = useStreamState()
  const {
    isTorchSupported,
    error: torchError,
    isTorchOn,
    setIsTorchOn
  } = useTorch()
  const [isMounted, setIsMounted] = useState(true)
  const [paused, setPaused] = useState(false)
  const [format, setFormat] = useState('qr_code')
  const [cameraError, setCameraError] = useState()
  const [scanError, setScanError] = useState()
  const [results, setResults] = useState([])
  const [scannerKey, setScannerKey] = useState(0)

  const options = useMemo(() => ({
    delay: 500,
    formats: format === 'both' ? ['qr_code', 'code_128'] : [format]
  }), [format])
  const videoTrack = stream?.getVideoTracks()[0]

  const onCapture = useCallback((barcodes) => {
    if (barcodes.length === 0) return
    setScanError(undefined)
    setResults(barcodes.map(barcode => barcode.rawValue))
  }, [])

  const toggleMount = () => {
    setCameraError(undefined)
    setScanError(undefined)
    setIsMounted(current => !current)
  }

  const retryCamera = () => {
    setCameraError(undefined)
    setScanError(undefined)
    setIsMounted(true)
    setScannerKey(current => current + 1)
  }

  const scannerState = !isMounted
    ? copy.unmounted
    : cameraError != null
      ? copy.unavailable
      : paused
        ? copy.paused
        : stream != null
          ? copy.ready
          : copy.waiting

  return (
    <div style={{ display: 'grid', gap: '14px' }}>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
        <label htmlFor={`${instanceName}-format`} style={{ fontWeight: 600 }}>{copy.format}</label>
        <select
          id={`${instanceName}-format`}
          value={format}
          onChange={(event) => setFormat(event.target.value)}
          style={{ border: '1px solid rgba(148, 163, 184, 0.45)', borderRadius: '8px', padding: '7px 9px' }}
        >
          <option value="qr_code">{copy.qrCode}</option>
          <option value="code_128">{copy.code128}</option>
          <option value="both">{copy.both}</option>
        </select>
        <button
          type="button"
          disabled={!isMounted}
          style={buttonStyle}
          onClick={() => setPaused(current => !current)}
        >
          {paused ? copy.resume : copy.pause}
        </button>
        <button type="button" style={buttonStyle} onClick={toggleMount}>
          {isMounted ? copy.unmount : copy.mount}
        </button>
      </div>

      <div
        style={{
          position: 'relative',
          minHeight: '220px',
          aspectRatio: '4 / 3',
          overflow: 'hidden',
          borderRadius: '12px',
          background: '#0f172a'
        }}
      >
        {isMounted && (
          <BarcodeScanner
            key={scannerKey}
            onCapture={onCapture}
            onCameraError={setCameraError}
            onScanError={setScanError}
            options={options}
            paused={paused}
          />
        )}

        <div
          aria-live="polite"
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            padding: '5px 9px',
            borderRadius: '999px',
            color: '#fff',
            background: cameraError != null ? 'rgba(185, 28, 28, 0.9)' : 'rgba(15, 23, 42, 0.8)',
            fontSize: '13px',
            fontWeight: 600
          }}
        >
          {scannerState}
        </div>

        {!isMounted && (
          <div style={{ position: 'absolute', inset: 0, display: 'grid', placeContent: 'center', color: '#cbd5e1' }}>
            {copy.unmounted}
          </div>
        )}

        {cameraError != null && (
          <div
            role="alert"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'grid',
              placeContent: 'center',
              gap: '10px',
              padding: '20px',
              color: '#fff',
              textAlign: 'center',
              background: 'rgba(15, 23, 42, 0.9)'
            }}
          >
            <strong>{copy.cameraError}</strong>
            <span>{cameraError.message}</span>
            <button
              type="button"
              style={{ ...buttonStyle, justifySelf: 'center', color: '#0f172a', background: '#fff' }}
              onClick={retryCamera}
            >
              {copy.retry}
            </button>
          </div>
        )}
      </div>

      <button
        type="button"
        disabled={!isMounted || !isTorchSupported}
        style={buttonStyle}
        onClick={() => setIsTorchOn(!isTorchOn)}
      >
        {isTorchOn ? copy.torchOn : copy.torchOff}
      </button>

      <section aria-label={copy.diagnostics}>
        <h3 style={{ marginTop: 0 }}>{copy.diagnostics}</h3>
        <dl style={diagnosticStyle}>
          <DiagnosticRow label={copy.provider}><code>{instanceName}</code></DiagnosticRow>
          <DiagnosticRow label={copy.streamId}><code>{stream?.id ?? copy.none}</code></DiagnosticRow>
          <DiagnosticRow label={copy.track}>{videoTrack?.label || copy.none}</DiagnosticRow>
          <DiagnosticRow label={copy.trackState}><code>{videoTrack?.readyState ?? copy.none}</code></DiagnosticRow>
          <DiagnosticRow label={copy.scannerState}>{scannerState}</DiagnosticRow>
          <DiagnosticRow label={copy.torchSupport}>{isTorchSupported ? copy.yes : copy.no}</DiagnosticRow>
          <DiagnosticRow label={copy.torchState}>{isTorchOn ? copy.on : copy.off}</DiagnosticRow>
        </dl>
      </section>

      {[cameraError, scanError, torchError].map((error, index) => {
        if (error == null) return null
        const labels = [copy.cameraError, copy.scanError, copy.torchError]
        return (
          <p key={labels[index]} role="alert" style={{ margin: 0, color: '#dc2626' }}>
            <strong>{labels[index]}:</strong> {error.message}
          </p>
        )
      })}

      <section aria-label={copy.result}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
          <h3 style={{ margin: 0 }}>{copy.result}</h3>
          {results.length > 0 && (
            <button type="button" style={buttonStyle} onClick={() => setResults([])}>{copy.clear}</button>
          )}
        </div>
        {results.length > 0
          ? (
            <ul aria-live="polite" style={{ marginBottom: 0 }}>
              {results.map((result, index) => (
                <li key={`${result}-${index}`}><code>{result || '(empty)'}</code></li>
              ))}
            </ul>
            )
          : <p aria-live="polite" style={{ marginBottom: 0, color: '#64748b' }}>{copy.empty}</p>}
      </section>
    </div>
  )
}

function IsolatedScanner ({ name, copy, accent }) {
  const [scopeKey, setScopeKey] = useState(0)

  return (
    <article
      style={{
        display: 'grid',
        alignContent: 'start',
        gap: '14px',
        minWidth: 0,
        padding: '16px',
        border: `2px solid ${accent}`,
        borderRadius: '14px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
        <h2 style={{ margin: 0 }}>{copy.scanner} {name}</h2>
        <button type="button" style={buttonStyle} onClick={() => setScopeKey(current => current + 1)}>
          {copy.resetScope}
        </button>
      </div>
      <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>{copy.resetHelp}</p>
      <BarcodeScannerProvider key={scopeKey}>
        <ScannerInstance instanceName={`scanner-${name.toLowerCase()}`} copy={copy} />
      </BarcodeScannerProvider>
    </article>
  )
}

export default function MultipleScannersDemo ({ locale = 'en-US' }) {
  const copy = COPY[locale] ?? COPY['en-US']

  return (
    <div style={{ display: 'grid', gap: '18px' }}>
      <p
        role="note"
        style={{ margin: 0, padding: '14px 16px', borderRadius: '10px', color: '#854d0e', background: '#fef9c3' }}
      >
        {copy.note}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '18px' }}>
        <IsolatedScanner name="A" copy={copy} accent="#2563eb" />
        <IsolatedScanner name="B" copy={copy} accent="#7c3aed" />
      </div>
    </div>
  )
}
