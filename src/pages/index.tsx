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
          LogoProps={{
            src: 'https://img.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_343694-1365.jpg?w=740&t=st=1691439416~exp=1691440016~hmac=4afe99b458af57467862fb05341260e40da257efc125ea6dcd6478928695a3df',
            alt: 'Logo'
          }}
          NavbarProps={{
            AboutButtonProps: {
              label: 'Sobre',
              onClick: () => {}
            },
            ContactButtonProps: {
              label: 'Contato',
              onClick: () => {}
            },
            ProjectButtonProps: {
              label: 'Projetos',
              onClick: () => {}
            },
            ResumeButtonProps: {
              label: 'Resumo',
              onClick: () => {}
            }
          }}
          presentation="Hi! I'm Raissa Marques"
          title='react developer'
          description=' Tenho 24 anos e sou formada em pedagogia. Realizando,  transição para  a area de programação. Ganhei  experiência em trabalho em equipe nos ultimos 6 meses e estou determinada a me destacar nesse novo campo.'
          ButtonPrimary={{
            label: 'LinkedIn',
            onClick: () => {},
            backgroundColor: 'PRIMARY'
          }}
          ButtonSecondary={{
            label: 'GitHub',
            onClick: () => {},
          }}
          MyPhotoProps={{
            src: 'https://avatars.githubusercontent.com/u/98561479?v=4',
            alt: 'Myphoto',
            hasBorderColor: 'PRIMARY',

          }}
      />
      
      <GlobalStyles /> 
    </ThemeProvider>
  )
}
