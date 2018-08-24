import React, { Component } from 'react';
import { YMaps, Map, Placemark, Polyline } from 'react-yandex-maps';
import { Consumer } from '../AppContext';

class YandexMap extends Component {
  render() {
    return (
      <Consumer>
        {({ state, handlerUpdateCoordinates }) => {
          let coordinates = state.points.map(point => {
            return point.center;
          });

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
                      preset: 'islands#circleIcon',
                      draggable: true,
                      iconColor: '#282e33',
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
                <Polyline
                  geometry={{
                    coordinates,
                  }}
                  options={{
                    strokeWidth: 3,
                    strokeColor: '#50d4c3',
                  }}
                />
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
    controls: [],
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

Polyline.defaultProps = {
  geometry: {
    coordinates: [],
  },
};

export default YandexMap;
