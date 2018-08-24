import React from 'react';
import Points from './Points/Points';
import Map from './Map/Map';
import AppContext from './AppContext';

import styled from 'styled-components';

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
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
