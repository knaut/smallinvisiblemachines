'use strict';

// CONFIG
import initialState from '../../initialState.js';

// UTILS
import renderRoute from '../utils/renderRoute.js';

// SERVER-SIDE ROUTES FOR STATIC PAGES
exports.plugin = {
  pkg: {
    name: 'page-routes',
    version: '1.0.0'
  },
  register: function(server, options, next) {
    server.route({
      method: 'GET',
      path: '/',
      handler: async function(request, h) {
        const html = await renderRoute( request.path, initialState );

        return h.response(
          html
        );
      }
    });

    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: async function(request, h) {
        const html = await renderRoute( request.path, initialState );

        return h.response(
          html
        );
      }
    });
  }
};