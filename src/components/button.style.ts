import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'beige',
  secondary: 'bisque',
  danger: 'antiquewhite',
  success: 'aliceblue',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 450px;
  height: 150px;
  margin: 10px;
  border-radius: 40px;
  font-size: 25px;

  background-color: ${(props) => props.theme['green-300']};
  color: ${(props) => props.theme.white};

  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }} */
`
