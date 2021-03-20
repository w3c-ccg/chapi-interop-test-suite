'use strict';

const issuerApi = require('./issuer');
const walletApi = require('./wallet');
const verifierApi = require('./verifier');

module.exports = {
  meta: {
    key: 'digitalbazaar',
    name: 'Digital Bazaar'
  },
  wallet: {
    api: walletApi,
    meta: {
      name: 'Veres Wallet',
      supportedFlows: [
        '2020-05-07-dhs-prc', '2020-05-07-dhs-cmtr', '2021-03-15-svip-vaxcert'
      ]
    }
  },
  issuer: {
    api: issuerApi,
    meta: {
      name: 'Veres Issuer',
      supportedFlows: ['2020-05-07-dhs-prc']
    }
  },
  verifier: {
    api: verifierApi,
    meta: {
      name: 'Veres Verifier',
      supportedFlows: ['2020-05-07-dhs-prc']
    }
  }
};
