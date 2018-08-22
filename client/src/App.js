import React from 'react';
import Points from './Points';
import Map from './Map';
import AppContext from './AppContext';

import styled from 'styled-components';

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  height: auto;
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppContext>
      <StyledApp className="App">
        <Points />
        <Map />
      </StyledApp>
    </AppContext>
  );
};

export default App;