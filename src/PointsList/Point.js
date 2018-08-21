import React from 'react';
import PointRemove from './PointRemove';
import { SortableElement } from 'react-sortable-hoc';
import styled from 'styled-components';

const StyledPoint = styled.li`
  position: relative;
  list-style-type: none;
  margin-bottom: 20px;
  border: 1px solid #c0c8d0;
  padding: 20px 10px;
  color: #c0c8d0;
`;

const SortablePoint = SortableElement(({ title, id }) => {
  return (
    <StyledPoint className="point">
      <div className="point__title">{title}</div>
      <PointRemove id={id} />
    </StyledPoint>
  );
});

export default SortablePoint;
