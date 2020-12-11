'use strict';

const constants = {};
module.exports = constants;

constants.urls = new Map();

const ISSUER = 'https://issuer.interop.transmute.world/';
const VERIFIER = 'https://verifier.interop.transmute.world/';

constants.urls.set('2020-05-07-dhs-cmtr', {
  issuer: ISSUER,
  verifier: VERIFIER
});

constants.urls.set('2020-05-07-dhs-prc', {
  issuer: ISSUER,
  verifier: VERIFIER
});
