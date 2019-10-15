import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, InputText } from './';

const StyledForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const keyCodes = {
  enter: 13,
  space: 32,
  semicolon: 186,
  comma: 188,
};

const delimiters = [
  keyCodes.enter,
  keyCodes.space,
  keyCodes.semicolon,
  keyCodes.comma,
];

const Form = props => {
  const [value, setValue] = useState('');

  return (
    <StyledForm>
      <InputText
        name="tagname"
        type="text"
        placeholder="Tag name"
        maxLength="20"
        value={value}
        onKeyDown={event => {
          if (delimiters.includes(event.keyCode)) {
            event.preventDefault();
            event.stopPropagation();
            props.onClickAdd(value);
            setValue('');
          }
        }}
        onChange={({ target: { value } }) => setValue(value)}
      />
      <Button
        color="primary"
        label="Add"
        disabled={!value}
        icon="plus"
        onClick={() => {
          props.onClickAdd(value);
          setValue('');
        }}
      />
    </StyledForm>
  );
};

Form.defaultProps = {
  onClickAdd: () => {},
};

Form.propTypes = {
  onClickAdd: PropTypes.func,
};

export default Form;
