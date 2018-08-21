import React from 'react';
import SortablePoint from './Point';
import styled from 'styled-components';
import { SortableContainer } from 'react-sortable-hoc';

const StyledSortableList = styled.ul`
  display: flex;
  flex-flow: column;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SortableList = SortableContainer(({ points }) => {
  return (
    <StyledSortableList className="points-list">
      {points.map(point => {
        return <SortablePoint key={point.id} index={point.id} title={point.title} />;
      })}
    </StyledSortableList>
  );
});

export default SortableList;
