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
  const authenticateBtn = await $('button*=Select Wallet');
  await authenticateBtn.waitForClickable();
  await authenticateBtn.click();
};

exports.issue = async () => {
  const receiveCredentialBtn = await $('button*=Receive Credential');
  await receiveCredentialBtn.waitForClickable();
  await receiveCredentialBtn.click();
};

exports.finish = async () => {
  const successNotification = await $('.notification-box-sucess');
  await successNotification.waitForDisplayed();
};
