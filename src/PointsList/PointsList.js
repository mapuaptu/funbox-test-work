import React from 'react';
import SortablePoint from './Point';
import styled from 'styled-components';
import { SortableContainer } from 'react-sortable-hoc';

import { Consumer } from '../AppContext';

const StyledSortableList = styled.ul`
  display: flex;
  flex-flow: column;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SortableList = SortableContainer(() => {
  return (
    <div>
      <Consumer>
        {({ state }) => {
          const points = state.points;

          return (
            <StyledSortableList className="points-list">
              {points.map(point => {
                return (
                  <SortablePoint
                    key={point.id}
                    id={point.id}
                    index={point.id}
                    title={point.title}
                  />
                );
              })}
            </StyledSortableList>
          );
        }}
      </Consumer>
    </div>
  );
});

export default SortableList;
