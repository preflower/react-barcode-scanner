import { describe, expect, it } from 'vite-plus/test'

import { createAtom } from '../src/hooks/use-atom.js'

describe('createAtom', () => {
  it('retains its value and removes subscribers', () => {
    const atom = createAtom<string>()
    const received: Array<string | undefined> = []
    const unsubscribe = atom.subscribe(value => { received.push(value) })

    atom.set('first')
    expect(atom.get()).toBe('first')
    expect(received).toEqual(['first'])

    unsubscribe()
    atom.set('second')
    expect(received).toEqual(['first'])
  })
})
