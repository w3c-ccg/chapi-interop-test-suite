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
  const authenticateBtn = await $('button*=authenticate');
  await authenticateBtn.waitForClickable();
  await authenticateBtn.click();
};

exports.finish = async () => {
  const finishBtn = await $('button*=Finish');
  await finishBtn.waitForClickable();
  await finishBtn.click();
  const homePageHeader = await $('h1*=verify eligibility');
  await homePageHeader.waitForDisplayed();
};
