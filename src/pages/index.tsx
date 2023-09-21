import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/global';
import { selectTheme } from '@/global/theme'
import HomeTemplate from '@/components/templates/home';
import AboutTemplate from '@/components/templates/about';
import Icon from '@/components/atoms/icon';

import * as PROFILE_RAISSA from '@/profile-data/raissa'


export default function Home() {
  const theme = selectTheme({
    color: 'default',
    font: 'default',
  });

  return (
    <ThemeProvider theme={theme}>
      <HomeTemplate />
      <AboutTemplate {...PROFILE_RAISSA.ABOUT_PROPS} />
      <Icon name='github' color='black' size='medium' />
      <GlobalStyles />
    </ThemeProvider>
  )
}
