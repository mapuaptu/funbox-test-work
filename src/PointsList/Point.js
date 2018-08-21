import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import styled from 'styled-components';

import removeIcon from '../icons/remove.svg';

const StyledPoint = styled.li`
  position: relative;
  list-style-type: none;
  margin-bottom: 20px;
  border: 1px solid #c0c8d0;
  padding: 20px 10px;
  color: #c0c8d0;

  .point__remove {
    position: absolute;
    right: 8px;
    top: 5px;
    width: 10px;
    height: 10px;
    transition: opacity 0.3s linear;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      opacity: 0.6;
    }
  }
`;

const Point = props => {
  return (
    <StyledPoint className="point">
      <div className="point__title">{props.title}</div>
      <div className="point__remove">
        <img src={removeIcon} alt="Удалить" />
      </div>
    </StyledPoint>
  );
};

const SortablePoint = SortableElement(props => {
  return <Point title={props.title} />;
});

export default SortablePoint;
