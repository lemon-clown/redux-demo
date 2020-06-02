declare module '*.css'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'


/**
 * Only keys in K could be omit
 */
declare type PartialOmit<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
