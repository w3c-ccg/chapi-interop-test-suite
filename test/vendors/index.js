'use strict';

const danubetech = require('./danubetech');
const digitalbazaar = require('./digitalbazaar');
const transmute = require('./transmute');

const vendors = {};

vendors['danubetech'] = danubetech;
vendors['digitalbazaar'] = digitalbazaar;
vendors['transmute'] = transmute;

module.exports = vendors;
