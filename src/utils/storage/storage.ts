import { isString } from '../type'

const STORAGE = window.localStorage

function serialize(v: unknown): string {
  return JSON.stringify(v)
}

function deserialize(v: string | null) {
  if (!isString(v)) {
    return undefined
  }
  try {
    return JSON.parse(v)
  } catch (e) {
    return v || undefined
  }
}

// 定义 storage 方法
export default {
  set(key: string, val: unknown) {
    STORAGE.setItem(key, serialize(val))
  },
  get(key: string, def: unknown) {
    const val = deserialize(STORAGE.getItem(key))
    return val === undefined ? def : val
  },
  remove(key: string) {
    STORAGE.removeItem(key)
  }
}
