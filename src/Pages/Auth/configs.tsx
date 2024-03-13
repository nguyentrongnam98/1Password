import { FormItemProps } from 'antd'
import { Rule } from 'rc-field-form/lib/interface'
import { IFormSignIn, IFormSignUp } from './types'

type ItemSignInConfig = {
  [prop in keyof IFormSignIn]: FormItemProps<IFormSignIn> & {
    name: keyof IFormSignIn
  }
}

type ItemSignUpConfig = {
  [prop in keyof IFormSignUp]: FormItemProps<IFormSignUp> & {
    name: keyof IFormSignUp
  }
}

export const FormSignInConfig: ItemSignInConfig = {
  email: {
    name: 'email',
    hasFeedback: true,
    label: 'Email address',
    get rules(): Rule[] {
      return [
        {
          required: true,
          message: 'Please input your email.',
        },
        {
          type: 'email',
          message: 'Your email is invalid.',
        },
      ]
    },
  },
  password: {
    name: 'password',
    hasFeedback: true,
    label: 'Password',
    get rules(): Rule[] {
      return [
        {
          required: true,
          message: 'Please input your password.',
        },
        { min: 6, message: 'Password must be minimum 6 characters.' },
      ]
    },
  },
}

export const FormSignUpConfig: ItemSignUpConfig = {
  firstName: {
    name: 'firstName',
    hasFeedback: true,
    label: 'First name',
    get rules(): Rule[] {
      return [
        {
          required: true,
          message: 'Please input your first name.',
        },
        {
          min: 2,
          message: 'Your first name must be at least 2 characters.',
        },
      ]
    },
  },
  lastName: {
    name: 'lastName',
    hasFeedback: true,
    label: 'Last name',
    get rules(): Rule[] {
      return [
        {
          required: true,
          message: 'Please input your last name.',
        },
        {
          min: 2,
          message: 'Your last name must be at least 2 characters.',
        },
      ]
    },
  },
  email: {
    name: 'email',
    hasFeedback: true,
    label: 'Email address',
    get rules(): Rule[] {
      return [
        {
          required: true,
          message: 'Please input your email.',
        },
        {
          type: 'email',
          message: 'Your email is invalid.',
        },
      ]
    },
  },
  password: {
    name: 'password',
    hasFeedback: true,
    label: 'Password',
    get rules(): Rule[] {
      return [
        {
          required: true,
          message: 'Please input your password.',
        },
        { min: 6, message: 'Password must be minimum 6 characters.' },
      ]
    },
  },
  confirmPassword: {
    name: 'confirmPassword',
    hasFeedback: true,
    label: 'Confirm password',
    get rules(): Rule[] {
      return [
        {
          required: true,
          message: 'Please confirm your password.',
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve()
            }
            return Promise.reject(
              'The two passwords that you entered do not match!'
            )
          },
        }),
      ]
    },
  },
  agree: {
    name: 'agree',
    valuePropName: 'checked',
    get rules(): Rule[] {
      return [
        {
          validator(_, value) {
            if (value) {
              return Promise.resolve()
            }
            return Promise.reject('You must agree to the terms and conditions.')
          },
        },
      ]
    },
  },
}
