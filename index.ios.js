/**
 * @providesModule RCTBrowser
 * @flow
 */
'use strict';

import React from 'react';
import { NativeModules } from 'react-native';
var Browser = NativeModules.Browser;

var RCTBrowserExport = {
  open: function(url, options={}) {
    Browser.presentUrl(url, options);
  },
};

module.exports = RCTBrowserExport;
