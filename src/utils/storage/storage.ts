import { isString } from '../type'

const STORAGE = window.localStorage

function serialize(value: unknown): string {
  return JSON.stringify(value)
}

function deserialize(value: string | null) {
  if (!isString(value)) {
    return undefined
  }
  try {
    return JSON.parse(value)
  } catch (error) {
    return value || undefined
  }
}

// 定义 storage 方法
export default {
  set(key: string, value: unknown): void {
    STORAGE.setItem(key, serialize(value))
  },
  get(key: string, defaultValue: unknown): unknown {
    const value = deserialize(STORAGE.getItem(key))
    return value === undefined ? defaultValue : value
  },
  remove(key: string): void {
    STORAGE.removeItem(key)
  }
}
