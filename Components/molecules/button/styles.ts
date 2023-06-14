import styled, { css } from 'styled-components';

import Text from '@/components/atoms/Text';
import Icon from '@/components/atoms/icon';

import { ButtonInterface } from './interfaces';

const sizeMapper = {
  small: css`
    padding: 0.5rem 1rem;
  `,
  medium: css`
    padding: 0.75rem 1.5rem;
  `,
  large: css`
    padding: 1rem 2rem;
  `,
}

export const ButtonComponent = styled.button<ButtonInterface>`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  white-space: nowrap;
  border-radius: 0.25rem;
  background-color: ${({ theme, backgroundColor }) => {
    if (backgroundColor === undefined)
      return theme.COLORS.ACCENTED;
    else if (backgroundColor === 'tranparent' )
      return css`transparent`;
    else 
       return theme.COLORS[backgroundColor]
  }};
  color: ${({ theme })=> theme.COLORS.PRIMARY_LIGHT };
  border: none;
  box-shadow: 0 0.125rem 0.313rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  ${({ size }) => size !== undefined ? sizeMapper[size] : sizeMapper.medium}
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme })=> theme.COLORS.ACCENTED };
    filter: brightness(90%);
  }
`;

export const TextComponent = styled(Text)``;
export const IconComponent = styled(Icon)``;
