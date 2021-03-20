'use strict';

module.exports = {
  scenarios: {
    '2020-05-07-dhs-prc': {
      // Uncomment line to use specific vendor(s)
      // walletVendors: ['digitalbazaar'],
      walletVendors: 'all',
      // Uncomment line to use specific vendor(s)
      // issuerVendors: ['danubetech'],
      issuerVendors: 'all',
      // Uncomment line to use specific vendor(s)
      // verifierVendors: ['transmute'],
      verifierVendors: 'all'
    },
    '2020-05-07-dhs-cmtr': {
      walletVendors: 'all',
      issuerVendors: 'all',
      verifierVendors: 'all'
    },
    '2021-03-15-svip-vaxcert': {
      walletVendors: 'all',
      issuerVendors: 'all',
      verifierVendors: 'all'
    }
  }
};
