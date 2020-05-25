import storage from './storage'

const getKey = (key: string): string => `__MM_ADMIN_${key.toUpperCase()}__`

// token 相关
const TOKEN_KEY: string = getKey('token')
export const getStorageToken = () => storage.get(TOKEN_KEY, '')
export const setStorageToken = (v: string): void => storage.set(TOKEN_KEY, v)
export const removeStorageToken = () => storage.remove(TOKEN_KEY)

// user 相关
const USER_KEY: string = getKey('user')
export const getStorageUser = () => storage.get(USER_KEY, {})
export const setStorageUser = (v: any): void => storage.set(USER_KEY, v)
export const removeStorageUser = () => storage.remove(USER_KEY)
