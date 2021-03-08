# CHAPI Interoperability Test Suite

The
[Credential Handler API (CHAPI) Interoperability Test Suite](https://w3c-ccg.github.io/credential-handler-api/) is used to make sure that Verifiable Credential issuers, digital wallet providers, and Verifiable Credential verifiers that claim they are compatible with the Web-browser based Verifiable Credentials ecosystem can demonstrate that they are.

At present, implementers tend to click through the [CHAPI demo sites](https://github.com/digitalbazaar/credential-handler-polyfill/#demo) and various other interoperability sites to see if they are conformant. This does not check corner cases, is a manual process, and does not provide an objective measure of conformance.

The approach taken by this project provides an automated process with objective tests that check for corner cases. A human-readable report is produced that can then be compared to other conformance test reports to see which implementers support which features.

These tests are, in part, the result of the 2020 DHS Silicon Valley Interoperability Program InteropFest, which pulls in individuals from private industry, government (technology, privacy, specific business components), and the Credentials CG. The tests focus on real world use cases and involve people from US, Canadian, EU, and New Zealand backgrounds (to date). The purpose of this test suite is to get broader engagement from CCG and W3C (which are global in nature and involve individuals from around the globe).

The output of the test results are provided in a human readable form. An example can be found here (warning 40MB file, long load times due to image capture at each step of the process):

https://w3c-ccg.github.io/chapi-interop-test-suite/docs/reports/

The output for each report is a human readable summary (green with checkmark good, red with X bad), and images that visually show the screen result of each test.

# Scenarios

There are multiple scenarios, each of which is detailed below.

### DHS SVIP Permanent Resident Card ([2020-05-07-dhs-prc](./docs/scenarios/2020-05-07-dhs-prc.md))

Demonstrate the issuance and verification of a Permanent Resident Card.

### DHS SVIP Certified Mill Test Report ([2020-05-07-dhs-cmtr](./docs/scenarios/2020-05-07-dhs-cmtr.md))

Demonstrate the issuance and verification of a Certified Mill Test Report.

## Reports

Reports are generated upon new commits to the main branch. To view more click [here](./docs/reports/index.md).

## Running Locally
```sh
npm install
npm test
```

## Contributing

You may contribute to this test suite by submitting pull requests here:

https://github.com/digitalbazaar/chapi-interop-test-suite/

## CHAPI Resources
* [Credential Handler API Specification](https://w3c-ccg.github.io/credential-handler-api/)
* [Credential Handler API Repo](https://github.com/w3c-ccg/credential-handler-api)
* [Credential Handler API Polyfill](https://github.com/digitalbazaar/credential-handler-polyfill)


## Acknowledgements
Portions of the work on this test suite have been funded by the United States Department of Homeland Security Silicon Valley Innovation Program under OTA No. 70RSAT20T00000029.

## License

[Apache 2](LICENSE) © Digital Bazaar
