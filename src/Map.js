import React, { Component } from 'react';
import YandexMap from './YandexMap';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledMap = styled.div`
  --map-bg: #18191d;
  --map-text-color: #fff;

  display: flex;
  flex: 1 0 auto;
  padding: 40px;
  width: 80%;
  color: var(--map-text-color);
  background-color: var(--map-bg);
`;

class Map extends Component {
  render() {
    return (
      <StyledMap className="map">
        <YandexMap />
      </StyledMap>
    );
  }
}

Map.propTypes = {};

export default Map;
