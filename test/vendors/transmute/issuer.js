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
  const authenticateBtn = await $('button=Authenticate');
  await authenticateBtn.waitForClickable();
  await authenticateBtn.click();
};

exports.issue = async ({key}) => {
  await _receiveCredential({key});
};

exports.finish = async () => {};

/*************************** Helper functions ******************************/

async function _receiveCredential({key = '2020-05-07-dhs-cmtr'} = {}) {
  const issuerDid = await $('#outlined-select-verificationMethod');
  await issuerDid.waitForClickable();
  await issuerDid.click();
  const didV1Test = await $(
    'li=did:v1:test:nym:z6MkhdmzFu659ZJ4XKj31vtEDmjvsi5yDZG5L7Caz63oP39k');
  await didV1Test.waitForClickable();
  await didV1Test.click();

  // the default credential type is cmtr does not require any changes
  if(key === '2020-05-07-dhs-prc') {
    // there are two inputs on screen with the same incorrect ID name
    const inputs = await $$('input#country-select-demo');
    const credentialType = inputs[1];
    await credentialType.waitForClickable();
    await credentialType.click();
    await browser.keys(['p', 'e', 'r', 'm', 'Enter']);
  }

  const receiveCredentialBtn = await $('button=Receive');
  await receiveCredentialBtn.waitForClickable();
  await receiveCredentialBtn.click();
}
