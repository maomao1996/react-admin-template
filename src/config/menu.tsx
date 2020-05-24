import React from 'react'
import { DatabaseOutlined } from '@ant-design/icons'
import { MenuProps } from '@/layout/components/AuthoritySider'

/**
 * 侧边栏配置
 */

export const menuConfig: MenuProps[] = [
  {
    title: '首页',
    path: 'home',
    icon: <DatabaseOutlined />
  },
  {
    title: '列表',
    path: 'list'
  }
]
