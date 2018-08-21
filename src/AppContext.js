import React, { Component, createContext } from 'react';
import data from './data/points';

const { Provider, Consumer } = createContext();

class AppContext extends Component {
  state = {
    points: [],
    pointsCounter: null,
  };

  handlerAddPoint = event => {
    if (event.key === 'Enter' && event.target.value.length > 4) {
      let points = [
        ...this.state.points,
        Object.assign(
          {},
          {
            id: this.state.pointsCounter + 1,
            title: event.target.value,
          },
        ),
      ];

      this.setState(() => ({
        points,
        pointsCounter: this.state.pointsCounter + 1,
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

    console.log(id);
  };

  handlerRemoveAllPoints = () => {
    this.setState(() => ({
      points: [],
    }));
  };

  componentDidMount() {
    this.setState(() => ({
      points: data.points,
      pointsCounter: data.points.length,
    }));
  }

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          handlerRemoveAllPoints: this.handlerRemoveAllPoints,
          handlerAddPoint: this.handlerAddPoint,
          handlerRemovePoint: this.handlerRemovePoint,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer };
export default AppContext;
