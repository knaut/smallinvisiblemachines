'use strict';

import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// COMPONENTS
import Navigation from '../components/navigation.jsx';
import AboutSim from '../components/aboutSim.jsx';
import Services from '../components/services.jsx';
import AboutDaniel from '../components/aboutDaniel.jsx';
import Footer from '../components/footer.jsx';


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

const About = () => {
  return (
    <div>
      <div className="jumbotron">

      </div>
    </div>
  );
};

export default About;
