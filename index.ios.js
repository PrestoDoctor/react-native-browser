/**
 * @providesModule RCTBrowser
 * @flow
 */
'use strict';

var React = require('react-native');
var {
  NativeModules: {
    Browser,
  },
} = React;

var RCTBrowserExport = {
  open: function(url, options={}) {
    Browser.presentUrl(url, options);
  },
};

module.exports = RCTBrowserExport;
