import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Image from '@/components/atoms/Image';

export const ContainerAbout = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  width: 100vw;
  height: 100vh;
  /* Media Query para iPhones modernos em orientação retrato */
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
 /* Media Query para iPhones modernos em orientação retrato */
 @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    flex-direction: column;
    height: auto;
  }
`
export const About = styled(Text)`
  margin: 8rem 20rem;

 
`;

export const MyPhotoAbout = styled(Image)`
    margin: 14rem 21rem 21rem 10rem;
    align-items: center;
    /* Media Query para iPhones modernos em orientação retrato */
  @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    margin: 1rem 1.5rem;
  }
    
 
`;

export const BodyText= styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
 /* Media Query para iPhones modernos em orientação retrato */
 @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    margin-right: 1.5rem;
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
   /* Media Query para iPhones modernos em orientação retrato */
   @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    flex-direction: column;
  }

`;
export const Title = styled(Text)`
  margin: 0.2rem 0.1rem;
  /* Media Query para iPhones modernos em orientação retrato */
  @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    margin-bottom: 3rem;
  }
 

`;

export const MyText = styled(Text)`
  text-align: right;
  margin-block-end: 5rem;
  text-align: justify;
  
`;
export const Title1 = styled(Text)`
  margin: 0.2rem 0.1rem;
`

export const MyText1 = styled(Text)`
  text-align: right;
  text-align: justify;

`;








