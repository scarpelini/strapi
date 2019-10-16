import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

const StyledMarker = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 44px;
  color: #1c5de7;
`;

const Marker = () => {
  return (
    <StyledMarker>
      <Icon icon={faMapPin} />
    </StyledMarker>
  );
};

export default Marker;
