import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Image from '@/components/atoms/Image';



export const ContainerAbout = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  width: 100vw;
  height: 100vh;

  /* Media Query for iPhones in portrait orientation */
  @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    height: auto;
    width: 122vw;
  }
`;

export const HeaderAbout = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Media Query for iPhones in portrait orientation */
  @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    height: auto;
  }
`;

export const About = styled(Text)`
  margin: 8rem 20rem;

  /* Media Query for iPhones in portrait orientation */
  @media (max-width: 414px) {
    margin: 2rem;
  }
`;

export const MyPhotoAbout = styled(Image)`
  margin: 14rem 21rem 21rem 10rem;
  align-items: center;

  /* Media Query for iPhones in portrait orientation */
  @media (max-width: 414px) {
    margin: 2rem;
  }
`;

export const BodyText = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  /* Media Query for iPhones in portrait orientation */
  @media (max-width: 414px) {
    flex-direction: column;
    height: auto;
  }
`;

export const GroupText = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px 50px 20px 0;

  /* Media Query for iPhones in portrait orientation */
  @media (max-width: 414px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const Title = styled(Text)`
  margin: 0.2rem 0.1rem;
`;

export const MyText = styled(Text)`
  text-align: right;
  margin-block-end: 5rem;
  text-align: justify;

  /* Media Query for iPhones in portrait orientation */
  @media (max-width: 414px) {
    text-align: center;
    margin: 2rem 0;
  }
`;

export const Title1 = styled(Text)`
  margin: 0.2rem 0.1rem;
`;

export const MyText1 = styled(Text)`
  text-align: right;
  text-align: justify;

  /* Media Query for iPhones in portrait orientation */
  @media (max-width: 414px) {
    text-align: center;
  }
`;

