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

class Footer extends React.Component {
  render() {
    return (
      <footer className="jumbotron" style={{marginBottom: 0}}>
        <div className="footer-copyright text-center">
          <span className="">© 2018 Copyright Daniel A. Anderson, All Rights Reserved - <a href="#">smallinvisiblemachines.com</a></span>
        </div>
      </footer>
    );
  }
};

export default Footer;

