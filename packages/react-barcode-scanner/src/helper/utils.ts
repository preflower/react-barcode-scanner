export const eventListener = async <T extends HTMLElement>(target: T, event: string, errorEvent = 'error', signal?: AbortSignal): Promise<Event> => {
  return await new Promise<Event>((resolve, reject) => {
    const cleanup = (): void => {
      target.removeEventListener(event, onEvent)
      target.removeEventListener(errorEvent, onError)
      signal?.removeEventListener('abort', onAbort)
    }
    const onEvent = (receivedEvent: Event): void => {
      cleanup()
      resolve(receivedEvent)
    }
    const onError = (): void => {
      cleanup()
      reject(new Error(`[react-barcode-scanner]: ${errorEvent} fired while waiting for ${event}`))
    }
    const onAbort = (): void => {
      cleanup()
      reject(new Error(`[react-barcode-scanner]: waiting for ${event} was cancelled`))
    }

    target.addEventListener(event, onEvent)
    target.addEventListener(errorEvent, onError)
    signal?.addEventListener('abort', onAbort, { once: true })

    if (signal?.aborted === true) {
      onAbort()
    }
  })
}

export const timeout = async (milliseconds: number, signal?: AbortSignal): Promise<void> => {
  await new Promise<void>((resolve, reject) => {
    const timer = setTimeout(() => {
      signal?.removeEventListener('abort', onAbort)
      resolve()
    }, milliseconds)
    const onAbort = (): void => {
      clearTimeout(timer)
      signal?.removeEventListener('abort', onAbort)
      reject(new Error('[react-barcode-scanner]: timeout was cancelled'))
    }

    signal?.addEventListener('abort', onAbort, { once: true })
    if (signal?.aborted === true) {
      onAbort()
    }
  })
}
