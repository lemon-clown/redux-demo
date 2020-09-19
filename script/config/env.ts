import { coverBoolean, coverNumber, coverString } from '@barusu/util-option'
import appPackageJson from '../../package.json'


const isInteractive = Boolean(process.stdout.isTTY)
const publicUrlOrPath: string = coverString('/', process.env.PUBLIC_URL)




const env = {
  isInteractive,
  appPackageJson,
  publicUrlOrPath: publicUrlOrPath,
  tscCompileOnError: coverBoolean(false, process.env.TSC_COMPILE_ON_ERROR),
  development: {
    server: {
      host: coverString('127.0.0.1', process.env.HOST),
      port: coverNumber(3000, process.env.PORT),
      compress: true,
      isHTTPS: coverBoolean(false, process.env.HTTPS),
      shouldDisableHostCheck: coverBoolean(false, process.env.DANGEROUSLY_DISABLE_HOST_CHECK),
      sockHost: process.env.WDS_SOCKET_HOST,
      sockPath: process.env.WDS_SOCKET_PATH, // default: '/sockjs-node'
      sockPort: process.env.WDS_SOCKET_PORT,
    },
    shouldLaunchBrowser: coverBoolean(true, process.env.LAUNCH_BROWSER),
    shouldJsChunk: coverBoolean(true, process.env.JS_CHUNK),
    shouldJsMinified: coverBoolean(true, process.env.JS_MINIFIED),
    shouldCssChunk: coverBoolean(true, process.env.CSS_CHUNK),
    shouldCssMinified: coverBoolean(true, process.env.CSS_MINIFIED),
    shouldInlineRuntimeChunk: coverBoolean(true, process.env.INLINE_RUNTIME_CHUNK),
    shouldUseSourceMap: coverBoolean(true, process.env.GENERATE_SOURCEMAP),
    inject: {
      NODE_ENV: 'development',
      PUBLIC_URL: publicUrlOrPath.replace(/\/$/, ''),
      SITE_TITLE: coverString(appPackageJson.name, process.env.SITE_TITLE),
      // We support configuring the sockjs pathname during development.
      // These settings let a developer run multiple simultaneous projects.
      // They are used as the connection `hostname`, `pathname` and `port`
      // in webpackHotDevClient. They are used as the `sockHost`, `sockPath`
      // and `sockPort` options in webpack-dev-server.
      WDS_SOCKET_HOST: process.env.WDS_SOCKET_HOST,
      WDS_SOCKET_PATH: process.env.WDS_SOCKET_PATH,
      WDS_SOCKET_PORT: process.env.WDS_SOCKET_PORT,
    },
    cssModuleOptions: {
      localIdentName: 'ghc-[local]',
      exportLocalsConvention: 'camelCaseOnly',
    },
  },
  production: {
    shouldJsChunk: coverBoolean(false, process.env.JS_CHUNK),
    shouldJsMinified: coverBoolean(true, process.env.JS_MINIFIED),
    shouldCssChunk: coverBoolean(false, process.env.CSS_CHUNK),
    shouldCssMinified: coverBoolean(true, process.env.CSS_MINIFIED),
    shouldInlineRuntimeChunk: coverBoolean(false, process.env.INLINE_RUNTIME_CHUNK),
    shouldUseSourceMap: coverBoolean(false, process.env.GENERATE_SOURCEMAP),
    inject: {
      NODE_ENV: 'production',
      PUBLIC_URL: publicUrlOrPath.replace(/\/$/, ''),
      SITE_TITLE: coverString(appPackageJson.name, process.env.SITE_TITLE),
    },
    cssModuleOptions: {
      localIdentName: 'ghc-[local]',
      exportLocalsConvention: 'camelCaseOnly',
    },
  },
}


export default env
