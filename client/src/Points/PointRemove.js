import React from 'react';
import { Consumer } from '../AppContext';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import removeIcon from '../icons/remove.svg';

const StyledPointRemove = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  transition: opacity 0.3s linear;
  cursor: pointer;

  img {
    display: block;
    width: 10px;
    height: 10px;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const PointRemove = ({ id }) => {
  return (
    <Consumer>
      {({ handlerRemovePoint }) => {
        return (
          <StyledPointRemove
            className="point__remove"
            onClick={() => {
              handlerRemovePoint(id);
            }}
          >
            <img src={removeIcon} alt="Удалить" />
          </StyledPointRemove>
        );
      }}
    </Consumer>
  );
};

PointRemove.propTypes = {
  onClick: PropTypes.func,
};

export default PointRemove;
