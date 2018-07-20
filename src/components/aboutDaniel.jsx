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


class AboutDaniel extends React.Component {
  render() {
    return (
      <div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h6 className="text-center text-uppercase text-muted">About</h6>
              <hr/>
              <h5 className="text-center text-uppercase text-muted">Small Invisible Machines is…</h5>
              <hr/>
            </div>
          </div>
        </div>

        <div className="container">

          <div className="row">
            <div className="col-lg-2 col-sm-4 col-xs-12">
              <img src="/images/daniel.jpg" alt="..." className="img-thumbnail"/>
            </div>
            <div className="col-lg-10 col-sm-8 col-xs-12">
              <h4 className="text-uppercase text-muted">Daniel A. Anderson</h4>
              <hr/>
              <p className="lead">Hi there! I'm a full-stack web developer with an eye for great design and a passion for crafting excellent user experiences.</p>
              <p className="lead">I can bring your next web, app, or internet-of-things project come to life.</p>
              <div className="row">
                <div className="col-lg-4 col-sm-12">
                  <h5>
                    <a href="mailto:daniel@smallinvisiblemachines.com">
                      Contact me by email  <FontAwesomeIcon icon="envelope" />
                    </a>
                  </h5>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <h5>
                    <a href="mailto:daniel@smallinvisiblemachines.com">
                      Download my resume  <FontAwesomeIcon icon="paper-plane" />
                    </a>
                  </h5>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <h5>
                    <a href="mailto:daniel@smallinvisiblemachines.com">
                      View code samples  <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                  </h5>
                </div>
              </div>
              
            </div>
          </div>

          <hr/>

        </div>

      </div>
    );
  }
};

export default AboutDaniel;

