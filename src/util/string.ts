/**
 * Stringify data
 * @param data
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function stringify(data: any): string {
  return JSON.stringify(data, null, 2)
}
