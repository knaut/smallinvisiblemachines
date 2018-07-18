'use strict';

import React from 'react';

// COMPONENTS

const Home = () => {
  return (
    <div>

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

      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <img src="/images/daniel.jpg" alt="..." className="img-thumbnail"/>
            </div>
            <div className="col-sm-10">
              <h2 className="text-uppercase text-muted">Daniel A. Anderson</h2>
              <hr/>
              <p className="lead">I'm a full-stack web developer with an eye for great design and a passion for crafting excellent user experiences.</p>
              <p className="lead">I can bring your next web, app, or internet-of-things project come to life.</p>
              <div className="row">
                <div className="col">
                  <h5>
                    <a href="mailto:daniel@smallinvisiblemachines.com">
                      Contact me by email  <i className="fa fa-envelope" />
                    </a>
                  </h5>
                </div>
                <div className="col">
                  <h5>
                    <a href="mailto:daniel@smallinvisiblemachines.com">
                      Download my resume  <i className="fa fa-paper-plane" />
                    </a>
                  </h5>
                </div>
                <div className="col">
                  <h5>
                    <a href="mailto:daniel@smallinvisiblemachines.com">
                      View code samples  <i className="fa fa-github" />
                    </a>
                  </h5>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      

      </div>
      <div className="container">

      </div>
      

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
            <p className="text-center text-uppercase text-muted">Start with a NodeJS foundation and build a single-page web app, mobile app, or custom CRM.</p>
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