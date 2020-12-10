import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import GlobalLoading from '@/base/GlobalLoading'
import { filterObject } from '../filter'

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

// 过滤请求参数中的 null undefined ''
function filterInterceptors(instance: AxiosInstance): void {
  const filter = (config: AxiosRequestConfig): AxiosRequestConfig => {
    if (config.data) {
      config.data = filterObject(config.data)
    }
    if (config.params) {
      config.params = filterObject(config.params)
    }
    return config
  }
  instance.interceptors.request.use(filter)
}

export default function createAxiosInstance(baseURL = '', isLoading = false): AxiosInstance {
  const instance = axios.create({ baseURL })
  filterInterceptors(instance)
  isLoading && loadingInterceptors(instance)
  return instance
}
