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



class Services extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h6 className="text-center text-uppercase text-muted">Services</h6>
            <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-lg-3">
            <h6 className="text-center text-uppercase text-info">End-to-end Javascript Development</h6>
            <h6 className="text-center text-success">
              <FontAwesomeIcon icon={["fab", "node-js"]} size="6x" />
            </h6>
            <p className="text-center text-muted"></p>
            <p className="text-center text-muted">Start with a NodeJS foundation and build a single-page web 
              app, mobile app, or custom CRM.</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-3">
            <h6 className="text-center text-uppercase text-info">Pixel-perfect User Experience</h6>
            <h6 className="text-center text-warning">
              <FontAwesomeIcon icon={["fas", "object-group"]} size="6x" />
            </h6>
            <p className="text-center text-muted">Custom-tailored user interface design that is expressive yet simple.</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-3">
            <h6 className="text-center text-uppercase text-info">Cloud Deployment & Management</h6>
            <h6 className="text-center text-danger">
              <FontAwesomeIcon icon={["fas", "cloud"]} size="6x" />
            </h6>
            <p className="text-center text-muted">Go live in minutes, not days. Scale with ease as you grow.</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-3">
            <h6 className="text-center text-uppercase text-info">Integrate The World of Things</h6>
            <h6 className="text-center text-primary">
              <FontAwesomeIcon icon={["fas", "mobile-alt"]} size="6x" />
            </h6>
            <p className="text-center text-muted">Program your app to send a text message or get data from a sensor in real time.</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Services;

