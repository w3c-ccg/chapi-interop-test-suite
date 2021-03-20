'use strict';

const {chapi} = require('../../helpers');
const mattr = require('../mattr');

exports.pickupVaxCert = async ctx => {
  const vaxCertScenarioKey = '2021-03-15-svip-vaxcert';
  const vaxCtx = {
    ...ctx,
    credentials: ['VaccinationCertificate'],
    key: vaxCertScenarioKey
  };

  const {walletVendor} = ctx;

  // 1. Navigate to Issuer Website
  const url = await mattr.issuer.api.getUrl(vaxCtx);
  await browser.newWindow(url);

  // 2. Authenticate at Issuer Website with Wallet
  await mattr.issuer.api.authenticate(vaxCtx);
  await chapi.chooseWallet({
    name: walletVendor.wallet.meta.name
  });
  await walletVendor.wallet.api.authenticate(vaxCtx);
  await browser.switchToFrame(null);

  // 3. Issue credential to authenticated DID at Issuer Website
  await mattr.issuer.api.issue(vaxCtx);

  // 4. Store credential with Wallet
  await chapi.chooseWallet({
    name: walletVendor.wallet.meta.name
  });
  await walletVendor.wallet.api.storeCredentials(vaxCtx);
  await browser.switchToFrame(null);

  // 5. Show success message at Issuer Website
  await mattr.issuer.api.finish(vaxCtx);
};

exports.loginToMyUSCIS = async () => {
  // click login into myUSCIS button
  const loginMyUSCISBtn = await $('button*=Login to myUSCIS');
  await loginMyUSCISBtn.waitForClickable();
  await loginMyUSCISBtn.click();

  // enter username and password into myUSCIS
  const usernameInput = await $('//*[@id="j_username"]');
  const passwordInput = await $('//*[@id="j_password"]');

  await usernameInput.addValue('user');
  await passwordInput.addValue('password');

  // send enter key
  await browser.keys('Enter');
};

exports.clickPresentVaxCert = async () => {
  // present vaccination certificate
  const presentVaxCertBtn = await $('button*=Present Vaccination Certificate');
  await presentVaxCertBtn.waitForClickable();
  await presentVaxCertBtn.click();
};

exports.presentVaxCert = async ctx => {
  const {walletVendor} = ctx;
  console.log(walletVendor);
  await chapi.chooseWallet({
    name: walletVendor.wallet.meta.name
  });
  await walletVendor.wallet.api.presentCredentials(ctx);
  await browser.switchToFrame(null);
};
