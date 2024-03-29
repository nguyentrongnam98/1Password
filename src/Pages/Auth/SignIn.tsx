import { Form, Input, Button, Checkbox } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import SocialNetworks from './SocialNetworks'
import { Typography } from 'antd'
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext/AuthContext'
import { FormSignInConfig } from './configs'

const { Title } = Typography

export default function SignIn() {
  const [form] = Form.useForm()
  const context = useContext(AuthContext)

  const onFinish = async (values: string) => {
    console.log('Success:', values)
    context.setUser({ name: 'John Doe', email: 'abc' })
  }

  return (
    <>
      <Form
        name='signin'
        form={form}
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
        autoComplete='off'
      >
        <Title level={2} className='text-center'>
          Sign in
        </Title>
        <SocialNetworks />

        <div className='option-text'>or use your account</div>

        <Form.Item
          {...FormSignInConfig.email}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input placeholder='Email' size='large' />
        </Form.Item>

        <Form.Item
          {...FormSignInConfig.password}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input.Password placeholder='Password' size='large' />
        </Form.Item>

        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className='login-form-forgot' href='#'>
            Forgot password?
          </a>
        </Form.Item>

        <Button
          loading={false}
          type='primary'
          htmlType='submit'
          shape='round'
          icon={<LoginOutlined />}
          size='large'
        >
          Sign In
        </Button>
      </Form>
    </>
  )
}
