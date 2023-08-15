import { text } from 'stream/consumers';
import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import { ImageComponent } from '@/components/atoms/Image/styles';
import Image from '@/components/atoms/Image';
import { Body } from '../home/styles';



export const ContainerAbout = styled.div`
  background-color: ${({ theme }) => theme.COLORS.NETRAL};
  width: 100vw;
  height: 100vh;
`; 

export const HeaderAbout = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;  

`
export const About = styled(Text)`
  margin: 8rem 20rem;
`;

export const MyPhotoAbout = styled(Image)`
    margin: 14rem 21rem 21rem 10rem;
    align-items: center;
`;

export const BodyText= styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;


`;
export const GroupText = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px 50px 20px 0;
  

`;
export const Title = styled(Text)`
  margin: 0.2rem 0.1rem;

`;

export const MyText = styled(Text)`
  text-align: right;
  margin-block-end: 5rem;
  
`;
export const Title1 = styled(Text)`
  margin: 0.2rem 0.1rem;
`

export const MyText1 = styled(Text)`
  text-align: right;
`;




