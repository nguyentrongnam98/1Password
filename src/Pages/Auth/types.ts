export interface IFormSignIn {
  email: string
  password: string
}

export interface IFormSignUp {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  agree: boolean
}
