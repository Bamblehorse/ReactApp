var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = '2d83c89da4d54efb9c985b67b0e164ef';
var sentryApp = '109085';
var sentryURL = 'https://' + sentryKey + '@sentry.io/' + sentryApp;

var _APP_INFO = {
  name: 'Github Battle',
  branch: 'develop',
  version: '1.0'
};

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,
  }
}).install();

/*
  Focused
  Independant
  Reusable
  Small
  Testable
*/

ReactDOM.render(
  routes,
  document.getElementById('app')
);
