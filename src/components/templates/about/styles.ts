import styled from 'styled-components';
import TextComponent from '@/components/atoms/Text';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_DARK};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  /* Media Query */
  @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    height: auto;
    width: 122vw;
  }
`;

export const About = styled(TextComponent)`
  width: 11.688rem;
  height: 4.75rem;
  padding: 4.75ren 9.31rem;
  margin-left: 5.875rem;
  margin-top: 4.125rem;
  border: 1px solid red;

  /* Media Query */
  @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    width: 80%;
    padding: 1rem;
    margin-left: 1rem;
    margin-top: 1rem;
  }
`;

export const ContenteMain = styled.div`
  display: flex;
  margin-top: 4.188rem;
  margin-left: 6.875rem;
  margin-right: 3.25rem;
  margin-bottom: 5.625rem;
  border: 1px solid red;

  /* Media Query */
  @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    flex-direction: column;
    margin: 1rem;
  }
`;

export const Image = styled.div`
  width: 30.188rem;
  height: 30.188rem;
  padding: 30.2rem;
  border-radius: 2.5rem;
  margin-left: 6.875rem;
  border: 1px solid red;

  /* Media Query */
  @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    width: 80%;
    height: auto;
    padding: 1rem;
    margin: 1rem;
    display: none;
  }
`;

export const ContenteBoxText = styled.div`
  margin-left: 5.38rem;

  /* Media Query */
  @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    margin: 1rem;
  }
`;

export const ContenteText = styled.div``;

export const HeaderText = styled(TextComponent)`
  width: 18.313rem;
  height: 2.25rem;
  padding: 2.25rem 18.3rem;
  margin-bottom: 1.125rem;
  border: 1px solid red;

  /* Media Query */
  @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    width: 80%;
    padding: 1rem;
    margin: 1rem;
  }
`;

export const BodyText = styled(TextComponent)`
  width: 34.313rem;
  height: 13.75rem;
  padding: 13.8rem 34.3rem;
  border: 1px solid red;

  /* Media Query */
  @media only screen and (max-device-width: 750px) and (orientation: portrait) {
    width: 80%;
    padding: 1rem;
    margin: 1rem;
  }
`;