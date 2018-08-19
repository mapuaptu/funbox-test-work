import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledHeader = styled.div`
  font-size: 25px;
  color: #000;

  h2 {
    margin-bottom: 60px;
    padding-top: 50px;
  }
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <header>123</header>
      </StyledHeader>
    );
  }
}

Header.propTypes = {};

export default Header;
