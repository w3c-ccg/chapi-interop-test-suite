'use strict';

const issuerApi = require('./issuer');
const verifierApi = require('./verifier');

module.exports = {
  meta: {
    key: 'transmute',
    name: 'Transmute'
  },
  issuer: {
    api: issuerApi,
    meta: {
      supportedFlows: ['2020-05-07-dhs-prc', '2020-05-07-dhs-cmtr']
    }
  },
  verifier: {
    api: verifierApi,
    meta: {
      supportedFlows: ['2020-05-07-dhs-prc', '2020-05-07-dhs-cmtr']
    }
  }
};
