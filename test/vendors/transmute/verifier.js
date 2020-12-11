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

exports.verify = async ({key}) => {
  if(key === '2020-05-07-dhs-prc') {
    await _selectCredentialType({type: 'prc'});
  } else if(key === '2020-05-07-dhs-cmtr') {
    await _selectCredentialType({type: 'cmtr'});
  }
  const verifyBtn = await $('button*=Verify');
  await verifyBtn.waitForClickable();
  await verifyBtn.click();
};

exports.finish = async () => {
  const successNotification =
    await $('#client-snackbar*=verification succeeded');
  await successNotification.waitForDisplayed({timeout: 30000});
};

/*************************** Helper functions ******************************/

async function _selectCredentialType({type = 'cmtr'} = {}) {
  if(type === 'prc') {
    let inputs;
    await browser.waitUntil(async () => {
      inputs = await $$('input#country-select-demo');
      return inputs.length === 2;
    });
    const credentialType = inputs[1];
    await credentialType.waitForDisplayed();
    await credentialType.click();
    await browser.keys(['p', 'e', 'r', 'm', 'Enter']);
  }
}
