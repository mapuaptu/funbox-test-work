import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledPoint = styled.div`
  margin-bottom: 20px;
  border: 1px solid #c0c8d0;
  padding: 20px 10px;
  color: #c0c8d0;
`;

class Point extends Component {
  render() {
    const { title } = this.props;

    return <StyledPoint>{title}</StyledPoint>;
  }
}

Point.propTypes = {};

export default Point;
