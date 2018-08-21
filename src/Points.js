import React, { Component } from 'react';
import PointRemove from './PointRemove';
import SortableList from './PointsList/PointsList';
import data from './data/points';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledPoints = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 40px;
  width: 30%;
  color: #fff;
  background-color: #282e33;

  .points__input {
    display: block;
    margin: 0;
    margin-bottom: 50px;
    outline: none;
    border: none;
    border-radius: 2px;
    padding: 10px 15px;
    width: 100%;
    font-size: 22px;
    color: #c0c8d0;
    background-color: #3d444b;

    &::placeholder {
      color: #818991;
    }
  }
`;

class Points extends Component {
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
      }));
    }
  };

  handlerRemovePoint = pointId => {
    const filteredPoints = this.state.points.filter(point => {
      console.log(pointId);
      return point.id !== pointId;
    });

    this.setState(state => ({
      points: filteredPoints,
    }));
  };

  handlerRemoveAllPoints = () => {
    this.setState(state => ({
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
      <StyledPoints className="points">
        <div>
          <input
            onKeyPress={this.handlerAddPoint}
            className="points__input"
            placeholder="Новая точка маршрута"
          />
          <SortableList points={this.state.points} />
        </div>
        <div>
          <PointRemove removeAllPoints={this.handlerRemoveAllPoints} />
        </div>
      </StyledPoints>
    );
  }
}

Points.propTypes = {};

export default Points;
