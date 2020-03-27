import express from '../node_modules/express';
import path from 'path';
import open from '../node_modules/open';
import webpack from '../node_modules/webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('../node_modules/webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// Set up the routing
// At the root get.
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

// listen
app.listen(port, function(err) {
  if (err) {
    console.log('Error: ' + err);
  } else {
    open('http://localhost:' + port);
  }
});


