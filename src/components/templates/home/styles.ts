import styled from 'styled-components';
import Image from '@/components/atoms/Image';
import Text from '@/components/atoms/Text';

import Button from '@/components/molecules/button';
import Navbar from '@/components/organisms/nav-bar';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.NETRAL};
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
` ;

export const Logo = styled(Image)`
  margin: 4rem 6rem;
`;

export const ContentMenu = styled.div`
  margin-right: 6rem;
`;

export const Menu = styled(Navbar)``;

export const Body = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ContentInfo = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


export const ContentPresentation = styled.div`
  margin-bottom: 10rem;
`

export const Presentation = styled(Text)``;
export const Title = styled(Text)`
  text-transform: uppercase;
`;
export const AboutMe = styled(Text)`
  text-align: right;
`;

export const ContentButton = styled.div`
  display: flex;
`

export const ButtonPrimary = styled(Button)`
  margin-right: 3rem;
`
export const ButtonSecondary = styled(Button)``

export const MyPhoto = styled(Image)``;




/*
export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Logo = styled.div`
  margin-top: 2.875rem;
  margin-left: 4.813rem;
  margin-right: 33.838rem;
  width: 16.458rem;
  height: 7.063rem;
  flex-shrink: 0;
  border: 3px solid black; 
`;

  export const Link = styled.div`
  width: 8.125rem;
  height: 2.75rem;
  border: 3px solid black;
  margin-left: 3.563rem;
  `;

  export const Line = styled.div`
  width: 91px;
  height: 0px;
  margin-top: 16rem;
  margin-left: 36.188rem;
  flex-shrink: 0;
  stroke-width: 5px;
  stroke: #fff;
`;

export const Presentation = styled(Text)`
  width: 500px;
  height: 35px;
  flex-shrink: 0;
  border: 1px solid black;
`;

export const Title = styled(Text)`
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  display: flex;
  width: 70px;
  height: 70px;
  padding-bottom: 0px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
`;

export const Description = styled(Text)`
  display: flex;
  width: 300px;
  height: 101px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const Image = styled.div`
  width: 132.498px;
  height: 132.498px;
  margin-left: 70.438rem;
  flex-shrink: 0;
  border: 1px solid #fff;
`;

export const ContainerButton = styled.div`
  display: flex;
  margin-top: 6.5rem;
  padding: 2.125rem;
`;

export const Button = styled.div`
  margin-left: 3rem;
  width: 11.5rem;
  height: 3.5rem;
  border: 1px solid black;
`;
*/