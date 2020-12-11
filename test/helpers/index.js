'use strict';

const chapi = require('./chapi');
const testConf = require('../../test.conf');

const api = {};
module.exports = api;

api.chapi = chapi;

api.getVendorTitle = ({walletVendor, issuerVendor, verifierVendor}) => {
  const walletVendorName = `${walletVendor.meta.name} Wallet`;
  const issuerVendorName = `${issuerVendor.meta.name} Issuer`;
  const verifierVendorName = `${verifierVendor.meta.name} Verifier`;

  return `${walletVendorName} - ${issuerVendorName} - ${verifierVendorName}`;
};

api.getVendors = ({vendors, scenarioKey}) => {
  const scenarioConfig = testConf.scenarios[scenarioKey];

  const walletVendors = Object.keys(vendors)
    .filter(k => vendors[k].wallet)
    .filter(k => vendors[k].wallet.meta.supportedFlows.includes(scenarioKey))
    .map(k => vendors[k])
    .filter(_validateWalletVendor)
    .filter(vendor => {
      if(!(scenarioConfig && scenarioConfig.walletVendors)) {
        return true;
      }
      if(scenarioConfig.walletVendors === 'all') {
        return true;
      }
      const vendorFilter = Array.isArray(scenarioConfig.walletVendors) ?
        scenarioConfig.walletVendors : [scenarioConfig.walletVendors];

      return vendorFilter.includes(vendor.meta.key);
    });

  const issuerVendors = Object.keys(vendors)
    .filter(k => vendors[k].issuer)
    .filter(k => vendors[k].issuer.meta.supportedFlows.includes(scenarioKey))
    .map(k => vendors[k])
    .filter(_validateIssuerVendor)
    .filter(vendor => {
      if(!(scenarioConfig && scenarioConfig.issuerVendors)) {
        return true;
      }
      if(scenarioConfig.issuerVendors === 'all') {
        return true;
      }
      const vendorFilter = Array.isArray(scenarioConfig.issuerVendors) ?
        scenarioConfig.issuerVendors : [scenarioConfig.issuerVendors];

      return vendorFilter.includes(vendor.meta.key);
    });

  const verifierVendors = Object.keys(vendors)
    .filter(k => vendors[k].verifier)
    .filter(k => vendors[k].verifier.meta.supportedFlows.includes(scenarioKey))
    .map(k => vendors[k])
    .filter(_validateVerifierVendor)
    .filter(vendor => {
      if(!(scenarioConfig && scenarioConfig.verifierVendors)) {
        return true;
      }
      if(scenarioConfig.verifierVendors === 'all') {
        return true;
      }
      const vendorFilter = Array.isArray(scenarioConfig.verifierVendors) ?
        scenarioConfig.verifierVendors : [scenarioConfig.verifierVendors];

      return vendorFilter.includes(vendor.meta.key);
    });

  return {walletVendors, issuerVendors, verifierVendors};
};

function _validateWalletVendor(vendor) {
  const {name: vendorName} = vendor.meta || {};

  if(!(vendor.wallet && vendor.wallet.api)) {
    console.error(`${vendorName} is missing "wallet.api".`);
    return false;
  }

  return true;
}

function _validateIssuerVendor(vendor) {
  const {name: vendorName} = vendor.meta || {};

  if(!(vendor.issuer && vendor.issuer.api)) {
    console.error(`${vendorName} is missing "issuer.api".`);
    return false;
  }

  return true;
}

function _validateVerifierVendor(vendor) {
  const {name: vendorName} = vendor.meta || {};

  if(!(vendor.verifier && vendor.verifier.api)) {
    console.error(`${vendorName} is missing "verifier.api".`);
    return false;
  }

  return true;
}
