import logoWeScan from '@/assets/images/wescan.png'
import { AuthContext } from '@/context/AuthContext/AuthContext'
import { Col, Layout, Row, Menu, Avatar, Card } from 'antd'
import { useContext, useState } from 'react'
import { menuItems } from '../../constants/constant'
import './home.scss'
import {
  BellOutlined,
  CreditCardOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusCircleOutlined,
  QuestionCircleFilled,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons'
import Meta from 'antd/es/card/Meta'

const { Header, Sider, Content } = Layout

export default function Home() {
  const context = useContext(AuthContext)
  console.log(context)
  const [openSideNav, setOpenSideNav] = useState(false)
  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          backgroundColor: '#272727',
          paddingInline: '0px',
        }}
      >
        <Row>
          <div>
            {!openSideNav ? (
              <MenuFoldOutlined
                onClick={() => setOpenSideNav(true)}
                className='text-xl mx-4 text-white cursor-pointer'
              />
            ) : (
              <MenuUnfoldOutlined
                onClick={() => setOpenSideNav(false)}
                className='text-xl mx-4 text-white cursor-pointer'
              />
            )}
          </div>
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
          trigger={null}
          collapsed={openSideNav}
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
          <div className='mt-[64px] p-[24px] bg-[#171102] overflow-y-scroll text-[#fdb817] h-[calc(100vh-64px)] text-center'>
            <div className='mb-5 bg-[#272727] px-4 py-2 rounded-lg flex flex-col'>
              <p className='font-semibold text-2xl text-left uppercase'>
                Top Streamer
              </p>
              <div className='flex flex-row p-3'>
                {Array.from({ length: 10 }, (_, index) => (
                  <div className='flex flex-col mr-8 gap-2 items-center justify-center'>
                    <Avatar
                      style={{
                        backgroundColor: '#fdb817',
                        verticalAlign: 'middle',
                      }}
                      size={80}
                    >
                      <UserOutlined
                        style={{ fontSize: 36, color: '#272727' }}
                      />
                    </Avatar>
                    <span className='text-white text-center text-sm font-medium'>
                      Quỷ
                    </span>
                    <span className='rounded-[50%] w-6 bg-neutral-950 font-semibold'>
                      {index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <Row gutter={16}>
              {Array.from({ length: 12 }, (_, index) => (
                <>
                  <Col span={6}>
                    <Card
                      bordered={false}
                      style={{
                        marginBottom: 16,
                        background: '#fdb817',
                        border: '2px solid #fdb817',
                        boxShadow: '0px 0px 1px 3px #fdb81744',
                      }}
                      cover={
                        <img
                          alt='example'
                          src={
                            index % 2 === 0
                              ? 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt60f5d7e2095fa266/65556d537c884ff9070fc7bf/112023_SN24-GameplaySpotlight-Banner.jpg'
                              : 'https://www.cnet.com/a/img/resize/0ef788248caeea67f4c80ade63a6e95f49bf3a2a/hub/2015/12/17/b5fed3aa-a35c-4dc9-ad71-fc17118ebcb1/lol.jpg?auto=webp&width=1920'
                          }
                        />
                      }
                    >
                      <Meta
                        avatar={
                          <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=8' />
                        }
                        title='LOL'
                        description='Game Rác'
                      />
                    </Card>
                  </Col>
                </>
              ))}
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
