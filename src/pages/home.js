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

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
        <div className="container">
          <a className="navbar-brand" href="#">Small Invisible Machines</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

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
            <div className="col-md-2 col-sm-4 col-xs-12">
              <img src="/images/daniel.jpg" alt="..." className="img-thumbnail"/>
            </div>
            <div className="col-md-10 col-sm-8 col-xs-12">
              <h4 className="text-uppercase text-muted">Daniel A. Anderson</h4>
              <hr/>
              <p className="lead">Hi there! I'm a full-stack web developer with an eye for great design and a passion for crafting excellent user experiences.</p>
              <p className="lead">I can bring your next web, app, or internet-of-things project come to life.</p>
              <div className="row">
                <div className="col">
                  <h5>
                    <a href="mailto:daniel@smallinvisiblemachines.com">
                      Contact me by email  <FontAwesomeIcon icon="envelope" />
                    </a>
                  </h5>
                </div>
                <div className="col">
                  <h5>
                    <a href="mailto:daniel@smallinvisiblemachines.com">
                      Download my resume  <FontAwesomeIcon icon="paper-plane" />
                    </a>
                  </h5>
                </div>
                <div className="col">
                  <h5>
                    <a href="mailto:daniel@smallinvisiblemachines.com">
                      View code samples  <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                  </h5>
                </div>
              </div>
              <hr/>
            </div>
          </div>

        </div>

      </div>
    );
  }
};

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

class Footer extends React.Component {
  render() {
    return (
      <footer className="jumbotron">

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

          <div className="footer-copyright text-center">© 2018 Copyright Daniel A. Anderson, All Rights Reserved - 
            <a href="#">smallinvisiblemachines.com</a>
          </div>

        </footer>
    );
  }
}

const Home = () => {
  return (
    <div>

      <Navigation />      

      <div className="jumbotron">
        <AboutSim />
      </div>

      <Services />

      <AboutDaniel/>
      
      <Footer />

    </div>
  );
};

export default Home;


/*
<div className="row">
          <div className="col-sm-12">
            <h6 className="text-center text-uppercase text-muted">Skills</h6>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <h6 className="text-center text-uppercase text-muted">End-to-end Javascript Development</h6>
            <p className="text-center text-uppercase text-muted">Start with a NodeJS foundation and build a single-page web 
              app, mobile 
              app, or custom CRM.</p>
          </div>
          <div className="col-sm-4">
            <h6 className="text-center text-uppercase text-muted">Pixel-perfect User Experience</h6>
            <p className="text-center text-uppercase text-muted">Custom-tailored user interface design that is expressive yet simple.</p>
          </div>
          <div className="col-sm-4">
            <h6 className="text-center text-uppercase text-muted">Box 3</h6>
          </div>
        </div>
        */