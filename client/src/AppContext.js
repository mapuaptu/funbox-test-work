import React, { Component, createContext } from 'react';
import uuid from 'uuid';
import { arrayMove } from 'react-sortable-hoc';
import axios from 'axios/index';

const { Provider, Consumer } = createContext();

class AppContext extends Component {
  state = {
    points: [],
  };

  getMapInstance = map => {
    this.map = map;

    console.log(this.map.getCenter());
  };

  handlerAddPoint = event => {
    if (event.key === 'Enter') {
      let value = event.target.value;

      let points = [
        ...this.state.points,
        Object.assign(
          {},
          {
            id: uuid.v4(),
            title: value,
            center: this.map.getCenter(),
            //zoom: 12,
            //type: 'yandex#satellite',
          },
        ),
      ];

      this.setState(() => ({
        points,
      }));

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

  handlerRemovePoint = id => () => {
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

  handlerUpdateCoordinates = id => event => {
    let points = this.state.points.map(point => {
      if (point.id === id) {
        point.center = event.originalEvent.target.geometry._coordinates;
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
          getMapInstance: this.getMapInstance,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer };
export default AppContext;
