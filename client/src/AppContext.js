import React, { Component, createContext } from 'react';
import uuid from 'uuid';
import { arrayMove } from 'react-sortable-hoc';

const { Provider, Consumer } = createContext();

class AppContext extends Component {
  state = {
    points: [],
  };

  getMapInstance = map => {
    this.map = map;
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
      let newPoints = arrayMove([...this.state.points], oldIndex, newIndex);

      this.setState(() => ({
        points: newPoints,
      }));
    }

    console.log('sort list');
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
    let currentPoints = this.state.points.map(point => {
      if (point.id === id) {
        point.center = event._sourceEvent.originalEvent.target.geometry._coordinates;
      }
      return point;
    });

    this.setState(() => ({
      points: currentPoints,
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
