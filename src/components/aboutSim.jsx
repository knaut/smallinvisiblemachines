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
            <h1 className="text-uppercase text-muted text-center sim-title">Small Invisible Machines</h1>
            <h6 className="text-uppercase text-muted text-center sim-title bold" style={{letterSpacing: '5px'}}>Daniel A. Anderson</h6>
            <hr/>
            <h1 className="display-4">Your apps, simplified.</h1>
            <p className="lead">Small Invisible Machines offers end-to-end web, mobile, and app development and design for the cloud and internet-of-things.</p>
            <p className="lead">Take advantage of the latest web and IoT technologies by building your next project with Small Invisible Machines.</p>
          </div>
        </div>
      </div>
    );
  }
};

export default AboutSim;

