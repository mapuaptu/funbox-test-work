import React, { Component } from 'react';
import Point from './Point';
import PointRemove from './PointRemove';
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
    margin: 0;
    margin-bottom: 50px;
    outline: none;
    border: none;
    border-radius: 2px;
    padding: 10px 15px;
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
    pointsCounter: 0,
  };

  handlerAddPoint = event => {
    if (event.key === 'Enter' && event.target.value.length > 4) {
      let points = [
        ...this.state.points,
        Object.assign(
          {},
          {
            id: ++this.state.pointsCounter,
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

  render() {
    const { points } = this.state;

    return (
      <StyledPoints className="points">
        <div>
          <input
            onKeyPress={this.handlerAddPoint}
            className="points__input"
            placeholder="Новая точка маршрута"
          />
          {points.map(point => (
            <Point
              title={point.title}
              key={`${point.id}-${point.title}`}
              id={point.id}
              removePoint={this.handlerRemovePoint}
            />
          ))}
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
