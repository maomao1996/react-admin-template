const { override, fixBabelImports, addWebpackAlias, addWebpackExternals } = require('customize-cra')
const path = require('path')

const isEnvProduction = process.env.NODE_ENV === 'production'

// 自定义 HtmlWebpackPlugin 配置
const customHtmlWebpackPluginOptions = (config) => {
  config.plugins = config.plugins.map((plugin) => {
    if (plugin.constructor.name === 'HtmlWebpackPlugin') {
      plugin.options.cdn = [
        'https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.min.js',
        'https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js',
        'https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js'
      ]
    }
    return plugin
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
  isEnvProduction && customHtmlWebpackPluginOptions,
  // 配置 externals
  isEnvProduction &&
    addWebpackExternals({
      react: 'React',
      'react-dom': 'ReactDOM',
      axios: 'axios'
    })
)
