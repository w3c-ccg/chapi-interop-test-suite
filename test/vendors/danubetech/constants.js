'use strict';

const constants = {};
module.exports = constants;

constants.urls = new Map();

const ISSUER = 'https://uscis.svip.danubetech.com/';
const VERIFIER = 'https://jobs.svip.danubetech.com/';

constants.urls.set('2020-05-07-dhs-prc', {
  issuer: ISSUER,
  verifier: VERIFIER
});
