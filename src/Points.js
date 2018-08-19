import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledPoints = styled.div`
  --points-bg: #282e33;
  --points-color: #fff;

  padding: 40px;
  width: 20%;
  color: var(--points-color);
  background-color: var(--points-bg);
`;

class Points extends Component {
  render() {
    return (
      <StyledPoints>
        <div>Points</div>
      </StyledPoints>
    );
  }
}

Points.propTypes = {};

export default Points;
