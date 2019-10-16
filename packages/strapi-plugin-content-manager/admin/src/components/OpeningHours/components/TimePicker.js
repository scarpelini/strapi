import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon, useEventListener } from '@buffetjs/core';
import { IconWrapper, TimePickerWrapper, TimeList } from '@buffetjs/styles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Label = styled.p`
  margin: 0 10px 0 20px;
  font-weight: 500;
  font-size: 1em;
  font-family: Lato;
  opacity: 0.6;
`;

const TimePickerWrapperExtended = styled(TimePickerWrapper)`
  border: 1px solid #e3e9f3;
  border-radius: 2px;
  z-index: auto;
`;

const Time = styled.p`
  position: relative;
  margin: 0 0 0 34px;
  padding: 0 10px;
  line-height: 34px;
  font-weight: 600;
  font-size: 1.3rem;
  font-family: Lato;
  color: #b3b5b9;
  cursor: pointer;
`;

// Generate options for TimeList display
const getOptions = () => {
  const hours = Array.from({ length: 24 }, (_, k) => k);
  const options = hours.reduce((acc, cur) => {
    const hour = cur < 10 ? `0${cur}` : cur;

    return acc.concat([
      { value: `${hour}:00`, label: `${hour}:00` },
      { value: `${hour}:30`, label: `${hour}:30` },
    ]);
  }, []);

  return options;
};

const TimePicker = props => {
  const { label, onChange, value } = props;
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef();

  const updateTime = time => {
    console.log('updateTime | time=', time);
    onChange({
      target: {
        name,
        type: 'text',
        value: time,
      },
    });
  };

  const handleClick = ({ target }) => {
    updateTime(target.value);
    setIsOpen(false);
  };

  // Custom hook to close the TimeList
  useEventListener('click', event => {
    if (!wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  });

  return (
    <Wrapper>
      <Label>{label}</Label>
      <TimePickerWrapperExtended ref={wrapperRef}>
        <Time onClick={() => setIsOpen(true)}>{value}</Time>
        <IconWrapper>
          <Icon icon="time" />
        </IconWrapper>
        <TimeList className={isOpen && 'displayed'}>
          {getOptions().map(option => (
            <li key={option.value}>
              <input
                type="radio"
                onChange={handleClick}
                value={option.value}
                id={option.value}
                name="time"
                checked={value}
                tabIndex="-1"
              />
              <label htmlFor={option.value}>{option.label}</label>
            </li>
          ))}
        </TimeList>
      </TimePickerWrapperExtended>
    </Wrapper>
  );
};

TimePicker.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default TimePicker;
