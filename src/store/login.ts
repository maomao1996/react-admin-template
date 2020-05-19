import { useState } from 'react'
import { createContainer } from 'unstated-next'

function useLogin() {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const login = () => {
    setIsLogin(() => true)
  }
  const logout = () => {
    setIsLogin(() => false)
  }

  return { isLogin, login, logout }
}

const Login = createContainer(useLogin)

export default Login
