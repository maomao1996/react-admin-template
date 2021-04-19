import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProviderProps } from 'antd/es/config-provider'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

/**
 * antd 全局配置
 * https://ant.design/components/config-provider-cn/#API
 */

export const antdConfig: ConfigProviderProps = {
  // 组件大小
  componentSize: 'middle',
  // 语言包配置
  locale: zhCN
}
