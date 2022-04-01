import { createContext, Dispatch, FunctionComponent, SetStateAction, useState } from 'react'

export const StreamContext = createContext<
[
  MediaStream | undefined,
  Dispatch<SetStateAction<MediaStream | undefined>>
] | undefined
>(undefined)

export const StreamProvider: FunctionComponent = ({ children }) => {
  const state = useState<MediaStream>()

  return (
    <StreamContext.Provider value={state}>
      {children}
    </StreamContext.Provider>
  )
}
