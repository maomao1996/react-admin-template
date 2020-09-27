import { isPlainObject } from './type'

const DEFAULT_OMITS = [undefined, null, '']
// 过滤对象中的基础属性 默认为 undefined null ''
export const filterObject = (val: unknown, omits: any[] = DEFAULT_OMITS): any => {
  if (!isPlainObject(val)) {
    return val
  }
  return Object.keys(val as any).reduce((obj: any, key) => {
    const value = (val as any)[key]
    if (!omits.includes(value)) {
      obj[key] = isPlainObject(val) ? filterObject(value) : value
    }
    return obj
  }, {})
}
