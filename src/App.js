import React from 'react';
import Points from './Points';
import Map from './Map';
import AppContext from './AppContext';

import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
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
