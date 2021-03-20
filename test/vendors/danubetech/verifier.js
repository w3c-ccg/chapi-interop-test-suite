'use strict';

const constants = require('./constants');
const helpers = require('./helpers');

const FLOW_URLS = constants.urls;

/*************************** Public API ******************************/
exports.getUrl = async ({key}) => {
  const urls = FLOW_URLS.get(key);
  if(!(urls && urls.verifier)) {
    throw new Error(`No URL found for ${key}`);
  }
  return urls.verifier;
};

exports.verify = async ctx => {
  const {key} = ctx;
  if(key === '2020-05-07-dhs-prc') {
    const presentPrcBtn = await $('button*=Present Permanent Resident');
    await presentPrcBtn.waitForClickable();
    await presentPrcBtn.click();

  } else if(key === '2021-03-15-svip-vaxcert') {
    await helpers.loginToMyUSCIS(ctx);
    await helpers.clickPresentVaxCert(ctx);
  }
};

exports.finish = async () => {
  const successNotification = await $('.notification-box-success');
  await successNotification.waitForDisplayed();
};
