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

### US Permanent Resident Card (2020-05-07-dhs-prc)

Demonstrate the issuance and verification of a Permanent Resident Card.

**Resources**

https://w3c-ccg.github.io/citizenship-vocab/

**Verifiable Credential**
```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/citizenship/v1"
  ],
  "id": "https://prc.uscis.gov/credentials/97a2ab7a-a2fc-4eb6-b702-0658fb7eb1d9",
  "type": [
    "VerifiableCredential",
    "PermanentResidentCard"
  ],
  "issuer": {
    "id": "did:v1:test:nym:z6MkqaFQ7SZdWMgUkiQLvxZBpmkmYmbgAcAvXftU7jfmMWLa",
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAA..."
  },
  "issuanceDate": "2020-01-01T00:00:00.000Z",
  "expirationDate": "2030-01-01T00:00:00.000Z",
  "name": "Permanent Resident Card",
  "description": "Your U.S. Permanent Resident Card gives you the right to live in, work in, and be protected by all laws of the United States provided that you do not commit any actions that would make you removable under immigration law.",
  "credentialSubject": {
    "id": "did:v1:test:nym:z6Mkt4DoLG1HfYwqthmW9Kwo5pZ5thzBCxCbwTq91VW7Lw9H",
    "type": [
      "Person",
      "PermanentResident"
    ],
    "givenName": "Louis",
    "familyName": "Pasteur",
    "gender": "Male",
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAAB...",
    "residentSince": "2015-01-01T00:00:00.000Z",
    "lprCategory": "C09",
    "lprNumber": "999-999-999",
    "birthCountry": "Mexico",
    "birthDate": "1958-07-17T00:00:00.000Z"
  },
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2020-12-10T22:59:56Z",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..B-aNh_6f9bqiGmDTy9eDUNOFR9Qhi6DTUBAgWDOlveGFmXVk8T7zhJYCwSlElU_LReivwpirXUqrBzEqVNRmCg",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "did:v1:test:nym:z6MkqaFQ7SZdWMgUkiQLvxZBpmkmYmbgAcAvXftU7jfmMWLa#z6MkqaFQ7SZdWMgUkiQLvxZBpmkmYmbgAcAvXftU7jfmMWLa"
  }
}
```


### Certified Mill Test Report (2020-05-07-dhs-cmtr)

Demonstrate the issuance and verification of a Certified Mill Test Report.

**Verifiable Credential**

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3c-ccg.github.io/vc-examples/cmtr/examples/v0.2/cmtr-v0.2.jsonld"
  ],
  "id": "http://example.com/credentials/123",
  "type": [
    "VerifiableCredential",
    "CertifiedMillTestReport"
  ],
  "issuer": "did:v1:test:nym:z6MkhdmzFu659ZJ4XKj31vtEDmjvsi5yDZG5L7Caz63oP39k",
  "issuanceDate": "2020-03-09T18:19:10.033Z",
  "name": "Steel Inc. CMTR",
  "description": "A mill test report (MTR) and often also called a certified mill test report, certified material test report, mill test certificate (MTC), inspection certificate, certificate of test, or a host of other names, is a quality assurance document used in the metals industry that certifies a material's chemical and physical properties and states a product made of metal (steel, aluminum, brass or other alloys) complies with an international standards organization (such as ANSI, ASME, etc.) specific standards.",
  "credentialSubject": {
    "id": "did:v1:test:nym:z6Mkt4DoLG1HfYwqthmW9Kwo5pZ5thzBCxCbwTq91VW7Lw9H",
    "cmtr": {
      "companyName": "Steel Inc.",
      "companyWebsite": "https://example.com",
      "companyAddress": "3260 46 Ave SE #30, Calgary, AB T2B 3K7, Canada",
      "companyPhoneNumber": "555 555 5555",
      "companyBrandMark": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICA...",
      "companyContactPersonName": "Test Test",
      "companyEmail": "stacy@example.com",
      "certificateNumber": "CT 001",
      "purchaseOrder": "PO 123",
      "invoiceNumber": "IN 456",
      "authorizingPartyName": "Stacy Slater",
      "authorizingPartyTitle": "Chief Quality Assurance Officer",
      "authorizingPartyDate": "February 19, 2020",
      "manufacturerLocationCompanyName": "Steel Inc.",
      "manufacturerLocationStreetAddress": "3260 46 Ave SE #30",
      "manufacturerLocationAddressLocality": "Calgary",
      "manufacturerLocationAddressRegion": "AB T2B 3K7",
      "manufacturerLocationPostalCode": "",
      "manufacturerLocationAddressCountry": "Canada",
      "customerLocationCompanyName": "Nucor Steel Jewett",
      "customerLocationStreetAddress": "U.S. 79",
      "customerLocationAddressLocality": "Jewett",
      "customerLocationAddressRegion": "TX",
      "customerLocationPostalCode": "",
      "customerLocationAddressCountry": "USA",
      "additionalRemarks": "Product is coated for high temperatures. STEEL-IT High Temp coatings are intended for use where surface temperatures reach above 200°F, such as the external surfaces of industrial ovens, certain types of piping used in chemical and other manufacturing, and more. Customers choose which high temp coating is right for them based on whether USDA approval is required; whether the surface will be exposed to corrosive chemicals; or whether the surface will be exposed to sunlight or other sources of ultraviolet radiation.",
      "productDescription": "SS490 steel is a structural hot Rolled steel in the form of plates, sheets & strips for general structural applications. SS490 is a material grade and designation defined in JIS G 3101 standard. JIS G 3101 is a Japanese material standard for hot Rolled steel plates, sheets, strips for general structural usage. The structural quality hot rolled SS490 steel is more reliable in its tensile strength than SS400 steel...",
      "chemicalProperties": {
        "columns": [
          {
            "title": "Heat Number",
            "field": "heatNumber"
          },
          {
            "title": "C",
            "field": "C"
          },
          {
            "title": "Si",
            "field": "Si"
          },
          {
            "title": "P",
            "field": "P"
          },
          {
            "title": "S",
            "field": "S"
          },
          {
            "title": "V",
            "field": "V"
          },
          {
            "title": "Cr",
            "field": "Cr"
          },
          {
            "title": "Mn",
            "field": "Mn"
          },
          {
            "title": "Ni",
            "field": "Ni"
          },
          {
            "title": "Cu",
            "field": "Cu"
          },
          {
            "title": "Mo",
            "field": "Mo"
          },
          {
            "title": "Sn",
            "field": "Sn"
          }
        ],
        "rows": [
          {
            "heatNumber": "404012",
            "C": ".1"
          },
          {
            "heatNumber": "387230",
            "C": ".4"
          }
        ]
      },
      "mechanicalProperties": {
        "columns": [
          {
            "title": "Heat Number",
            "field": "heatNumber"
          },
          {
            "title": "Item Description",
            "field": "description"
          },
          {
            "title": "Quantity",
            "field": "quantity"
          },
          {
            "title": "Dimension",
            "field": "dimension"
          },
          {
            "title": "Net Weight (Kg)",
            "field": "weight"
          },
          {
            "title": "Yield to Tensile Ratio",
            "field": "yieldToTensileRatio"
          },
          {
            "title": "Yield Strength (PSI)",
            "field": "yieldStrength"
          },
          {
            "title": "Tensile Strength (PSI)",
            "field": "tensileStrength"
          },
          {
            "title": "Elongation (%)",
            "field": "elongation"
          },
          {
            "title": "CHARPY IMPACT Temp (C)",
            "field": "charpyImpactTempDegreesC"
          },
          {
            "title": "CHARPY IMPACT Energy (J)",
            "field": "charpyImpactEnergyJoules"
          }
        ],
        "rows": [
          {
            "description": "Hot Rolled Steel Pipe",
            "quantity": "2",
            "heatNumber": "404012",
            "dimension": "203.2 mm dia. x 5609 + 5663 mm (8\" dia.)",
            "weight": "2900.27",
            "yieldToTensileRatio": "0.73",
            "yieldStrength": "52000",
            "tensileStrength": "71000",
            "elongation": "27"
          },
          {
            "description": "Cold Rolled Steel Bar",
            "quantity": "500",
            "heatNumber": "387230",
            "dimension": "203.2 mm dia. x 5609 + 5663 mm",
            "weight": "2900.27",
            "yieldToTensileRatio": "0.72",
            "yieldStrength": "55000",
            "tensileStrength": "76000",
            "elongation": "27"
          }
        ]
      },
      "standardSpecifications": [
        {
          "title": "JIS G 3101",
          "description": "Rolled steels for general structure",
          "isoCode": "JIS G 3101"
        }
      ],
      "standardGrades": [
        {
          "title": "SUS201",
          "description": "SUS201"
        }
      ],
      "proprietarySpecifications": [
        {
          "title": "ASTM-51",
          "description": "ASTM-51"
        }
      ],
      "proprietaryGrades": [
        {
          "title": "BF-4122",
          "description": "BF-4122"
        }
      ]
    }
  },
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2020-12-10T23:04:22.871Z",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..xAAXgYR0ndr-990gdjx4Bod_1B9j6d1QThbVPP_23-I30E5qi6cUr1rQpnAydi2W47OZAW5YL2PziiP0KUBKBg",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "did:v1:test:nym:z6MkhdmzFu659ZJ4XKj31vtEDmjvsi5yDZG5L7Caz63oP39k#z6MkiukuAuQAE8ozxvmahnQGzApvtW7KT5XXKfojjwbdEomY"
  }
}
```

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
