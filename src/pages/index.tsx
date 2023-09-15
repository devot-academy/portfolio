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
        presentation="Oi! Meu nome é Allan Paulo"
        title="REACT DEVELOPER"
        description='Tenho 28 anos e nos últimos 12 meses mergulhei de cabeça no mundo do desenvolvimento. Também acumulei valiosa experiência trabalhando em equipe.'
        MyPhotoProps={{
          src: 'https://avatars.githubusercontent.com/u/106279151?s=400&u=56b4b40b6262cc6e7818ee9a6b679a5c90a7a3f6&v=4',
          alt: 'Myphoto',
          hasBorderColor: 'PRIMARY',
        }} />
      <AboutTemplate About={'fsdfd'} header={'dssd'} />
      <GlobalStyles />
    </ThemeProvider>
  )
}
