import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import GlobalLoading from '@/base/GlobalLoading'

// 处理请求 loading
let loadingCount: number = 0
function loadingInterceptors(instance: AxiosInstance): void {
  const openLoading = (config: AxiosRequestConfig) => {
    GlobalLoading.open()
    loadingCount++
    return config
  }
  const closeLoading = (response: AxiosResponse) => {
    loadingCount--
    if (loadingCount < 0) {
      loadingCount = 0
    }
    loadingCount === 0 && GlobalLoading.close()
    return response
  }
  instance.interceptors.request.use(openLoading)
  instance.interceptors.response.use(closeLoading, (e) => e.response)
}

export default function createAxiosInstance(
  baseURL: string = '',
  isLoading: boolean = false
): AxiosInstance {
  const instance = axios.create({ baseURL })
  isLoading && loadingInterceptors(instance)
  return instance
}
