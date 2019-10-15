import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const StyledTag = styled.span`
  padding: 8px 4px 8px 20px;
  margin: 2px 2px;
  font-size: 12px;
  font-weight: 500;
  font-family: Lato;
  text-align: center;
  border-radius: 3px;
  color: #464a4b;
  background-color: #e6eaed;
  cursor: pointer;
`;

const Icon = styled(FontAwesomeIcon)`
  margin: 0 10px;
`;

const Tag = props => {
  return (
    <StyledTag onClick={props.onClick}>
      {props.children}
      <Icon icon={faTimes} />
    </StyledTag>
  );
};

Tag.defaultProps = {
  children: null,
  onClick: () => {},
};

Tag.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Tag;
