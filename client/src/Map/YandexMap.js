import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { YMaps, Map, Placemark, Polyline, ZoomControl } from 'react-yandex-maps';
import { Consumer } from '../AppContext';

const mapState = {
  center: [55.752024, 37.617646],
  zoom: 12,
  type: 'yandex#satellite',
};

class YandexMap extends Component {
  render() {
    return (
      <Consumer>
        {({ state, handlerUpdateCoordinates, getMapInstance }) => {
          // Массив для отрисовки линий

          let coordinates = state.points.map(point => {
            return point.center;
          });

          console.log('refresh- map');

          return (
            <YMaps>
              <Map state={mapState} width="100%" height="100%" instanceRef={getMapInstance}>
                {state.points.map((point, index) => {
                  return (
                    <Placemark
                      key={index}
                      geometry={point.center}
                      modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                      properties={{
                        hintContent: point.title,
                        balloonContent: point.title,
                      }}
                      options={{
                        preset: 'islands#circleIcon',
                        draggable: true,
                        iconColor: '#282e33',
                      }}
                      onDrag={handlerUpdateCoordinates(point.id)}
                    />
                  );
                })}
                <Polyline
                  geometry={coordinates}
                  options={{
                    strokeWidth: 3,
                    strokeColor: '#638bae',
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

// Map.propTypes = {
//   state: PropTypes.object,
// };

// Map.defaultProps = {
//   state: {
//     center: [55.752024, 37.617646],
//     zoom: 12,
//     type: 'yandex#satellite',
//     controls: ['zoomControl'],
//   },
// };

// Placemark.propTypes = {
//   geometry: PropTypes.object,
//   properties: PropTypes.object,
//   options: PropTypes.object,
//   onGeometryChange: PropTypes.func,
// };

// Placemark.defaultProps = {
//   geometry: {
//     coordinates: [55.752024, 37.617646],
//   },
//   properties: {
//     hintContent: 'Москва',
//     balloonContent: 'Москва',
//   },
//   options: {
//     draggable: true,
//   },
// };

// Polyline.propTypes = {
//   geometry: PropTypes.object,
//   options: PropTypes.object,
// };

// Polyline.defaultProps = {
//   geometry: {
//     coordinates: [],
//   },
// };

export default YandexMap;
