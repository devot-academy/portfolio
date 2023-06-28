import styled from 'styled-components';
import { IconInterface } from './index';

export const IconSize = {
  small: '1rem',
  medium: '2rem',
  large: '4rem',
};

export const IconColor = {
  green: '#2ECC40',
  white: '#FFFFFF',
  black: '#111111',
};

export const StyledIcon = styled.span<IconInterface>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => IconColor[color]};
  font-size: ${({ size }) => IconSize[size]};
`;
