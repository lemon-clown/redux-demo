import WebpackDevServerUtils from 'react-dev-utils/WebpackDevServerUtils'


declare module 'react-dev-utils/WebpackDevServerUtils' {
  export function prepareUrls(
    protocol: string,
    host: string,
    port: number,
    pathname?: string,
  ): WebpackDevServerUtils.Urls
}
