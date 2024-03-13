import React, { createContext, useState } from 'react'
import { IAuthContextProps } from './types'

export const AuthContext = createContext<IAuthContextProps>({
  user: {
    name: '',
    email: '',
  },
  setUser: () => {},
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
  })

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
