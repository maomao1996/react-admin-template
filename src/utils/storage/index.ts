import storage from './storage'
import { User } from '@/store/login'

const getKey = (key: string): string => `__MM_ADMIN_${key.toUpperCase()}__`

// token 相关
const TOKEN_KEY: string = getKey('token')
export const getStorageToken = (): string => storage.get(TOKEN_KEY, '') as string
export const setStorageToken = (v: string): void => storage.set(TOKEN_KEY, v)
export const removeStorageToken = (): void => storage.remove(TOKEN_KEY)

// user 相关
const USER_KEY: string = getKey('user')
export const getStorageUser = (): User => storage.get(USER_KEY, {}) as User
export const setStorageUser = (v: unknown): void => storage.set(USER_KEY, v)
export const removeStorageUser = (): void => storage.remove(USER_KEY)
