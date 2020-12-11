'use strict';

const constants = require('./constants');
const {chapi} = require('../../helpers');

const DID_METHODS = constants.didMethods;
const FLOW_URLS = constants.urls;
const timeout = 45000;

/*************************** Public API ******************************/

exports.getUrl = async ({key}) => {
  const urls = FLOW_URLS.get(key);
  if(!(urls && urls.wallet)) {
    throw new Error(`No URL found for ${key}`);
  }
  return urls.wallet;
};

exports.init = async ({email, name}) => {
  await _getWallet();

  const profileName = _getProfileName({
    name,
    organization: 'Digital Bazaar',
    didMethod: DID_METHODS.v1
  });

  await _register({email, name: profileName});
  await chapi.allow();
  await _waitForDashboard();
  // do not create second profile
  // const profileNameSecondary = _getProfileName({
  //   name,
  //   organization: 'Digital Bazaar',
  //   didMethod: DID_METHODS.key
  // });
  // return _createProfile({name: profileNameSecondary, type: 'Temporary'});
};

exports.authenticate = async ({name}) => {
  const profileName = _getProfileName({
    name,
    organization: 'Digital Bazaar',
    didMethod: DID_METHODS.v1
  });
  await _sendCredentials({authenticate: true, name: profileName});
};

exports.storeCredentials = async ({name}) => {
  const profileName = _getProfileName({
    name,
    organization: 'Digital Bazaar',
    didMethod: DID_METHODS.v1
  });
  await _acceptCredentials({name: profileName});
};

exports.presentCredentials = async ({name}) => {
  const profileName = _getProfileName({
    name,
    organization: 'Digital Bazaar',
    didMethod: DID_METHODS.v1
  });
  await _sendCredentials({authenticate: false, name: profileName});
};

/*************************** Helper functions ******************************/

async function _acceptCredentials({name} = {}) {
  // profile selector
  const profileInput = await $('input');
  await profileInput.waitForExist();

  // choose profile by name
  if(name) {
    // click on the profile chooser element
    /* eslint-disable-next-line max-len */
    const profileChooser = await $('/html/body/div[1]/div/div[2]/div/main/div[1]/div[2]/div/label/div/div/div[2]/div[1]');
    await profileChooser.waitForClickable();
    await profileChooser.click();
    await _selectProfile({name});
  }

  const storeBtn = await $('button=Store');
  await storeBtn.waitForClickable();
  await storeBtn.click();
  await storeBtn.waitForExist({reverse: true});
}

async function _sendCredentials({authenticate = false, name} = {}) {
  // profile selector
  const profileInput = await $('input');
  await profileInput.waitForExist();

  // choose profile by name
  if(name) {
    // click on the profile chooser element
    const profileChooser = await $(
      '/html/body/div[1]/div/div[2]/div/main/div[2]/div/label/div/div/div[2]');
    await profileChooser.waitForClickable();
    await profileChooser.click();
    await _selectProfile({name});
  }

  // FIXME: authenticate button is clickable before profileInput is ready
  const buttonText = authenticate ? 'Authenticate' : 'Share';
  const authenticateBtn = await $(`button=${buttonText}`);
  await authenticateBtn.waitForClickable();
  await authenticateBtn.click();

  await authenticateBtn.waitForExist({reverse: true});
}

async function _getWallet() {
  const getWalletButton = await $('a*=Get a Wallet');
  await getWalletButton.waitForClickable();
  await getWalletButton.click();
}

async function _register({email, name}) {
  let inputs;
  await browser.waitUntil(async () => {
    inputs = await $$('input');
    return inputs.length === 3;
  });
  const [nameInput, emailInput] = inputs;
  await nameInput.addValue(name);
  await emailInput.addValue(email);
  const tosCheck = await $('.q-checkbox');
  await tosCheck.click();
  const registerBtn = await $('button*=Register');
  await registerBtn.waitForClickable();
  await registerBtn.click();
}

async function _waitForDashboard() {
  const credentialsHeader = await $('h6*=Credentials');
  // takes a while for account registration to complete
  await credentialsHeader.waitForExist({timeout});
  const credentialsList = await $('div*=You do not have any credentials yet.');
  await credentialsList.waitForExist({timeout});
}

// eslint-disable-next-line no-unused-vars
async function _createProfile({name, type = 'Permanent'}) {
  const profilesNavbarButton = await $('button*=Profiles');
  await profilesNavbarButton.waitForClickable();
  await profilesNavbarButton.click();
  const addProfileButton = await $('button*=Add Profile');
  await addProfileButton.waitForClickable();
  await addProfileButton.click();
  const profileNameInput = await $(`input[aria-label='Profile Name']`);
  await profileNameInput.addValue(name);
  const profileTypeSelection = await $(`div[aria-label='${type} Profile']`);
  await profileTypeSelection.waitForClickable();
  await profileTypeSelection.click();
  const createProfileButton = await $('button*=Create');
  await createProfileButton.waitForClickable();
  await createProfileButton.click();
  await createProfileButton.waitForDisplayed({reverse: true, timeout});
}

function _getProfileName({name, organization, didMethod}) {
  return `${name} - ${organization} (did:${didMethod})`;
}

async function _selectProfile({name}) {
  /* eslint-disable-next-line max-len */
  const selectionDiv = await $(`//div/div[contains(@class, 'q-item')][text()='${name}']`);
  const divToClick = await selectionDiv.$('..');
  await divToClick.waitForClickable({timeout});
  await divToClick.click();
}
