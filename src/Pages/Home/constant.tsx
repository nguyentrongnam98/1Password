import type { MenuProps } from 'antd'

export const menuItems: MenuProps['items'] = [
  {
    label: 'Wescan Của Tôi',
    key: 'my-wescan',
    children: [
      {
        type: 'group',
        label: 'Hồ sơ cá nhân',
      },
      {
        type: 'group',
        label: 'Lịch sử giao dịch',
      },
      {
        type: 'group',
        label: 'Lịch sử Coupon',
      },
      {
        type: 'group',
        label: 'Danh sách đơn hàng',
      },
    ],
  },
  {
    label: 'Donate Cho Streamer',
    key: 'donate-streamer',
  },
  {
    label: 'Hướng dẫn sử dụng',
    key: 'guild',
  },
  {
    label: 'Danh Sách Coupon',
    key: 'coupon-list',
  },
]
