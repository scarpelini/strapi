import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tag from './Tag';

const StyledTagList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2px 0 18px;
  list-style: none;
`;

const TagList = props => {
  return (
    <StyledTagList>
      {props.tags.map(tag => (
        <Tag key={tag.id} onClick={() => props.onClickTag(tag)}>
          {tag.text}
        </Tag>
      ))}
    </StyledTagList>
  );
};

TagList.defaultProps = {
  tags: [],
  onClickTag: () => {},
};

TagList.propTypes = {
  tags: PropTypes.array.isRequired,
  onClickTag: PropTypes.func,
};

export default TagList;
