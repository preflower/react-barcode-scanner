import { useEffect, useState } from 'react'

type SubscriberFunc<S> = (newState: S) => void

export interface Atom<S> {
  set (newValue: S): void
  subscriptions: Array<SubscriberFunc<S>>
}

export function createAtom<S> (): Atom<S> {
  const subscriptions: Array<SubscriberFunc<S>> = []

  function set (newValue: S): void {
    setTimeout(() => {
      subscriptions.forEach((c) => { c(newValue) })
    })
  }

  return {
    set,
    subscriptions
  }
}

export function useAtom<S> (atom: Atom<S>, initialState: S | (() => S)): [S, SubscriberFunc<S>]
export function useAtom<S = undefined> (atom: Atom<S | undefined>): [S | undefined, SubscriberFunc<S | undefined>]
export function useAtom<S = undefined> (atom: Atom<S | undefined>, initialState?: S | undefined): [S | undefined, SubscriberFunc<S | undefined>] {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const index = atom.subscriptions.push(setState)
    return () => {
      atom.subscriptions.splice(index, 1)
    }
  }, [atom])

  return [state, atom.set]
}
