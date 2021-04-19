const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addWebpackExternals,
  addWebpackPlugin
} = require('customize-cra')
const path = require('path')
const { DefinePlugin } = require('webpack')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

const isEnvProduction = process.env.NODE_ENV === 'production'

// 自定义 HtmlWebpackPlugin 配置
const customHtmlWebpackPluginOptions = (config) => {
  config.plugins = config.plugins.map((plugin) => {
    if (plugin.constructor.name === 'HtmlWebpackPlugin') {
      plugin.options.cdn = [
        'https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.min.js',
        'https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js',
        'https://cdn.jsdelivr.net/npm/react-router-dom@5.2.0/umd/react-router-dom.min.js',
        'https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js'
      ]
    }
    return plugin
  })
  return config
}

// 自定义 module rules 配置
const customWebpackModuleRules = (config) => {
  config.module.rules.push({
    test: /\.[jt]sx?$/,
    loader: 'react-dev-inspector/plugins/webpack/inspector-loader'
  })
  return config
}

module.exports = override(
  // 配置别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  // 配置 antd 按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addWebpackPlugin(
    // 添加全局变量
    new DefinePlugin({
      'process.env.PWD': JSON.stringify(process.env.PWD)
    }),
    // 配置 antd dayjs
    new AntdDayjsWebpackPlugin()
  ),
  !isEnvProduction && customWebpackModuleRules,
  isEnvProduction && customHtmlWebpackPluginOptions,
  // 配置 externals
  isEnvProduction &&
    addWebpackExternals({
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-router-dom': 'ReactRouterDOM',
      axios: 'axios'
    })
)
