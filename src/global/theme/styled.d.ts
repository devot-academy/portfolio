import 'styled-components';
import { type ColorFormat } from './colors/interfaces';
import { type FontFormat } from './fonts/interfaces';

export interface ThemeType {
  COLORS: ColorFormat;
  FONTS: FontFormat;
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}