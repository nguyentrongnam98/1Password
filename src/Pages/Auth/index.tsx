import { SelectOutlined } from '@ant-design/icons'
import { Button, Typography } from 'antd'
import { useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useMediaQuery } from 'react-responsive'
import SignIn from './SignIn'
import SignUp from './SignUp'
import './index.scss'

const { Link } = Typography

export default function Auth() {
  const [isPanelRightActive, setIsPanelRightActive] = useState(false)

  const handleClickSignIn = () => {
    setIsPanelRightActive(false)
  }

  const handleClickSignUp = () => {
    setIsPanelRightActive(true)
  }

  const switchMode = () => {
    setIsPanelRightActive(!isPanelRightActive)
  }

  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 })

  return (
    <div className='auth-page'>
      <HelmetProvider>
        <Helmet>
          <title>Authentication</title>
          <meta name='description' content='React App authentication' />
        </Helmet>
      </HelmetProvider>

      {isTabletOrDesktop ? (
        <div className='auth-page-wrapper'>
          <div
            className={`auth-container ${
              isPanelRightActive ? 'right-panel-active' : ''
            }`}
          >
            <div className='form-container sign-up-container'>
              <SignUp />
            </div>
            <div className='form-container sign-in-container'>
              <SignIn />
            </div>

            <div className='overlay-container'>
              <div className='overlay'>
                <div className='overlay-panel overlay-left bg-gradient'>
                  <h1>Welcome!</h1>
                  <p>
                    If you already have an account with us let's sign in to see
                    something awesome!
                  </p>
                  <Button
                    shape='round'
                    onClick={handleClickSignIn}
                    icon={<SelectOutlined />}
                    size='large'
                  >
                    Use your exist account
                  </Button>
                </div>
                <div className='overlay-panel overlay-right bg-gradient'>
                  <h1>Hello, Friend!</h1>
                  <p>
                    If you don't have an account, let's enter your personal
                    details and start journey with us
                  </p>
                  <Button
                    shape='round'
                    onClick={handleClickSignUp}
                    icon={<SelectOutlined />}
                    size='large'
                  >
                    Create new account
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='mobile-auth-warpper'>
          {!isPanelRightActive ? (
            <>
              <SignIn />
              <div className='text-center' onClick={switchMode}>
                Don't have an account? <Link>Sign up now.</Link>
              </div>
            </>
          ) : (
            <>
              <SignUp />
              <div className='text-center' onClick={switchMode}>
                Already have an account? <Link>Sign in now.</Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
