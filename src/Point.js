import React, { Component } from 'react';
import PropTypes from 'prop-types';
import removeIcon from './icons/remove.svg';

import styled from 'styled-components';

const StyledPoint = styled.div`
  position: relative;
  margin-bottom: 20px;
  border: 1px solid #c0c8d0;
  padding: 20px 10px;
  color: #c0c8d0;

  .point__remove {
    position: absolute;
    right: 5px;
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

class Point extends Component {
  render() {
    const { title } = this.props;

    return (
      <StyledPoint className="point">
        <div className="point__title">{title}</div>
        <div className="point__remove" onClick={this.props.removePointHandler}>
          <img src={removeIcon} alt="Удалить" />
        </div>
      </StyledPoint>
    );
  }
}

Point.propTypes = {};

export default Point;
