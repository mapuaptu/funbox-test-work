import React, { Component } from 'react';
import YandexMap from './YandexMap';

import styled from 'styled-components';

const StyledMap = styled.div`
  position: relative;
  color: #fff;
  background-color: #18191d;

  .map__container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    /*stylelint-disable*/
    > div {
      > ymaps {
        width: 100% !important;

        > ymaps {
          width: 100% !important;
        }
      }
    }
  }
`;

class Map extends Component {
  render() {
    return (
      <StyledMap className="map">
        <div className="map__container">
          <YandexMap />
        </div>
      </StyledMap>
    );
  }
}

export default Map;
