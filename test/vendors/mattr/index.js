'use strict';

const issuerApi = require('./issuer');

module.exports = {
  meta: {
    key: 'mattr',
    name: 'MATTR'
  },
  issuer: {
    api: issuerApi,
    meta: {
      supportedFlows: ['2021-03-15-svip-vaxcert']
    }
  }
};
