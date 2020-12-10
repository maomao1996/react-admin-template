export const isString = (value: unknown): value is string => typeof value === 'string'

export const objectToString = Object.prototype.toString
export const toTypeString = (value: unknown): string => objectToString.call(value)

export const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  toTypeString(value) === '[object Object]'
