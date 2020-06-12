module.exports = {
  // 运行环境
  env: {
    browser: true,
    es2020: true
  },
  // 继承的规则 / 插件
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  // 解析器
  parser: '@typescript-eslint/parser',
  // 解析器配置
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  // 插件
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  settings: {
    // 自动检测 React 的版本
    react: {
      version: 'detect'
    }
  },
  // 规则
  rules: {
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-indent': 0,
    '@typescript-eslint/no-non-null-assertion': 0
  }
}
