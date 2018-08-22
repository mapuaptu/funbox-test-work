import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { Consumer } from './AppContext';

class YandexMap extends Component {
  render() {
    return (
      <Consumer>
        {({ state, handlerUpdateCoordinates }) => {
          return (
            <YMaps>
              <Map state={state.points[state.points.length - 1]} width="100%" height="100%">
                {state.points.map(point => (
                  <Placemark
                    geometry={{
                      coordinates: point.center,
                    }}
                    properties={{
                      hintContent: point.title,
                      balloonContent: point.title,
                    }}
                    options={{
                      draggable: true,
                    }}
                    key={point.id}
                    onGeometryChange={event => {
                      handlerUpdateCoordinates(
                        point.id,
                        event.originalEvent.target.geometry._coordinates,
                      );
                    }}
                  />
                ))}
              </Map>
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
    zoom: 12,
    type: 'yandex#satellite',
  },
};

Placemark.defaultProps = {
  geometry: {
    coordinates: [52.981709, 49.710217],
  },
  properties: {
    hintContent: 'Чапаевск',
    balloonContent: 'Чапаевск',
  },
  options: {
    draggable: true,
  },
};

export default YandexMap;
