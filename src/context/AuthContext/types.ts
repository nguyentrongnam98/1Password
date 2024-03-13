import { Dispatch, SetStateAction } from 'react'

export interface IUser {
  name: string
  email: string
}

export interface IAuthContextProps {
  user: IUser
  setUser: Dispatch<SetStateAction<IUser>>
}
