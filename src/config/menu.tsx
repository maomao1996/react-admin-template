import React from 'react'
import { DatabaseOutlined, WarningOutlined } from '@ant-design/icons'
import { MenuProps } from '@/layout/components/AuthoritySider'

/**
 * 侧边栏配置
 * 图标查询地址 https://ant.design/components/icon-cn/
 */

export const menuConfig: MenuProps[] = [
  {
    title: '首页',
    path: 'home',
    icon: <DatabaseOutlined />
  },
  {
    title: '404',
    path: '404',
    icon: <WarningOutlined />
  }
]
