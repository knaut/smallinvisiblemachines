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

          <div className="container text-center text-md-left">

            <div className="row">
              <div className="col-md-6">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns here to organize your footer content.</p>
              </div>

              <hr className="clearfix w-100 d-md-none pb-3" />

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          <div className="footer-copyright text-center">
            <span className="">© 2018 Copyright Daniel A. Anderson, All Rights Reserved - <a href="#">smallinvisiblemachines.com</a></span>
          </div>

        </footer>
    );
  }
};

export default Footer;

