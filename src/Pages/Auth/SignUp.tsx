import { UserAddOutlined } from '@ant-design/icons'
import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { useState } from 'react'
import SignUpSuccessModal from './SignUpSuccessModal'
import SocialNetworks from './SocialNetworks'
import { FormSignUpConfig } from './configs'

const { Title } = Typography

export default function SignUp() {
  const [checked, setChecked] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [form] = Form.useForm()

  const onFinish = async (values: unknown) => {
    console.log('Success:', values)
  }

  const onCheckboxChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <>
      {showModal && <SignUpSuccessModal handleClose={handleCloseModal} />}

      <Form
        name='signup'
        initialValues={{}}
        onFinish={onFinish}
        autoComplete='off'
        form={form}
      >
        <Title level={2} className='text-center'>
          Create Account
        </Title>
        <SocialNetworks />

        <div className='option-text'>or use your email for registration</div>

        <Row gutter={{ xs: 8, sm: 16 }}>
          <Col className='gutter-row' xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item
              {...FormSignUpConfig.firstName}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input placeholder='First name' size='large' />
            </Form.Item>
          </Col>
          <Col className='gutter-row' xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item
              {...FormSignUpConfig.lastName}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input placeholder='Last name' size='large' />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          {...FormSignUpConfig.email}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input placeholder='Email' size='large' />
        </Form.Item>

        <Row gutter={{ xs: 8, sm: 16 }}>
          <Col className='gutter-row' xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item
              {...FormSignUpConfig.password}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input.Password placeholder='Password' size='large' />
            </Form.Item>
          </Col>

          <Col className='gutter-row' xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              dependencies={['password']}
              {...FormSignUpConfig.confirmPassword}
            >
              <Input.Password placeholder='Confirm password' size='large' />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Form.Item
            {...FormSignUpConfig.agree}
            valuePropName='checked'
            noStyle
          >
            <Checkbox checked={checked} onChange={onCheckboxChange}>
              I agree to <a href='#'>Terms of Use & Privacy policy</a>.
            </Checkbox>
          </Form.Item>
        </Form.Item>

        <Button
          type='primary'
          loading={false}
          className='form-submit-btn'
          htmlType='submit'
          shape='round'
          icon={<UserAddOutlined />}
          size='large'
        >
          Sign Up
        </Button>
      </Form>
    </>
  )
}
