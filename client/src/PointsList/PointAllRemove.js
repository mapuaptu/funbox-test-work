import React from 'react';
import { Consumer } from '../AppContext';

import styled from 'styled-components';

const StyledPointRemove = styled.button`
  display: block;
  border: 1px solid #50d4c3;
  border-radius: 3px;
  padding: 10px 20px;
  width: 100%;
  font-size: 13px;
  text-align: center;
  color: #50d4c3;
  background-color: transparent;
  transition: opacity 0.3s linear;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

const PointAllRemove = () => {
  return (
    <Consumer>
      {({ state, handlerRemoveAllPoints }) => {
        if (state.points.length >= 2) {
          return (
            <StyledPointRemove onClick={handlerRemoveAllPoints}>Удалить все</StyledPointRemove>
          );
        }
      }}
    </Consumer>
  );
};

export default PointAllRemove;
