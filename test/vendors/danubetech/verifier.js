'use strict';

const constants = require('./constants');

const FLOW_URLS = constants.urls;

/*************************** Public API ******************************/

exports.getUrl = async ({key}) => {
  const urls = FLOW_URLS.get(key);
  if(!(urls && urls.verifier)) {
    throw new Error(`No URL found for ${key}`);
  }
  return urls.verifier;
};

exports.verify = async () => {
  const presentCredentialsBtn = await $('button*=Present Credentials');
  await presentCredentialsBtn.waitForClickable();
  await presentCredentialsBtn.click();
};

exports.finish = async () => {
  const successNotification = await $('.notification-box-sucess');
  await successNotification.waitForDisplayed();
};
