'use strict';

const constants = require('./constants');

const FLOW_URLS = constants.urls;

/*************************** Public API ******************************/

exports.getUrl = async ({key}) => {
  const urls = FLOW_URLS.get(key);
  if(!(urls && urls.issuer)) {
    throw new Error(`No URL found for ${key}`);
  }
  return urls.issuer;
};

exports.authenticate = async () => {
  const authenticateBtn = await $('button*=authenticate');
  await authenticateBtn.waitForClickable();
  await authenticateBtn.click();
};

exports.issue = async () => {
  await _verificationForm();
  await _storeCredential();
};

exports.finish = async () => {
  const invisibleLogout = await $('button.q-btn--flat');
  await invisibleLogout.waitForClickable();
  await invisibleLogout.click();
  const authenticateHeading = await $('h1*=authenticate');
  await authenticateHeading.waitForDisplayed();
};

/*************************** Helper functions ******************************/

async function _storeCredential() {
  const storeBtn = await $('button*=store credential');
  await storeBtn.waitForClickable();
  await storeBtn.click();
}

async function _verificationForm() {
  const input = await $('input');
  await input.waitForExist();
  await input.setValue('33333333333');
  const submitBtn = await $('button*=Submit Verification Code');
  await submitBtn.waitForClickable();
  await submitBtn.click();
}
