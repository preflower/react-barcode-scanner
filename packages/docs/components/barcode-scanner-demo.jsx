import { useCallback, useMemo, useState } from 'react'
import {
  BarcodeScanner,
  BarcodeScannerProvider,
  useStreamState,
  useTorch
} from 'react-barcode-scanner'
import 'react-barcode-scanner/polyfill'

const FORMATS = [
  'code_128',
  'code_39',
  'code_93',
  'codabar',
  'ean_13',
  'ean_8',
  'itf',
  'qr_code',
  'upc_a',
  'upc_e'
]

const COPY = {
  'en-US': {
    settings: 'Settings',
    delay: 'Scan interval',
    delayUnit: 'ms',
    formats: 'Barcode formats',
    formatsEmpty: 'Select at least one format to start scanning.',
    pause: 'Pause',
    resume: 'Resume',
    retry: 'Retry camera',
    torchOn: 'Turn torch off',
    torchOff: 'Turn torch on',
    requesting: 'Waiting for camera permission…',
    ready: 'Camera ready',
    paused: 'Scanning paused',
    cameraError: 'Camera unavailable',
    cameraHelp: 'Camera access requires HTTPS or localhost. Check browser permission, device availability and whether another app is using the camera.',
    scanError: 'Scanning error',
    torchError: 'Torch error',
    results: 'Latest result',
    clear: 'Clear result',
    empty: 'Point the camera at a supported barcode. Detected values will appear here.',
    emptyValue: '(empty value)'
  },
  'zh-CN': {
    settings: '设置',
    delay: '扫码间隔',
    delayUnit: '毫秒',
    formats: '条码格式',
    formatsEmpty: '请至少选择一种条码格式后再开始扫描。',
    pause: '暂停',
    resume: '继续',
    retry: '重试相机',
    torchOn: '关闭闪光灯',
    torchOff: '打开闪光灯',
    requesting: '正在等待相机权限…',
    ready: '相机已就绪',
    paused: '扫描已暂停',
    cameraError: '相机不可用',
    cameraHelp: '相机需要 HTTPS 或 localhost。请检查浏览器权限、设备是否可用，以及相机是否被其他应用占用。',
    scanError: '扫码错误',
    torchError: '闪光灯错误',
    results: '最近一次结果',
    clear: '清空结果',
    empty: '请将摄像头对准支持的条码，识别结果会显示在这里。',
    emptyValue: '（空内容）'
  }
}

const buttonStyle = {
  border: '1px solid rgba(148, 163, 184, 0.45)',
  borderRadius: '8px',
  padding: '8px 12px',
  fontWeight: 600,
  cursor: 'pointer'
}

function FormatSelector ({ selected, onChange, copy }) {
  const toggleFormat = (format) => {
    onChange(selected.includes(format)
      ? selected.filter(selectedFormat => selectedFormat !== format)
      : [...selected, format])
  }

  return (
    <fieldset style={{ border: 0, margin: 0, padding: 0 }}>
      <legend style={{ fontWeight: 600, marginBottom: '10px' }}>{copy.formats}</legend>
      <div style={{ display: 'flex', gap: '8px 12px', flexWrap: 'wrap' }}>
        {FORMATS.map(format => (
          <label
            key={format}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
          >
            <input
              type="checkbox"
              checked={selected.includes(format)}
              onChange={() => toggleFormat(format)}
            />
            <code>{format}</code>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function ScannerDemoContent ({ copy }) {
  const [stream] = useStreamState()
  const {
    isTorchSupported,
    error: torchError,
    isTorchOn,
    setIsTorchOn
  } = useTorch()
  const [formats, setFormats] = useState(['qr_code'])
  const [delay, setDelay] = useState(500)
  const [paused, setPaused] = useState(false)
  const [cameraError, setCameraError] = useState()
  const [scanError, setScanError] = useState()
  const [results, setResults] = useState([])
  const [scannerKey, setScannerKey] = useState(0)

  const options = useMemo(() => ({ delay, formats }), [delay, formats])

  const onCapture = useCallback((barcodes) => {
    if (barcodes.length === 0) return
    setScanError(undefined)
    setResults(barcodes.map(barcode => barcode.rawValue))
  }, [])

  const retryCamera = () => {
    setCameraError(undefined)
    setScanError(undefined)
    setScannerKey(currentKey => currentKey + 1)
  }

  const updateFormats = (nextFormats) => {
    setFormats(nextFormats)
    setScanError(undefined)
  }

  const status = cameraError != null
    ? copy.cameraError
    : paused
      ? copy.paused
      : stream != null
        ? copy.ready
        : copy.requesting

  return (
    <div style={{ display: 'grid', gap: '24px' }}>
      <section
        aria-labelledby="scanner-demo-settings"
        style={{
          display: 'grid',
          gap: '18px',
          padding: '18px',
          border: '1px solid rgba(148, 163, 184, 0.28)',
          borderRadius: '12px'
        }}
      >
        <h2 id="scanner-demo-settings" style={{ margin: 0 }}>{copy.settings}</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <label htmlFor="scanner-demo-delay" style={{ fontWeight: 600 }}>{copy.delay}</label>
          <input
            id="scanner-demo-delay"
            type="number"
            min="0"
            step="100"
            value={delay}
            onChange={(event) => setDelay(Math.max(0, Number(event.target.value) || 0))}
            style={{ width: '110px', border: '1px solid rgba(148, 163, 184, 0.45)', borderRadius: '8px', padding: '7px 9px' }}
          />
          <span>{copy.delayUnit}</span>
          <button type="button" style={buttonStyle} onClick={() => setPaused(current => !current)}>
            {paused ? copy.resume : copy.pause}
          </button>
        </div>
        <FormatSelector selected={formats} onChange={updateFormats} copy={copy} />
        {formats.length === 0 && (
          <p role="status" style={{ margin: 0, color: '#b45309' }}>{copy.formatsEmpty}</p>
        )}
      </section>

      <section aria-label={copy.results} style={{ display: 'grid', gap: '12px' }}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            minHeight: '280px',
            aspectRatio: '4 / 3',
            overflow: 'hidden',
            borderRadius: '14px',
            background: '#0f172a'
          }}
        >
          <BarcodeScanner
            key={scannerKey}
            onCapture={onCapture}
            onCameraError={setCameraError}
            onScanError={setScanError}
            options={options}
            paused={paused || formats.length === 0}
          />

          <div
            aria-live="polite"
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              padding: '6px 10px',
              borderRadius: '999px',
              color: '#fff',
              background: cameraError != null ? 'rgba(185, 28, 28, 0.9)' : 'rgba(15, 23, 42, 0.78)',
              fontSize: '14px',
              fontWeight: 600
            }}
          >
            {status}
          </div>

          {isTorchSupported && cameraError == null && (
            <button
              type="button"
              style={{ ...buttonStyle, position: 'absolute', top: '12px', right: '12px', color: '#fff', background: 'rgba(15, 23, 42, 0.78)' }}
              onClick={() => setIsTorchOn(!isTorchOn)}
            >
              {isTorchOn ? copy.torchOn : copy.torchOff}
            </button>
          )}

          {cameraError != null && (
            <div
              role="alert"
              style={{
                position: 'absolute',
                inset: 0,
                display: 'grid',
                placeContent: 'center',
                gap: '12px',
                padding: '24px',
                color: '#fff',
                textAlign: 'center',
                background: 'rgba(15, 23, 42, 0.9)'
              }}
            >
              <strong>{copy.cameraError}</strong>
              <span>{cameraError.message}</span>
              <span style={{ color: '#cbd5e1', maxWidth: '620px' }}>{copy.cameraHelp}</span>
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

        {scanError != null && (
          <p role="alert" style={{ margin: 0, color: '#dc2626' }}>
            <strong>{copy.scanError}:</strong> {scanError.message}
          </p>
        )}
        {torchError != null && (
          <p role="alert" style={{ margin: 0, color: '#dc2626' }}>
            <strong>{copy.torchError}:</strong> {torchError.message}
          </p>
        )}
      </section>

      <section
        aria-labelledby="scanner-demo-results"
        style={{ padding: '18px', border: '1px solid rgba(148, 163, 184, 0.28)', borderRadius: '12px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <h2 id="scanner-demo-results" style={{ margin: 0 }}>{copy.results}</h2>
          {results.length > 0 && (
            <button type="button" style={buttonStyle} onClick={() => setResults([])}>{copy.clear}</button>
          )}
        </div>
        {results.length > 0
          ? (
            <ul aria-live="polite" style={{ marginBottom: 0 }}>
              {results.map((result, index) => (
                <li key={`${result}-${index}`}><code>{result || copy.emptyValue}</code></li>
              ))}
            </ul>
            )
          : <p aria-live="polite" style={{ marginBottom: 0, color: '#64748b' }}>{copy.empty}</p>}
      </section>
    </div>
  )
}

export default function BarcodeScannerDemo ({ locale = 'en-US' }) {
  const copy = COPY[locale] ?? COPY['en-US']

  return (
    <BarcodeScannerProvider>
      <ScannerDemoContent copy={copy} />
    </BarcodeScannerProvider>
  )
}
