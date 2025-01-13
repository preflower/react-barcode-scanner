import { createAtom, useAtom } from './use-atom'

const streamAtom = createAtom()

export function useStreamState (): [MediaStream | undefined, (newState: MediaStream) => void] {
  const [stream, setStream] = useAtom<MediaStream>(streamAtom)

  return [stream, setStream]
}
