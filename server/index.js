// IMPORTS
// GLOBAL
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import emoji from 'emoji';

// IMPORTS
// SERVER
import Glue from 'glue';
import Inert from 'inert';
import Vision from 'vision';
import Lout from 'lout';
import Moment from 'moment';

// CONFIG
/*
  our manifest object describes our server
  and configures it with Glue.compose()

  we can configure the plugins we include
  in our server by placing our plugins in
  arrays, then concatenating arrays based
  on our configuration.
*/

const port = process.env.PORT || 3000;

// core modules
const modules = [
  Inert,
  Vision
];

// authentication strategies
const auths = [];

// asset routes serve static assets and html files
const assets = [];

// logging configuration
const consoleReporter = [
  {
    module: 'good-squeeze',
    name: 'Squeeze',
    args: [{
      error: '*',
      log: '*',
      request: '*',
      response:'*'
    }]
  },
  {
    module: 'good-console',
    args: [{
      color: {
        $filter: 'env',
        production: false,
        $default: true
      }
    }]
  },
  'stdout'
];

const reporters = {
  consoleReporter
};

const logs = [
  {
    plugin: 'good',
    options: {
      reporters
    }
  }
];

// MANIFEST
const base = [];
const plugins = base.concat(
  modules,
  auths,
  assets,
  logs,
  api
);

const manifest = {
  server: {
    port
  },
  register: {
    plugins
  }
};

const options = {
  relativeTo: __dirname
};

const manifest = {
  server: {
    port: process.env.PORT || 3000
  },
  register: {
    plugins: [
      // MODULES
      Inert,
      Vision,
      Lout,

      // STATIC ASSETS
      './routes/assets.js',

      // STATIC PAGE ROUTES
      './routes/index.js'
    ]
  }
}

const options = {
  relativeTo: __dirname
};

// SETUP
const startServer = async function() {
  try {
    const server = await Glue.compose(manifest, options);
    await server.start();

    clear();
    console.log(
      chalk.bold(` SMALL INVISIBLE MACHINES `),
      chalk.gray('server started at'),
      chalk.green(`${server.info.protocol}://${server.info.address}:${server.info.port}`),
      chalk.gray(`on`),
      chalk.magenta(`${Moment().toISOString()}`)
    );

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// RUN
startServer();
