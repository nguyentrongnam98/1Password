import logoWeScan from '@/assets/images/wescan.png'
import { AuthContext } from '@/context/AuthContext/AuthContext'
import { Col, Layout, Row, Menu, Avatar } from 'antd'
import { useContext } from 'react'
import { menuItems } from './constant'
import './home.scss'
import {
  BellOutlined,
  PlusCircleOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons'

const { Header } = Layout

export default function Home() {
  const context = useContext(AuthContext)
  console.log(context)
  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          backgroundColor: '#272727',
        }}
      >
        <Row>
          <Col lg={3} md={3} sm={24} xl={3} xs={24} xxl={2}>
            <div className='flex items-center'>
              <img src={logoWeScan} alt='logo' className='h-[64px]' />
            </div>
          </Col>
          <Col lg={19} md={19} sm={0} xl={19} xs={0} xxl={15}>
            <Menu
              mode='horizontal'
              items={menuItems}
              triggerSubMenuAction='click'
              style={{ backgroundColor: '#272727' }}
            />
          </Col>
          <Col lg={16} md={16} sm={0} xl={12} xs={0} xxl={5} className='m-auto'>
            <div className='flex justify-end w-auto'>
              <div className='flex w-20 items-center justify-between'>
                <p className='text-white'>Ví tiền</p>
                <p className='text-xl text-[#fdb817]'>0đ</p>
              </div>
              <div className='flex items-center'>
                <PlusCircleOutlined className='text-3xl ml-6 text-white cursor-pointer' />
                <ShoppingCartOutlined className='text-3xl ml-4 text-white cursor-pointer' />
                <BellOutlined className='text-3xl ml-4 text-white cursor-pointer' />
                <Avatar
                  style={{
                    backgroundColor: '#f56a00',
                    verticalAlign: 'middle',
                    marginLeft: '30px',
                  }}
                  size='large'
                  gap={3}
                >
                  Nam
                </Avatar>
              </div>
            </div>
          </Col>
        </Row>
      </Header>
    </Layout>
  )
}
