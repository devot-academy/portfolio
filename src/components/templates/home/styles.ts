import styled from 'styled-components';
import Image from '@/components/atoms/Image';
import Text from '@/components/atoms/Text';

import Button from '@/components/molecules/button';
import Navbar from '@/components/organisms/nav-bar';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.ACCENTED};
  width: 100vw;
  height: 100vh;

  /* Media Query para iPhones modernos em orientação retrato */
  @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    height: auto;
    width: 122vw;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Media Query para iPhones modernos em orientação retrato */
  @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    flex-direction: column;
    height: auto;
  }
`;

export const Logo = styled(Image)`
  margin: 2rem 3rem;

  /* Media Query para iPhones modernos em orientação retrato */
  @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    margin: 1rem 1.5rem;
  }
`;

export const ContentMenu = styled.div`
  margin-right: 3rem;

  /* Media Query para iPhones modernos em orientação retrato */
  @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    margin-right: 1.5rem;
  }
`;

export const Menu = styled(Navbar)``;

export const Body = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  /* Media Query para iPhones modernos em orientação retrato */
  @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    flex-direction: column;
  }
`;

export const ContentInfo = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* Media Query para iPhones modernos em orientação retrato */
  @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    width: 80%;
    align-items: flex-start;
  }
`;

export const ContentPresentation = styled.div`
  margin-bottom: 6rem;

  /* Media Query para iPhones modernos em orientação retrato */
  @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    margin-bottom: 3rem;
  }
`;

export const Presentation = styled(Text)``;
export const Title = styled(Text)`
  text-transform: uppercase;
`;
export const AboutMe = styled(Text)`
  text-align: right;
`;

export const ContentButton = styled.div`
  display: flex;
  margin-top: 2rem;

  /* Media Query para iPhones modernos em orientação retrato */
  @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    margin-top: 1rem;
  }
`;

export const ButtonPrimary = styled(Button)`
  margin-right: 2rem;

  /* Media Query para iPhones modernos em orientação retrato */
  @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    margin-right: 1rem;
  }
`;

export const ButtonSecondary = styled(Button)``;

export const MyPhoto = styled(Image)`
  /* Media Query para iPhones modernos em orientação retrato */
  @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    width: 80%;
  }
`;
