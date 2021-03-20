'use strict';

const constants = {};
module.exports = constants;

constants.urls = new Map();

const uscisWebsite = 'https://uscis.svip.danubetech.com/';
const jobsWebsite = 'https://dairy.svip.danubetech.com/';

constants.urls.set('2020-05-07-dhs-prc', {
  issuer: uscisWebsite,
  verifier: jobsWebsite
});

constants.urls.set('2021-03-15-svip-vaxcert', {
  verifier: uscisWebsite,
});
