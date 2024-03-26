import logoWeScan from '@/assets/images/wescan.png'
import { AuthContext } from '@/context/AuthContext/AuthContext'
import { Col, Layout, Row, Menu, Avatar } from 'antd'
import { useContext } from 'react'
import { menuItems } from '../../constants/constant'
import './home.scss'
import {
  BellOutlined,
  CreditCardOutlined,
  HomeOutlined,
  PlusCircleOutlined,
  QuestionCircleFilled,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons'

const { Header, Sider, Content } = Layout

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
      <Layout className='content-layout'>
        <Sider
          collapsible={true}
          collapsedWidth={50}
          width={200}
          style={{ background: '#fdb817' }}
          className='fixed overflow-x-hidden top-[64px] h-[calc(100vh-64px)] home-sider'
        >
          <Menu mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key='1' icon={<HomeOutlined style={{ fontSize: 16 }} />}>
              <span className='navbar-span'>Trang Chủ</span>
            </Menu.Item>
            <Menu.Item key='2' icon={<UserOutlined style={{ fontSize: 16 }} />}>
              <span className='navbar-span'>Thông tin cá nhân</span>
            </Menu.Item>
            <Menu.Item
              key='3'
              icon={<CreditCardOutlined style={{ fontSize: 16 }} />}
            >
              <span className='navbar-span'>Giao dịch</span>
            </Menu.Item>
            <Menu.Item
              key='4'
              icon={<QuestionCircleFilled style={{ fontSize: 16 }} />}
            >
              <span className='navbar-span'>Hướng dẫn sử dụng</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>
          <div className='mt-[64px] p-[24px] bg-[#171102] overflow-scroll text-amber-500 h-[calc(100vh-64px)] text-center'>
            <p>Running Full System Diagnosis</p>
            {Array.from({ length: 100 }, (_, index) => (
              <>
                {index % 20 === 0 && index ? 'more' : `${index}`}
                <br />
              </>
            ))}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
