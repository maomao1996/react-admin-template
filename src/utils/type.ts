export const isString = (val: unknown): val is string => typeof val === 'string'

export const objectToString = Object.prototype.toString
export const toTypeString = (val: unknown): string => objectToString.call(val)

export const isPlainObject = (val: unknown): val is Record<any, any> =>
  toTypeString(val) === '[object Object]'
