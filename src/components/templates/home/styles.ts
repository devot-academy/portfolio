import styled from 'styled-components';

export const Container = styled.div`

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div``;

export const Navbar = styled.nav``;

export const Main = styled.main``;

export const TextComponent = styled.p`

  background-color: gray;

 &.headline-5 {
  color: white;
  font-size: 2.4rem;
  font-weight: 40rem;
  line-height: 3.6rem;
}

  &.headline-1 {
  color: black;
  font-size: 9.6rem;
  font-weight: 30rem;
  line-height: 7.6rem;
  letter-spacing: -0.15rem;

}

  &.headline-6 {
  font-size: 2rem;
  font-weight: 40rem;
  line-height: 2.8rem;
  letter-spacing: 0.015rem;
}
`;


export const ImageComponent = styled.img``;

export const ButtonComponent = styled.button``;

export const SocialMedia = styled.div``;
