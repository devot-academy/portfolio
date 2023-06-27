import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/global';
import { selectTheme } from '@/global/theme'
import Link from '@/components/molecules/link';

export default function Home() {
  const theme = selectTheme({
    color: 'default',
    font: 'default',
  });
  return (
    <ThemeProvider theme={theme}>
     <Link type='headline-2' url='http://www.google.com' isLinkedInAnotherPage={false}>Click</Link>
      <GlobalStyles /> 
    </ThemeProvider>
  )
}
