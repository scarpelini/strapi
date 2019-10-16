import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TimePicker as StyledTimePicker } from '@buffetjs/core';
import { Label } from './';

const TimePickerWrapper = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ExtendedLabel = styled(Label)`
  margin-left: 20px;
  margin-right: 10px;
`;

const TimePicker = props => {
  return (
    <TimePickerWrapper>
      <ExtendedLabel>{props.label}</ExtendedLabel>
      <StyledTimePicker
        name="time"
        value={props.value}
        seconds={false}
        {...props}
      />
    </TimePickerWrapper>
  );
};

TimePicker.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default TimePicker;
