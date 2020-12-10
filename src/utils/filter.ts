import { isPlainObject } from './type'

const DEFAULT_OMITS = [undefined, null, '']
// 过滤对象中的基础属性 默认为 undefined null ''
export const filterObject = (value: unknown, omits: any[] = DEFAULT_OMITS): any => {
  if (!isPlainObject(value)) {
    return value
  }
  return Object.keys(value as any).reduce((obj: any, key) => {
    const current = (value as any)[key]
    if (!omits.includes(current)) {
      obj[key] = isPlainObject(value) ? filterObject(current) : current
    }
    return obj
  }, {})
}
