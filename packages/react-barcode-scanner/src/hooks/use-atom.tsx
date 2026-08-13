import { useEffect, useState } from 'react'

type SubscriberFunc<S> = (newState: S) => void

export interface Atom<S> {
  get (): S | undefined
  set (newValue: S | undefined): void
  subscribe (subscriber: SubscriberFunc<S | undefined>): () => void
}

export function createAtom<S> (initialValue?: S): Atom<S> {
  let value = initialValue
  const subscriptions: Array<SubscriberFunc<S | undefined>> = []

  function get (): S | undefined {
    return value
  }

  function set (newValue: S | undefined): void {
    value = newValue
    subscriptions.forEach((subscriber) => { subscriber(newValue) })
  }

  function subscribe (subscriber: SubscriberFunc<S | undefined>): () => void {
    subscriptions.push(subscriber)

    return () => {
      const index = subscriptions.indexOf(subscriber)
      if (index !== -1) {
        subscriptions.splice(index, 1)
      }
    }
  }

  return {
    get,
    set,
    subscribe
  }
}

export function useAtom<S> (atom: Atom<S>, initialState: S | (() => S)): [S, SubscriberFunc<S>]
export function useAtom<S = undefined> (atom: Atom<S | undefined>): [S | undefined, SubscriberFunc<S | undefined>]
export function useAtom<S = undefined> (atom: Atom<S | undefined>, initialState?: S | undefined): [S | undefined, SubscriberFunc<S | undefined>] {
  const [state, setState] = useState<S | undefined>(() => {
    const currentValue = atom.get()
    return currentValue ?? (typeof initialState === 'function' ? (initialState as () => S)() : initialState)
  })

  useEffect(() => {
    const currentValue = atom.get()
    if (currentValue !== undefined) {
      setState(currentValue)
    }
    return atom.subscribe(setState)
  }, [atom])

  return [state, atom.set]
}
