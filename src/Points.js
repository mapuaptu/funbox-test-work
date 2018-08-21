import React, { Component } from 'react';
import PointAllRemove from './PointsList/PointAllRemove';
import PointInput from './PointsList/PointInput';
import SortableList from './PointsList/PointsList';

import styled from 'styled-components';

const StyledPoints = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 40px;
  width: 30%;
  color: #fff;
  background-color: #282e33;
`;

class Points extends Component {
  render() {
    return (
      <StyledPoints className="points">
        <div>
          <PointInput />
          <SortableList distance={5} />
        </div>
        <div>
          <PointAllRemove />
        </div>
      </StyledPoints>
    );
  }
}

export default Points;
