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
      <HomeTemplate
      presentation="Eu sou Raissa Marques," 
      message="REACT DEVELOP"
      text="Tenho 24 anos e sou formada em pedagogia. Realizando,  
      transição para  a area de programação. Ganhei  experiência em trabalho 
      em equipe nos ultimos 6 meses e estou determinada a me destacar nesse novo
      campo."
      />
      <GlobalStyles /> 
    </ThemeProvider>
  )
}
