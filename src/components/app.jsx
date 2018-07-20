'use strict';

import React from 'react';
import { renderRoutes } from 'react-router-config';

// GLOBAL COMPONENTS


class App extends React.Component {
  render() {
    return (
      <div>
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
};

export default App;