import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Toggle as StyledToggle } from '@buffetjs/core';

const Wrapper = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Label = styled.p`
  flex: 1;
  font-weight: 500;
  font-size: 1.1em;
  font-family: Lato;
`;

const Toggle = props => {
  return (
    <Wrapper>
      <Label>{props.label}</Label>
      <StyledToggle
        name="toggle"
        value={props.value}
        onChange={({ target: { value } }) => {
          props.onChange(value);
        }}
      />
    </Wrapper>
  );
};

Toggle.defaultProps = {
  value: false,
  onChange: () => {},
};

Toggle.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};

export default Toggle;
