import React, { Component, createContext } from 'react';
import uuid from 'uuid';
import { arrayMove } from 'react-sortable-hoc';
import axios from 'axios/index';

const { Provider, Consumer } = createContext();

class AppContext extends Component {
  state = {
    points: [],
  };

  handlerAddPoint = event => {
    if (event.key === 'Enter' && event.target.value.length >= 2) {
      let point = event.target.value;

      axios
        .get(`https://geocode-maps.yandex.ru/1.x/?format=json&geocode=${point}`)
        .then(data => {
          let center = data.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
            .split(' ')
            .reverse()
            .map(value => parseFloat(value));

          let rightName = data.data.response.GeoObjectCollection.featureMember[0].GeoObject.name;

          let points = [
            ...this.state.points,
            Object.assign(
              {},
              {
                id: uuid.v4(),
                title: rightName,
                center,
                zoom: 12,
                type: 'yandex#satellite',
              },
            ),
          ];

          this.setState(() => ({
            points,
          }));
        })
        .catch(error => {
          console.log(`Ошибка - ${error}`);
        });

      event.target.value = '';
    }
  };

  handlerSortList = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      this.setState(() => ({
        points: arrayMove(this.state.points, oldIndex, newIndex),
      }));
    }
  };

  handlerRemovePoint = id => {
    const filteredPoints = this.state.points.filter(point => {
      return point.id !== id;
    });

    this.setState(() => ({
      points: filteredPoints,
    }));
  };

  handlerRemoveAllPoints = () => {
    this.setState(() => ({
      points: [],
    }));
  };

  handlerUpdateCoordinates = (id, coordinates) => {
    let points = this.state.points.map(point => {
      if (point.id === id) {
        point.center = coordinates;
      }

      return point;
    });

    this.setState(() => ({
      points,
    }));
  };

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          handlerRemoveAllPoints: this.handlerRemoveAllPoints,
          handlerAddPoint: this.handlerAddPoint,
          handlerRemovePoint: this.handlerRemovePoint,
          handlerSortList: this.handlerSortList,
          handlerUpdateCoordinates: this.handlerUpdateCoordinates,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer };
export default AppContext;
