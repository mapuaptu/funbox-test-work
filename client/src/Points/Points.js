import React, { Component } from 'react';
import { Consumer } from '../AppContext';
import PointAllRemove from './PointAllRemove';
import PointInput from './PointInput';
import PointsList from './PointsList';

import styled from 'styled-components';

const StyledPoints = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 40px;
  color: #fff;
  background-color: #282e33;
`;

class Points extends Component {
  render() {
    return (
      <StyledPoints className="points">
        <div>
          <PointInput />
          <Consumer>
            {({ handlerSortList }) => {
              console.log('refresh-list');

              return <PointsList distance={5} onSortEnd={handlerSortList} />;
            }}
          </Consumer>
        </div>
        <div>
          <PointAllRemove />
        </div>
      </StyledPoints>
    );
  }
}

export default Points;
