'use strict';

// IMPORTS
import chalk from 'chalk';
import clear from 'clear';

// IMPORTS SERVER
import Glue from 'glue';
import Inert from 'inert';
import Vision from 'vision';
import Lout from 'lout';
import Moment from 'moment';

// CONFIG
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
