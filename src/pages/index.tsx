import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/global';
import { selectTheme } from '@/global/theme'
import HomeTemplate from '@/components/templates/home';
import AboutTemplate from '@/components/templates/about';

import * as PROFILE_ALEFE from '@/profile-data/alefe'


export default function Home() {
  const theme = selectTheme({
    color: 'default',
    font: 'default',
  });

  return (
    <ThemeProvider theme={theme}>
      <HomeTemplate {...PROFILE_ALEFE.HOME_PROPS}/>
      <AboutTemplate {...PROFILE_ALEFE.ABOUT_PROPS}/>
      <GlobalStyles /> 
    </ThemeProvider>
  )
}
