import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import GlobalLoading from '@/base/GlobalLoading'

// 处理请求 loading
let loadingCount = 0
function loadingInterceptors(instance: AxiosInstance): void {
  // 打开 loading
  const openLoading = (config: AxiosRequestConfig): AxiosRequestConfig => {
    GlobalLoading.open()
    loadingCount++
    return config
  }
  // 关闭 loading
  const closeLoading = () => {
    loadingCount--
    if (loadingCount < 0) {
      loadingCount = 0
    }
    loadingCount === 0 && GlobalLoading.close()
  }

  instance.interceptors.request.use(openLoading)
  instance.interceptors.response.use(
    (response) => {
      closeLoading()
      return response
    },
    (e) => {
      closeLoading()
      throw e
    }
  )
}

export default function createAxiosInstance(baseURL = '', isLoading = false): AxiosInstance {
  const instance = axios.create({ baseURL })
  isLoading && loadingInterceptors(instance)
  return instance
}
