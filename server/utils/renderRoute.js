import React from 'react';
import { renderToString } from 'react-dom/server';

import { Provider } from 'react-redux';

import StaticRouter from 'react-router-dom/StaticRouter';
import { matchRoutes, renderRoutes } from 'react-router-config';

import generateStore from '../../src/utils/generateStore.js';
import renderHead from './renderHead.js';

// CONFIG
import routes from '../../src/routes.js';

const renderRoute = function(url, state) {
  const store = generateStore( state )
  const branch = matchRoutes(routes, url);
  const promises = branch.map( ({ route }) => {
    
    let fetchData = route.component.fetchData;

    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null)

  });

  return Promise.all(promises).then( (data) => {

    let context = {};
    
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    );

    const html = renderHead( content, state );
    return html;

  });
};

export default renderRoute;