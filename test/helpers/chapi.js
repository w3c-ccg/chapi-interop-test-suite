'use strict';

exports.chooseWallet = async ({name}) => {
  const chapiFrame = await $('iframe');
  await chapiFrame.waitForExist();
  await browser.switchToFrame(chapiFrame);

  const nextButton = await $('button*=Next');
  await nextButton.waitForClickable();
  // FIXME: some issue with next button causes this to fail about 20%
  await browser.pause(1000);
  await nextButton.click();

  const demoWallet = await $(`strong*=${name}`);
  await demoWallet.waitForClickable();
  await demoWallet.click();

  const innerWalletFrame = await $('iframe');
  await innerWalletFrame.waitForExist();
  await browser.switchToFrame(innerWalletFrame);

  let dialogs;
  await browser.waitUntil(async () => {
    dialogs = await $$('dialog');
    return dialogs.length === 2;
  });

  const innerWalletFrame2 = await dialogs[1].$('iframe');
  await innerWalletFrame2.waitForExist();
  await browser.switchToFrame(innerWalletFrame2);
};

exports.allow = async () => {
  const chapiFrame = await $('iframe');
  await chapiFrame.waitForExist();
  expect(chapiFrame).toHaveAttrContaining('src', 'https://authn.io/mediator');
  await browser.switchToFrame(chapiFrame);
  const allowBtn = await $('button*=Allow');
  await allowBtn.waitForClickable();
  await allowBtn.click();
  await chapiFrame.waitForExist({reverse: true});
  await browser.switchToFrame(null);
};
