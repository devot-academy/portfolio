import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/global';
import { selectTheme } from '@/global/theme'
import HomeTemplate from '../components/templates/home/index';

export default function Home() {
  const theme = selectTheme({
    color: 'default',
    font: 'default',
  });
  return (
    <ThemeProvider theme={theme}>
      <HomeTemplate/>
      <GlobalStyles /> 
    </ThemeProvider>
  )
}
