'use strict';

const danubetech = require('./danubetech');
const digitalbazaar = require('./digitalbazaar');
const mattr = require('./mattr');
const transmute = require('./transmute');

const vendors = {};

vendors['danubetech'] = danubetech;
vendors['digitalbazaar'] = digitalbazaar;
vendors['mattr'] = mattr;
vendors['transmute'] = transmute;

module.exports = vendors;
