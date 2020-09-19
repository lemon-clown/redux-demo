declare module 'react-dev-utils/browsersHelper' {
  export function checkBrowsers(
    srcRootDir: string,
    isInteractive: boolean,
    retry?: boolean
  ): Promise<void>
}
