import React, { Component } from 'react';
import Point from './Point';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledPoints = styled.div`
  display: flex;
  flex-flow: column;
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
  render() {
    return (
      <StyledPoints className="points">
        <input className="points__input" placeholder="Новая точка маршрута" />
        <Point title="Клиническая" />
        <Point title="Строительная" />
        <Point title="Чапаева" />
      </StyledPoints>
    );
  }
}

Points.propTypes = {};

export default Points;
