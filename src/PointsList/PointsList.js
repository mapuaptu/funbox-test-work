import React from 'react';
import Point from './Point';
import styled from 'styled-components';
import uuid from 'uuid';
import { SortableContainer } from 'react-sortable-hoc';

import { Consumer } from '../AppContext';

const StyledSortableList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const PointsList = SortableContainer(() => {
  return (
    <div>
      <Consumer>
        {({ state }) => {
          const points = state.points;

          return (
            <StyledSortableList className="points-list">
              {points.map((point, index) => {
                console.log(point);
                return <Point key={uuid.v4()} id={point.id} index={index} title={point.title} />;
              })}
            </StyledSortableList>
          );
        }}
      </Consumer>
    </div>
  );
});

export default PointsList;
