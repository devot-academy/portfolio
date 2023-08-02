import React from 'react';
import * as Style from './styles';

export interface IHome {
  logo: string;
  presentation: string;
  line: string;
  main: string;
  summary: string;
  image: string;
  button: string;
  link: string;
}

export default function HomeTemplate(props: IHome) {
  const { logo, line, image, button, link, presentation, main, summary } = props;

  return (
    <Style.Container>
      <Style.ContentNav>
        <Style.Logo />
        <Style.Link>Link 1</Style.Link>
        <Style.Link>Link 2</Style.Link>
        <Style.Link>Link 3</Style.Link>
        <Style.Link>Link 4</Style.Link>
      </Style.ContentNav>
      <Style.Line />
      <Style.PresentationContainer type='headline-5'>
        {presentation}
      </Style.PresentationContainer>
      <Style.ContentWrapper>
        <Style.MainContainer type='headline-1'>
          {main}
        </Style.MainContainer>
        <Style.Image />
      </Style.ContentWrapper>
      <Style.SummaryContainer type='headline-6'>
        {summary}
      </Style.SummaryContainer>
      <Style.ContentButton>
        <Style.Button>{button}</Style.Button>
        <Style.Button>{button}</Style.Button>
      </Style.ContentButton>
    </Style.Container>
  );
}
