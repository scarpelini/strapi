import styled, { css } from 'styled-components';
import { Button as StyledButton } from '@buffetjs/core';

const Button = styled(StyledButton)`
  margin-left: 10px;

  ${props =>
    props.disabled &&
    css`
      opacity: 0.4;
      cursor: default;
    `};
`;

export default Button;
