import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledPointRemove = styled.div`
  border: 1px solid #50d4c3;
  border-radius: 3px;
  padding: 10px 20px;
  font-size: 12px;
  text-align: center;
  color: #50d4c3;
  transition: opacity 0.3s linear;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

class PointRemove extends Component {
  removeAll = () => {
    this.props.removeAllPoints();
  };

  render() {
    return <StyledPointRemove onClick={this.removeAll}>Удалить все</StyledPointRemove>;
  }
}

PointRemove.propTypes = {};

export default PointRemove;
