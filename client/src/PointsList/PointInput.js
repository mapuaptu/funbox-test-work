import React from 'react';
import { Consumer } from '../AppContext';

import styled from 'styled-components';

const StyledPointInput = styled.div`
  .point-input {
    display: block;
    margin: 0;
    margin-bottom: 50px;
    outline: none;
    border: none;
    border-radius: 2px;
    padding: 10px 15px;
    width: 100%;
    font-size: 22px;
    color: #c0c8d0;
    background-color: #3d444b;

    &::placeholder {
      color: #818991;
    }
  }
`;

const PointInput = () => {
  return (
    <Consumer>
      {({ handlerAddPoint }) => {
        return (
          <StyledPointInput>
            <input
              className="point-input"
              placeholder="Введите адрес"
              onKeyDown={handlerAddPoint}
            />
          </StyledPointInput>
        );
      }}
    </Consumer>
  );
};

export default PointInput;
