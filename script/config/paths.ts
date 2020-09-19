import fs from 'fs-extra'
import path from 'path'
import webpack from 'webpack'


const appDirectory = fs.realpathSync(process.cwd())
const resolvePath = (...relativePath: string[]): string => {
  return path.normalize(path.resolve(appDirectory, ...relativePath))
}


const paths = {
  resolvePath,
  source: {
    root: appDirectory,
    src: resolvePath('src'),
    public: resolvePath('public'),
    polyfill: '',
    eslintrc: resolvePath('.eslintrc.js'),
    packageJson: resolvePath('package.json'),
    tsconfigJson: resolvePath('tsconfig.src.json'),
    nodeModules: resolvePath('node_modules'),
    extraNodeModules: [],
    lockFile: resolvePath('yarn.lock'),
    proxySetup: resolvePath('src/setupProxy.js'),
    externals: [] as webpack.ExternalsElement[],
  },
  target: {
    root: resolvePath('dist'),
    mainPage: resolvePath('dist/index.html'),
  },
  entries: [
    {
      name: 'index',
      page: resolvePath('src/index.pug'),
      script: resolvePath('src/index.tsx'),
    }
  ],
  moduleExtensions: [
    '.web.mjs',
    '.mjs',
    '.web.js',
    '.js',
    '.web.ts',
    '.ts',
    '.web.tsx',
    '.tsx',
    '.json',
    '.web.jsx',
    '.jsx'
  ],
  alias: {
    '@': resolvePath('src'),
  }
}


export default paths
