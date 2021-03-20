'use strict';

const constants = {};
module.exports = constants;

constants.didMethods = {
  v1: 'v1',
  key: 'key'
};

constants.urls = new Map();

const WALLET_URL = 'https://wallet.interop.digitalbazaar.com/';

constants.urls.set('2020-05-07-dhs-prc', {
  wallet: WALLET_URL,
  issuer: 'https://uscis.interop.digitalbazaar.com/',
  verifier: 'https://jobs.interop.digitalbazaar.com/'
});

constants.urls.set('2020-05-07-dhs-cmtr', {
  wallet: WALLET_URL
});

constants.urls.set('2021-03-15-svip-vaxcert', {
  wallet: WALLET_URL
});
