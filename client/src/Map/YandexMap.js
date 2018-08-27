import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { YMaps, Map, Placemark, Polyline } from 'react-yandex-maps';
import { Consumer } from '../AppContext';

class YandexMap extends Component {
  render() {
    return (
      <Consumer>
        {({ state, handlerUpdateCoordinates }) => {
          // Массив для отрисовки линий

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
                    onGeometryChange={handlerUpdateCoordinates(point.id)}
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

Map.propTypes = {
  state: PropTypes.object,
};

Map.defaultProps = {
  state: {
    center: [52.981709, 49.710217],
    zoom: 12,
    type: 'yandex#satellite',
    controls: [],
  },
};

Placemark.propTypes = {
  geometry: PropTypes.object,
  properties: PropTypes.object,
  options: PropTypes.object,
  onGeometryChange: PropTypes.func,
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

Polyline.propTypes = {
  geometry: PropTypes.object,
  options: PropTypes.object,
};

Polyline.defaultProps = {
  geometry: {
    coordinates: [],
  },
};

export default YandexMap;
