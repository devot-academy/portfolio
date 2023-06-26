import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/global';
import { selectTheme } from '@/global/theme'
import Text from '@/components/atoms/Text';

export default function Home() {
  const theme = selectTheme({
    color: 'default',
    font: 'default',
  });
  return (
    <ThemeProvider theme={theme}>
      <Text type="headline-1" color='ACCENTED'>Headline</Text>
      <Text type="headline-2" color='ACCENTED_DARK'>Headline</Text>
      <Text type="headline-3">Headline</Text>
      <Text type="headline-4">Headline</Text>
      <Text type="headline-5" color='ERROR'>Headline</Text>
      <Text type="headline-6" color='ACCENTED_DARK'>Headline</Text>
      <Text type="Subtitle-1" color='PRIMARY'>Subtitle 1</Text>
      <Text type="Subtitle-2" color='PRIMARY_DARK'>Subtitle 2</Text>
      <Text type="Body-1" color='BACKGROUND'>Body 1</Text>
      <Text type="Body-2" color='ACCENTED_DARK'>Body 2</Text>
      <Text type="BUTTON" color='ACCENTED'>BUTTON</Text>
      <Text type="caption" color='ACCENTED_DARK'>caption</Text>
      <Text type='OVERLINE' color='ACCENTED_DARK'>OVERLINE</Text>
  
      <GlobalStyles /> 
    </ThemeProvider>
  )
}
