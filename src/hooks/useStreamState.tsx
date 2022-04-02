import { useEffect, useState } from 'react'

type SubscriberFunc = (newState: MediaStream) => void

const subscriptions: SubscriberFunc[] = []

function set (newValue: MediaStream): void {
  setTimeout(() => {
    subscriptions.forEach((c) => c(newValue))
  })
}

export function useStreamState (): [MediaStream | undefined, (newState: MediaStream) => void] {
  const [stream, setStream] = useState<MediaStream>()

  useEffect(() => {
    const index = subscriptions.push(setStream)
    return () => {
      subscriptions.splice(index, 1)
    }
  }, [])

  return [stream, set]
}
