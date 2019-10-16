import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TimePicker } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0 20px;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

const IconButton = styled.button`
  padding: 10px;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;

const TimeRange = props => {
  return (
    <Wrapper disabled={!props.opened}>
      <TimePicker
        label="Abre"
        value={props.from}
        onChange={({ target: { value } }) => {
          props.onChange(value, props.to);
        }}
      />
      <TimePicker
        label="Fecha"
        value={props.to}
        onChange={({ target: { value } }) => {
          props.onChange(props.from, value);
        }}
      />
      {props.canRemove ? (
        <IconButton type="button" onClick={props.onClickRemove}>
          <FontAwesomeIcon icon={faTrash} />
        </IconButton>
      ) : (
        <IconButton
          type="button"
          onClick={props.onClickAdd}
          disabled={!props.canAdd}
        >
          <FontAwesomeIcon icon={faPlus} />
        </IconButton>
      )}
    </Wrapper>
  );
};

TimeRange.defaultProps = {
  canRemove: true,
  canAdd: true,
  opened: true,
  onClickRemove: () => {},
  onClickAdd: () => {},
  onChange: () => {},
};

TimeRange.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  opened: PropTypes.bool,
  canRemove: PropTypes.bool,
  canAdd: PropTypes.bool,
  onClickRemove: PropTypes.func,
  onClickAdd: PropTypes.func,
  onChange: PropTypes.func,
};

export default TimeRange;
