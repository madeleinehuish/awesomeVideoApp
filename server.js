'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const apiGetVideoFromAWS = require('./serverAPI/api-AWS');
const apiGetVideoFromFile = require('./serverAPI/api-getVideoFromFile');
const apiVideoFrameTest = require('./serverAPI/api-videoFrame-test');
const apiTest = require('./serverAPI/api-video-test');

app.disable('x-powered-by');
app.use(express.static('public'));

switch (app.get('env')) {
  case 'development':
    app.use(morgan('dev'));
    break;

  case 'production':
    app.use(morgan('short'));
    break;

  default:
}

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join('public')));

app.use(apiGetVideoFromAWS);
app.use(apiGetVideoFromFile);
app.use(apiVideoFrameTest);
app.use(apiTest);

app.use('/assets', express.static('app/assets'));

app.use((_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// eslint-disable-next-line max-params
app.use((err, _req, res, _next) => {
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'text/plain')
      .send(err.statusText);
  }

  // eslint-disable-next-line no-console
  console.error(err.stack);
  res.sendStatus(500);
});

app.listen(port, () => {
  if (app.get('env') !== 'test') {
    // eslint-disable-next-line no-console
    console.log('Listening on port', port);
  }
});

module.exports = app;

// var cors = require('cors')
// app.use(cors());

// // CSRF protection
// app.use((req, res, next) => {
//   if (/json/.test(req.get('Accept'))) {
//     return next();
//   }
//
//   res.sendStatus(406);
// });
