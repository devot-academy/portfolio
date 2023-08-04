import styled from 'styled-components';
import TextComponent from '@/components/atoms/Text';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

export const ContentNav = styled.div`
  display: flex;
  border: 1px solid red;
  align-items: center;
`;

export const Logo = styled.div`
  margin-top: 2.875rem;
  margin-left: 4.813rem;
  margin-right: 33.938rem;
  width: 16.438rem;
  height: 7.063rem;
  padding: 7.06rem 16.4rem;
  flex-shrink: 0;
  border: 1px solid red;
`;

export const Link = styled.div`
  width: 8.125rem;
  height: 2.75rem;
  padding: 2rem 8.13rem;
  border: 1px solid red;
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

export const PresentationContainer = styled(TextComponent)`
  width: 18.3rem;
  height: 2.25rem;
  padding: 2.25rem 18.3rem;
  border: 1px solid red;
  margin-left: 5.5rem;
  margin-top: 4.938rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  margin-top: 0.688rem;
`;

export const MainContainer = styled(TextComponent)`
  width: 55rem;
  height: 16rem;
  padding: 9.5rem 37.3rem;
  border: 1px solid blue;
  text-align: start;
  margin-left: 5.5rem;
  margin-top: 0.688rem;
  flex-shrink: 0;
`;

export const Image = styled.div`
  width: 29.313rem;
  height: 29.313rem;
  padding:  29.3125rem 29.3125rem;
  margin-left: 14.438rem;
  flex-shrink: 0;
  border: 1px solid #fff;
`;

export const SummaryContainer = styled(TextComponent)`
  width: 31.4rem;
  height: 8.19rem;
  padding: 8.19rem 31.4rem;
  border: 1px solid green;
  text-align: right;
  margin-top: -37rem;
  margin-left: 10.438rem;
  flex-shrink: 0;  
`;

export const ContentButton = styled.div`
  display: flex;
  margin-top: 6.5rem;
`;

export const Button = styled.button`
margin-left: 11.063rem;
width: 11.5rem;
height: 3.5rem;
padding: 1.5rem 7.5rem;
`;
