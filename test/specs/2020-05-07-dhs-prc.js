'use strict';

const {chapi, getVendors, getVendorTitle} = require('../helpers');
const path = require('path');
const uuid = require('uuid-random');
const vendors = require('../vendors');

const TITLE = 'DHS/USCIS Permanent Resident Card';
const SCENARIO_KEY = path.parse(__filename).name;

const {walletVendors, issuerVendors, verifierVendors} = getVendors({
  vendors,
  scenarioKey: SCENARIO_KEY
});

const BASE_CTX = {
  credentials: ['PermanentResidentCard'],
  key: SCENARIO_KEY,
  name: 'Jane Doe',
  familyName: 'Doe',
  givenName: 'Jane',
  email: '',
  walletVendor: '',
  issuerVendor: '',
  verifierVendor: ''
};

walletVendors.forEach(walletVendor => {
  issuerVendors.forEach(issuerVendor => {
    verifierVendors.forEach(verifierVendor => {

      const VENDOR_TITLE = getVendorTitle({
        walletVendor,
        issuerVendor,
        verifierVendor
      });

      describe(`[${TITLE}] ${VENDOR_TITLE}`, () => {
        const ctx = {
          ...BASE_CTX,
          email: `${uuid()}@example.com`,
          walletVendor,
          issuerVendor,
          verifierVendor,
        };

        // runs once before the first test in this block
        before(async () => {
          await browser.reloadSession();
          await browser.maximizeWindow();
        });

        it('creates a wallet', async function() {
          this.timeout(300000);

          // 1. Navigate to Wallet Website
          const url = await walletVendor.wallet.api.getUrl(ctx);
          await browser.navigateTo(url);

          // 2. Initialize Wallet (register/sign-up/etc.)
          await walletVendor.wallet.api.init(ctx);
        });

        it('issues a PRC credential', async () => {
          // 1. Navigate to Issuer Website
          if(issuerVendor.issuer.api.setup) {
            await issuerVendor.issuer.api.setup(ctx);
          }
          const url = await issuerVendor.issuer.api.getUrl(ctx);
          await browser.newWindow(url);

          // 2. Authenticate at Issuer Website with Wallet
          await issuerVendor.issuer.api.authenticate(ctx);
          await chapi.chooseWallet({
            name: walletVendor.wallet.meta.name
          });
          await walletVendor.wallet.api.authenticate(ctx);
          await browser.switchToFrame(null);

          // 3. Issue credential to authenticated DID at Issuer Website
          await issuerVendor.issuer.api.issue(ctx);

          // 4. Store credential with Wallet
          await chapi.chooseWallet({
            name: walletVendor.wallet.meta.name
          });
          await walletVendor.wallet.api.storeCredentials(ctx);
          await browser.switchToFrame(null);

          // 5. Show success message at Issuer Website
          await issuerVendor.issuer.api.finish(ctx);
        });

        it('verifies a PRC credential', async () => {
          // 1. Navigate to Verifier Website
          const url = await verifierVendor.verifier.api.getUrl(ctx);
          await browser.newWindow(url);

          // 2. Verify credentials at Verifier Website with Wallet
          await verifierVendor.verifier.api.verify(ctx);
          await chapi.chooseWallet({
            name: walletVendor.wallet.meta.name
          });
          await walletVendor.wallet.api.presentCredentials(ctx);
          await browser.switchToFrame(null);

          // 3. Show success message at Verifier Website
          await verifierVendor.verifier.api.finish(ctx);
        });
      });
    });
  });
});
