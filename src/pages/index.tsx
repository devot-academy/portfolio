import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/global';
import { selectTheme } from '@/global/theme'
import Navbar from '@/components/organisms/Navbar';
import HomeTemplate from '@/components/templates/home';

export default function Home() {
  const theme = selectTheme({
    color: 'default',
    font: 'default',
  });
  return (
    <ThemeProvider theme={theme}>
      <HomeTemplate />
      <GlobalStyles />
    </ThemeProvider>
  )
}
