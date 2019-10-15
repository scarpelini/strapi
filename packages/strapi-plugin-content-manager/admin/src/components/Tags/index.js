import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty, isArray, isEqual } from 'lodash';
import { Wrapper, TagList, Form } from './components/';
import defaultValue from './defaultValue.json';

class Tags extends React.PureComponent {
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
      return [];
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

  addTag = text => {
    this.setState(
      state => ({
        draftValue: [
          ...state.draftValue,
          {
            id: state.draftValue.length + 1,
            text,
          },
        ],
      }),
      this.notifyChanges
    );
  };

  removeTag = tag => {
    this.setState(
      state => ({
        draftValue: state.draftValue.filter(item => item.id !== tag.id),
      }),
      this.notifyChanges
    );
  };

  render() {
    const { draftValue } = this.state;
    return (
      <Wrapper>
        <TagList tags={draftValue} onClickTag={this.removeTag} />
        <Form onClickAdd={this.addTag} />
      </Wrapper>
    );
  }
}

Tags.defaultProps = {
  name: '',
  value: null,
  onChange: () => {},
};

Tags.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default Tags;
