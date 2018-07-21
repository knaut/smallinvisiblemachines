'use strict';

// STATIC ASSETS
exports.plugin = {
  pkg: {
    name: 'assets-route',
    version: '1.0.0'
  },
  register: function(server, options, next) {

    server.route({
      method: 'GET',
      path: '/assets/{param*}',
      options: {
        plugins: {
          lout: false
        },
        handler: {
          directory: {
            path: 'dist',
            index: ['index.html']
          }
        }
      }
    });

    server.route({
      method: 'GET',
      path: '/fonts/{param*}',
      options: {
        plugins: {
          lout: false
        },
        handler: {
          directory: {
            path: 'public/fonts',
            index: ['index.html']
          }
        }
      }
    });

    server.route({
      method: 'GET',
      path: '/images/{param*}',
      options: {
        plugins: {
          lout: false
        },
        handler: {
          directory: {
            path: 'public/images',
            index: ['index.html']
          }
        }
      }
    });

    server.route({
      method: 'GET',
      path: '/js/{param*}',
      options: {
        plugins: {
          lout: false
        },
        handler: {
          directory: {
            path: 'public/js',
            index: ['index.html']
          }
        }
      }
    });

    server.route({
      method: 'GET',
      path: '/css/{param*}',
      options: {
        plugins: {
          lout: false
        },
        handler: {
          directory: {
            path: 'public/css',
            index: ['index.html']
          }
        }
      }
    });

    server.route({
      method: 'GET',
      path: '/files/{param*}',
      options: {
        plugins: {
          lout: false
        },
        handler: {
          directory: {
            path: 'public/files',
            index: ['index.html']
          }
        }
      }
    });

  }
}