import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TimeRange, Toggle } from './';
import weekdays from '../weekdays.json';

const Wrapper = styled.div`
  margin-top: 40px;
`;

const Header = styled.div`
  padding-bottom: 15px;
`;

const Divisor = styled.hr`
  position: block;
  width: 100%;
  margin-left: 20px;
  border: 1px solid black;
  opacity: 0.2;
`;

const Weekday = props => {
  const { weekday, timeRange, opened, onAdd, onRemove, onChange } = props;
  return (
    <Wrapper>
      <Header>
        <Toggle
          label={weekdays[weekday]}
          value={opened}
          onChange={value => {
            props.onChangeOpenClose(weekday, value);
          }}
        />
      </Header>
      {timeRange.map((item, index) => (
        <TimeRange
          key={index}
          from={item.from}
          to={item.to}
          opened={opened}
          canRemove={index > 0}
          canAdd={timeRange.length < 4}
          onClickAdd={() => onAdd(weekday, item)}
          onClickRemove={() => onRemove(weekday, item, index)}
          onChange={(from, to) => onChange(weekday, { from, to }, index)}
        />
      ))}
      <Divisor />
    </Wrapper>
  );
};

Weekday.defaultProps = {
  onAdd: () => {},
  onRemove: () => {},
  onChange: () => {},
  onChangeOpenClose: () => {},
};

Weekday.propTypes = {
  weekday: PropTypes.number.isRequired,
  timeRange: PropTypes.array.isRequired,
  opened: PropTypes.bool.isRequired,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  onChange: PropTypes.func,
  onChangeOpenClose: PropTypes.func,
};

export default Weekday;
