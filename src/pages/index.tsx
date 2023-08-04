import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/global';
import { selectTheme } from '@/global/theme'
import HomeTemplate from '@/components/templates/home';
import AboutTemplate from '@/components/templates/about';

export default function Home() {
  const theme = selectTheme({
    color: 'default',
    font: 'default',
  });
  return (
    <ThemeProvider theme={theme}>
      <HomeTemplate
        presentation="ngjkfngjrnjkgnrjkngk"
        main=""
        summary="" logo={''} line={''} image={''} button={''} link={''} />
      <AboutTemplate about={''} />
      <GlobalStyles />
    </ThemeProvider>
  )
}
