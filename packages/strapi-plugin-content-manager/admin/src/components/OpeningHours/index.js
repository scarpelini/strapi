import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isEmpty, isArray, isEqual } from 'lodash';
import { Weekday } from './components';
import defaultValue from './defaultValue.json';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 14px;
`;

class OpeningHours extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      draftValue: this.parseValue(props.value),
      error: false,
    };
  }

  componentDidMount() {
    this.notifyChanges();
  }

  componentDidUpdate(prevProps) {
    if (
      !isEqual(this.props.value, prevProps.value) &&
      !isEqual(this.props.value, this.state.draftValue)
    ) {
      this.setState(
        {
          draftValue: this.parseValue(this.props.value),
        },
        this.notifyChanges
      );
    }
  }

  parseValue = value => {
    if (isEmpty(value)) return defaultValue;

    if (isArray(value)) return value;

    try {
      return JSON.parse(value);
    } catch (error) {
      return defaultValue;
    }
  };

  notifyChanges = () => {
    this.props.onChange({
      target: {
        name: this.props.name,
        value: this.state.draftValue,
        type: 'json',
      },
    });
  };

  handleAdd = (weekday, timeRange) => {
    this.setState(
      state => ({
        draftValue: state.draftValue.map(item => {
          if (item.weekday === weekday) {
            return {
              ...item,
              timeRange: [
                ...item.timeRange,
                {
                  ...timeRange,
                },
              ],
            };
          }
          return item;
        }),
      }),
      this.notifyChanges
    );
  };

  handleRemove = (weekday, timeRange, index) => {
    this.setState(
      state => ({
        draftValue: state.draftValue.map(item => {
          if (item.weekday === weekday) {
            return {
              ...item,
              timeRange: item.timeRange.filter((_, i) => i !== index),
            };
          }
          return item;
        }),
      }),
      this.notifyChanges
    );
  };

  handleChange = (weekday, timeRange, index) => {
    this.setState(
      state => ({
        draftValue: state.draftValue.map(item => {
          if (item.weekday === weekday) {
            return {
              ...item,
              timeRange: item.timeRange.map((item, i) =>
                i === index ? { ...timeRange } : item
              ),
            };
          }
          return item;
        }),
      }),
      this.notifyChanges
    );
  };

  handleChangeOpenClose = (weekday, value) => {
    this.setState(
      state => ({
        draftValue: state.draftValue.map(item => {
          if (item.weekday === weekday) {
            return {
              ...item,
              opened: value,
            };
          }
          return item;
        }),
      }),
      this.notifyChanges
    );
  };

  render() {
    const { draftValue } = this.state;
    return (
      <Wrapper>
        {draftValue.map(item => (
          <Weekday
            key={item.weekday}
            weekday={item.weekday}
            timeRange={item.timeRange}
            opened={item.opened}
            onAdd={this.handleAdd}
            onRemove={this.handleRemove}
            onChange={this.handleChange}
            onChangeOpenClose={this.handleChangeOpenClose}
          />
        ))}
      </Wrapper>
    );
  }
}

OpeningHours.defaultProps = {
  name: '',
  value: null,
  onChange: () => {},
};

OpeningHours.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default OpeningHours;
