import React from 'react';
import { Consumer } from '../AppContext';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledPointRemove = styled.button`
  display: block;
  border: 1px solid #638bae;
  border-radius: 3px;
  padding: 10px 20px;
  width: 100%;
  font-size: 14px;
  text-align: center;
  color: #638bae;
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

PointAllRemove.propTypes = {
  handlerRemoveAllPoints: PropTypes.func,
};

export default PointAllRemove;
