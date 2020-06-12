import { useState, useCallback } from 'react'
import { createContainer } from 'unstated-next'
import {
  getStorageToken,
  setStorageToken,
  removeStorageToken,
  getStorageUser,
  setStorageUser,
  removeStorageUser
} from '@/utils'

export type User = {
  userId?: number
  nickname?: string
}

const user: User = {
  userId: 1996,
  nickname: 'maomao1996'
}

function useLogin() {
  const [isLogin, setIsLogin] = useState<boolean>(() => !!getStorageToken())
  const [userInfo, setUserInfo] = useState<User>(() => getStorageUser())

  // 登录
  const login = useCallback(
    () =>
      new Promise((resolve) => {
        setIsLogin(true)
        setStorageToken('maomao1996')

        setUserInfo(user)
        setStorageUser(user)

        resolve()
      }),
    []
  )
  // 注销
  const logout = useCallback(
    () =>
      new Promise((resolve) => {
        setIsLogin(false)
        removeStorageToken()

        setUserInfo({})
        removeStorageUser()

        resolve()
      }),
    []
  )

  return { isLogin, userInfo, login, logout }
}

const LoginContainer = createContainer(useLogin)

export default LoginContainer
