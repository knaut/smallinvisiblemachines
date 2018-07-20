'use strict';

import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// COMPONENTS
// ICONS
import { 
  faStroopwafel, 
  faEnvelope, 
  faPaperPlane,
  faObjectGroup,
  faMobileAlt,
  faCloud
} from '@fortawesome/free-solid-svg-icons';

import {
  fab
} from '@fortawesome/free-brands-svg-icons';

// ICONS SETUP
library.add(
  fab,
  faStroopwafel, 
  faEnvelope, 
  faPaperPlane,
  faObjectGroup,
  faMobileAlt,
  faCloud
);


class AboutSim extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-uppercase text-muted">Small Invisible Machines</h1>
            <hr/>
            <h1 className="display-4">Your apps, simplified.</h1>
            <p className="lead">Small Invisible Machines is a web, mobile, and app development and design shop for the cloud and internet of things.</p>
            <p className="lead">Take advantage of the latest web technologies by building your next project with Small Invisible Machines.</p>
          </div>
        </div>
      </div>
    );
  }
};

export default AboutSim;

