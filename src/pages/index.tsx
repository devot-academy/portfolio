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
      MyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      Title1="My road"
      MyText1="Lo. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      <GlobalStyles /> 
    </ThemeProvider>
  )
}
