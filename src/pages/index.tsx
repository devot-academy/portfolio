import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/global';
import { selectTheme } from '@/global/theme'
import HomeTemplate from '@/components/templates/home';

export default function Home() {
  const theme = selectTheme({
    color: 'default',
    font: 'default',
  });
  return (
    <ThemeProvider theme={theme}>
      <HomeTemplate
        presentation="Oi! Meu nome é Allan"
        main="REACT DEVELOPER"
        summary="Tenho 28 anos e nos últimos 12 meses mergulhei de cabeça no mundo do desenvolvimento. Também acumulei valiosa experiência trabalhando em equipe."
      />
      <GlobalStyles />
    </ThemeProvider>
  )
}
