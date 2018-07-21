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
  faCircle,
  faFilePdf,
  faFileWord,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons';

import { 
  faCircleAlt
} from '@fortawesome/fontawesome-free-regular';
  
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
  faCircle,
  faFilePdf,
  faFileWord,
  faFileAlt
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
              <p className="lead">I can bring your next web, app, or internet-of-things project to life.</p>
            </div>
          </div>

          <div className="row">
            <div className="offset-lg-2 col-lg-3 col-sm-12">
              <hr/>
              <h5 style={{paddingTop: "4px"}} className="text-center text-lg-right">
                <span className="sim-text-gray-dark">Contact me by email: </span>
              </h5>
            </div>
            <div className="col-lg-7 col-sm-12 text-center text-lg-left">
              <hr/>
              <h4>
                <a href="mailto:daniel@smallinvisiblemachines.com" className="">
                  daniel@smallinvisiblemachines.com
                </a>
              </h4>
            </div>
          </div>

          <div className="row">
            <div className="offset-lg-2 col-lg-3 col-sm-12">
              <hr/>
              <h5 style={{paddingTop: "12px"}} className="text-center text-lg-right">
                <span className="sim-text-gray-dark">Download my resume: </span>
              </h5>
            </div>
            <div className="col-lg-7 col-sm-12 text-center text-lg-left">
              <hr/>
              <a href="/files/Resume_DanielAnderson_2017.pdf" className="sim-icon pdf">
                <FontAwesomeIcon icon="file-pdf" size="2x"/>
                <FontAwesomeIcon icon="circle" size="3x"/>
              </a>
              <a href="/files/Resume_DanielAnderson_2017.docx" className="sim-icon word">
                <FontAwesomeIcon icon="file-word" size="2x"/>
                <FontAwesomeIcon icon="circle" size="3x"/>
              </a>
              <a href="/files/Resume_DanielAnderson_2017.txt" className="sim-icon txt">
                <FontAwesomeIcon icon="file-alt" size="2x"/>
                <FontAwesomeIcon icon="circle" size="3x"/>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="offset-lg-2 col-lg-3 col-sm-12">
            <hr/>
              <h5 style={{paddingTop: "12px"}} className="text-center text-lg-right">
                <span className="sim-text-gray-dark">Find me on: </span>
              </h5>
            </div>
            <div className="col-lg-7 col-sm-12 text-center text-lg-left">
              <hr/>
              <a href="https://github.com/knaut" className="sim-icon github">
                <FontAwesomeIcon icon={["fab", "github"]} size="2x"/>
                <FontAwesomeIcon icon="circle" size="3x"/>
              </a>
              <a href="https://www.linkedin.com/in/danielaanderson/" className="sim-icon linkedin">
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="2x"/>
                <FontAwesomeIcon icon="circle" size="3x"/>
              </a>
              <a href="https://twitter.com/knautwerk/" className="sim-icon twitter">
                <FontAwesomeIcon icon={["fab", "twitter"]} size="2x"/>
                <FontAwesomeIcon icon="circle" size="3x"/>
              </a>
            </div>
          </div>

          <hr/>

        </div>

      </div>
    );
  }
};

export default AboutDaniel;

