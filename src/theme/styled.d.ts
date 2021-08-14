import 'styled-components';



declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      common: {
        base: string
        contrast: string
        highlight: string
      }
    }
  }
}