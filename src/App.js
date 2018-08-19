import React, { Component } from 'react';
import Points from './Points';
import Map from './Map';

import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <StyledApp className="App">
        <Points />
        <Map />
      </StyledApp>
    );
  }
}

export default App;
