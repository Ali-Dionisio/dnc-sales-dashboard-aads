import 'styled-components'
import { Theme } from '@/types'

declare module 'styled-components' {
  export type DefaultTheme = Theme
}
