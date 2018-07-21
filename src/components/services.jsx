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
  faCloud,
  faCogs,
  faWifi,
  faMicrochip
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
  faCloud,
  faCogs,
  faWifi,
  faMicrochip
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
            <h6 className="text-center sim-text-blue" style={{position: 'relative'}}>
              <FontAwesomeIcon icon={["fab", "node-js"]} size="6x" style={{
                position: 'relative',
                marginRight: '-7px',
                zIndex: 2
              }}/>
              <FontAwesomeIcon icon={["fab", "react"]} size="6x" style={{
                color: '#26C6DA',
                position: 'relative',
                marginLeft: '-7px',
                zIndex: 1
              }}/>
            </h6>
            <p className="text-center text-muted">Start with a NodeJS foundation and build a single-page web 
              app, mobile app, or custom CRM.</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-3">
            <h6 className="text-center text-uppercase text-info">Pixel-perfect User Experience</h6>
            <h6 className="text-center sim-text-yellow">
              <FontAwesomeIcon icon={["far", "object-group"]} size="6x" />
            </h6>
            <p className="text-center text-muted">Custom-tailored user interface design that is expressive yet simple.</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-3">
            <h6 className="text-center text-uppercase text-info">Cloud Deployment & Management</h6>
            <h6 className="text-center" style={{position: 'relative'}}>
              <FontAwesomeIcon icon="cogs" size="4x" 
                style={{
                  color: '#BDABFF', 
                  position: 'absolute', 
                  top: '50%',
                  left: '50%',
                  marginLeft: '-42px',
                  marginTop: '-26px'
                }}
              />
              <span className="sim-text-purple"><FontAwesomeIcon icon={["fas", "cloud"]} size="6x" /></span>
            </h6>
            <p className="text-center text-muted">Go live in minutes, not days. Scale with ease as you grow.</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-3">
            <h6 className="text-center text-uppercase text-info">Integrate The World of Things</h6>
            <h6 className="text-center sim-text-cyan">
              <FontAwesomeIcon icon={["fas", "mobile-alt"]} size="6x" style={{
                marginRight: '-18px'
              }}/>
              <FontAwesomeIcon icon={["fas", "wifi"]} size="5x" style={{
                position: 'relative',
                color: '#FF3C6E',
                
                marginRight: '-35px',
                transform: 'rotate(-90deg)',
                zIndex: 2
              }}/>
              <FontAwesomeIcon icon={["fas", "microchip"]} size="5x" style={{
                position: 'relative',
                color: '#03A9F4',
                
                marginLeft: '-8px',
                zIndex: 1
              }}/>
            </h6>
            <p className="text-center text-muted">Program your app to send a text message or process data from a sensor in the field.</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Services;

