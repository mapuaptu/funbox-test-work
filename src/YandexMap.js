import React from 'react';
import { YMaps, Map, Circle } from 'react-yandex-maps';

const mapState = {
  center: [52.988, 49.695],
  zoom: 19,
  type: 'yandex#satellite',
};

const YandexMap = () => {
  return (
    <YMaps>
      <Map state={mapState} width="100%" height="100%">
        <Circle geometry={{ coordinates: [52.9883, 49.695], radius: 5}}/>
      </Map>
    </YMaps>
  );
};

export default YandexMap;
