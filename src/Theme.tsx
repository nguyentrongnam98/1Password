import React from 'react'
import { App, ConfigProvider, ThemeConfig } from 'antd'

const onePassworkTheme: ThemeConfig = {
  token: {
    colorPrimary: '#38ef7d',
  },
  components: {
    Button: {
      colorPrimary: '#23C186',
    },
  },
}

function Theme(props: React.PropsWithChildren) {
  return (
    <ConfigProvider
      theme={onePassworkTheme}
      prefixCls='onePasswork'
      componentSize='small'
    >
      <App>{props.children}</App>
    </ConfigProvider>
  )
}

export default Theme
