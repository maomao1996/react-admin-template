import React, { useState, useCallback, useMemo } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { pathToRegexp } from 'path-to-regexp'
import Logo from '@/assets/images/logo.svg'
import { menuConfig } from '@/config'

import './index.scss'

const { Sider } = Layout
const { SubMenu } = Menu

export type MenuProps = {
  title: string
  children?: MenuProps[]
  [key: string]: any
} & React.ComponentProps<typeof Menu.Item>

// 格式化菜单 path
function formatMenuPath(menuData: MenuProps[], parentPath = '/'): MenuProps[] {
  return menuData.map((item) => {
    const result = {
      ...item,
      path: `${parentPath}${item.path}`
    }
    if (item.children) {
      result.children = formatMenuPath(
        item.children,
        `${parentPath}${item.path}/`
      )
    }
    return result
  })
}

function getFlatMenuKeys(menuData: MenuProps[]): string[] {
  return menuData.reduce((keys: string[], item) => {
    keys.push(item.path)
    if (item.children) {
      return keys.concat(getFlatMenuKeys(item.children))
    }
    return keys
  }, [])
}

function urlToArray(url: string): string[] {
  const arr = url.split('/').filter((i) => i)
  return arr.map((v, i) => `/${arr.slice(0, i + 1).join('/')}`)
}

function matchKeys(flatMenuKeys: string[], paths: string[]): string[] {
  return paths.reduce(
    (arr: string[], path) =>
      arr.concat(flatMenuKeys.filter((item) => pathToRegexp(item).test(path))),
    []
  )
}

const renderMenu = (data: MenuProps[]) =>
  data.map((item) => {
    if (item.children) {
      return (
        <SubMenu
          key={item.path}
          title={
            <span>
              <span>{item.title}</span>
            </span>
          }
        >
          {renderMenu(item.children)}
        </SubMenu>
      )
    }

    return (
      <Menu.Item key={item.path}>
        <Link to={item.path} href={item.path}>
          <span>{item.title}</span>
        </Link>
      </Menu.Item>
    )
  })

export default withRouter((props) => {
  const fullPathMenuData = useMemo(() => formatMenuPath(menuConfig), [])
  const menuKeys = useMemo(() => getFlatMenuKeys(fullPathMenuData), [
    fullPathMenuData
  ])

  const selectedKeys = useCallback(() => {
    return matchKeys(menuKeys, urlToArray(props.location.pathname))
  }, [menuKeys, props.location.pathname])

  const [openKeys, setOpenKeys] = useState(selectedKeys())

  return (
    <Sider className="m-sider" width="260">
      <Link className="m-sider-head" to="/" href="/">
        <img className="m-sider-logo" src={Logo} alt="logo" />
        <h1 className="m-sider-title">管理后台模板</h1>
      </Link>
      <div className="m-sider-content">
        <Menu
          theme="dark"
          mode="inline"
          openKeys={openKeys}
          onOpenChange={setOpenKeys}
          selectedKeys={selectedKeys()}
        >
          {renderMenu(fullPathMenuData)}
        </Menu>
      </div>
    </Sider>
  )
})
