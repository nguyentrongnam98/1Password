import React from 'react'
import { Result, Button, Modal } from 'antd'
import { LoginOutlined } from '@ant-design/icons'

interface SignUpSuccessModalProps {
  handleClose: () => void
}

function SignUpSuccessModal(props: SignUpSuccessModalProps) {
  const handleRedirect = () => {
    props.handleClose()
  }

  return (
    <Modal open={true} footer={null} onCancel={props.handleClose}>
      <Result
        status='success'
        title='Congratulations! Registration completed successfully!'
        subTitle='Now you can sign in to our system.'
        extra={[
          <Button
            type='primary'
            shape='round'
            icon={<LoginOutlined />}
            key='console'
            onClick={handleRedirect}
          >
            Sign In now
          </Button>,
        ]}
      />
    </Modal>
  )
}

const MemoizedSignUpSuccessModal = React.memo(SignUpSuccessModal)
export default MemoizedSignUpSuccessModal
