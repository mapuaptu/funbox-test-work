import React, { Component } from 'react';
import { YMaps, Map, Circle } from 'react-yandex-maps';
import { Consumer } from './AppContext';

class YandexMap extends Component {
  render() {
    return (
      <Consumer>
        {({ state }) => {
          return (
            <YMaps>
              <Map state={state.points[state.points.length - 1]} width="100%" height="100%" />
            </YMaps>
          );
        }}
      </Consumer>
    );
  }
}

Map.defaultProps = {
  state: {
    center: [52.981709, 49.710217],
    zoom: 15,
    type: 'yandex#satellite',
  },
};

export default YandexMap;
