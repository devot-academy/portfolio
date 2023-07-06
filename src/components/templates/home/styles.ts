import styled from 'styled-components';
import Text from '@/components/atoms/Text';

export const Container = styled.div`
 
  background-color: ${({ theme }) => theme.COLORS.NETRAL};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  
`;


export const container = styled(Text)`
  width: 60vh;
  height: 60vh;

`;
export const MessageContainer = styled(Text)`
  
`;


export const presentation = styled(Text)`

`;


export const message = styled(Text)`
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
 


`;

export const text = styled(Text)`



`;
export const Message = styled(Text)`
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;




