'use strict';

import React from 'react';
import { renderRoutes } from 'react-router-config';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// GLOBAL COMPONENTS
import Navigation from './navigation.jsx';
import Footer from './footer.jsx';

// ICONS
import { 
  faCircleNotch, 
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faCircleNotch, 
);

class Spinner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      hidden: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true
      });
    }, 800);

    setTimeout(() => {
      this.setState({
        hidden: true
      });
    }, 1300);
  }

  render() {
    let spinnerClasses = 'spinner-wrap';

    if (this.state.loaded) {
      spinnerClasses = spinnerClasses + ' loaded';
    }

    if (this.state.hidden) {
      spinnerClasses = spinnerClasses + ' hidden';
    }
    console.log(spinnerClasses)
    return (
      <div>
        <table className={spinnerClasses}>
          <tbody>
            <tr>
              <td className="align-middle text-center">
                <FontAwesomeIcon icon="circle-notch" size="5x" className="spinner" style={{
                  color: '#576069'
                }}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Spinner />
        {renderRoutes(this.props.route.routes)}
        <Footer />
      </div>
    );
  }
};

export default App;