import styled, { css } from 'styled-components';
import { IInputText } from '.';

export const InputTextComponent = styled.input.attrs(({ type }: IInputText) => ({
  type,
})) <IInputText> `

    font-size: 15px;
    padding: 0.75rem 1.5rem;
    width: 389px;
    height: 70px;
    display: flex;
    border-radius: 0.25rem;
    background-color: ${({ theme, backgroundColor }) => {
    if (backgroundColor === undefined)
      return theme.COLORS.ACCENTED;
    else if (backgroundColor === 'tranparent')
      return css`transparent`;
    else
      return theme.COLORS[backgroundColor]
  }};
  color: ${({ theme }) => theme.COLORS.PRIMARY_LIGHT};
  border: none;
  box-shadow: 0 0.125rem 0.313rem rgba(0, 0, 0, 0.2);
  cursor: pointer;


`;