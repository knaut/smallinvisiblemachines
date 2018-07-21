'use strict';

import React from 'react';
import { renderRoutes } from 'react-router-config';

// GLOBAL COMPONENTS
import Navigation from './navigation.jsx';
import Footer from './footer.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        {renderRoutes(this.props.route.routes)}
        <Footer />
      </div>
    );
  }
};

export default App;