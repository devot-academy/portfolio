import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/global';
import { selectTheme } from '@/global/theme'
import AboutTemplate from '@/components/templates/about';
import { MyPhoto } from '../components/templates/home/styles';


export default function Home() {
  const theme = selectTheme({
    color: 'default',
    font: 'default',
  });

  return (
    <ThemeProvider theme={theme}>
      <AboutTemplate
      AboutProps= "About"
      MyPhotoAboutProps={{
        src: 'https://avatars.githubusercontent.com/u/98561479?v=4',
        alt: 'Myphoto',
        hasBorderColor: 'PRIMARY',
      }}
      Title="About Me"
      MyText="Olá, sou Raissa Marques, 24 anos, atualmente focada na transição para a área de programação. 
              Estou aprendendo TypeScript, Design System e Design Atômico. 
              Faço parte da equipe Devot, onde trabalhamos com sprints semanais 
              em projetos colaborativos. Minhas habilidades de comunicação e trabalho em equipe estão direcionadas para criar soluções inovadoras enquanto trilho meu caminho de sucesso na tecnologia."
      Title1="My road"
      MyText1="Minha trajetória profissional teve início com uma graduação em Pedagogia. Durante esse período, desenvolvi habilidades valiosas em comunicação, trabalho em equipe e cultivando um profundo apreço pelo universo da educação. Contudo, à medida que o tempo passava, percebi uma nova paixão emergindo dentro de mim: a programação. O mundo tecnológico me cativou de maneira única, e assim, decidi abraçar essa mudança de carreira com total determinação.





      "/>
      <GlobalStyles /> 
    </ThemeProvider>
  )
}
