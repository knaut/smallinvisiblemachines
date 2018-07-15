'use strict';

import 'font-awesome-webpack';

import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';

// import generateStore from './utils/generateStore.js';

import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

// CONFIG
// import routes from './routes.js';

// loads all of bootstrap's js into the client bundle
// https://getbootstrap.com/docs/4.0/getting-started/webpack/

const store = generateStore(
  window.__PRELOADED_STATE__,
  applyMiddleware(
    promise(),
    thunk,
    // createLogger({
    //   predicate: (getState, action) => action.type !== 'CLOCK_TICK',
    // })
  )
);

const Client = () => {
  /*
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  */

  return (
    <div>Small Invisible Machines</div>
  );
}

render(
  <Client />,
  document.getElementById('page-top')
);
