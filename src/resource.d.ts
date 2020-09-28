declare module '*.css'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

declare module '*.styl' {
  const data: Record<string, string>
  export default data
}


/**
 * Only keys in K could be omit
 */
declare type PartialOmit<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
