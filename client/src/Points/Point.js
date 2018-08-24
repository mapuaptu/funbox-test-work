import React from 'react';
import PointRemove from './PointRemove';
import { SortableElement } from 'react-sortable-hoc';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPoint = styled.li`
  position: relative;
  list-style-type: none;
  margin-bottom: 20px;
  border: 1px solid #c0c8d0;
  padding: 20px 10px;
  word-break: break-all;
  color: #c0c8d0;
  background-color: #282e33;
`;

const Point = SortableElement(({ title, id }) => {
  return (
    <StyledPoint className="point">
      <div className="point__title">{title}</div>
      <PointRemove id={id} />
    </StyledPoint>
  );
});

Point.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
};

export default Point;
