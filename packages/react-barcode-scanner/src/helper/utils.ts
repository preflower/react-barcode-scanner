export const indempotent = <T extends (...args: any[]) => any>(action: T): (...args: any) => ReturnType<T> => {
  let called = false
  let result: ReturnType<T>

  return (...args: any) => {
    if (called) {
      return result
    } else {
      result = action(...args)
      called = true

      return result
    }
  }
}

export const eventListener = async <T extends HTMLElement>(target: T, event: string, errorEvent = 'error'): Promise<unknown> => {
  let $resolve: (value: unknown) => void,
    $reject: (reason?: any) => void

  const promise = new Promise((resolve, reject) => {
    $resolve = resolve
    $reject = reject

    target.addEventListener(event, $resolve)
    target.addEventListener(errorEvent, $reject)
  }).finally(() => {
    target.removeEventListener(event, $resolve)
    target.removeEventListener(errorEvent, $reject)
  })

  return await promise
}

export const timeout = async (milliseconds: number): Promise<void> => {
  await new Promise(
    resolve => setTimeout(resolve, milliseconds)
  )
}
