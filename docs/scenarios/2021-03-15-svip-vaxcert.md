
# DHS SVIP Vaccination Certificate

**Resources**

https://w3c-ccg.github.io/vaccination-vocab/

**Verifiable Credential**
```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/vaccination/v1"
  ],
  "type": [
    "VerifiableCredential",
    "VaccinationCertificate"
  ],
  "id": "https://example.com/27c4fad7-d298-4b40-8f1a-d435aa9e8edd",
  "name": "COVID-19 Vaccination Certificate",
  "description": "COVID-19 Vaccination Certificate",
  "issuer": {
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB4CAYAAADWpl3sAAAACXB...tKZuiDorz"
  },
  "issuanceDate": "2019-12-03T12:19:52Z",
  "expirationDate": "2029-12-03T12:19:52Z",
  "credentialSubject": {
    "type": "VaccinationEvent",
    "batchNumber": "1183738569",
    "administeringCentre": "FEMA",
    "healthProfessional": "FEMA",
    "countryOfVaccination": "US",
    "dateOfVaccination": "2021-02-01",
    "recipient": {
      "type": "VaccineRecipient",
      "givenName": "LOUIS",
      "familyName": "PASTEUR",
      "gender": "Male",
      "birthDate": "1978-08-17"
    },
    "vaccine": {
      "type": "Vaccine",
      "disease": "COVID-19",
      "atcCode": "J07BX03",
      "medicinalProductName": "COVID-19 Vaccine Moderna",
      "marketingAuthorizationHolder": "Moderna Biotech"
    },
    "id": "did:v1:test:nym:z6MkoZarJXSohrkZ3cd1N4SHbwgBuKQDVB4R2mGWqWJRM7Nn"
  },
  "proof": {
    "type": "Ed25519Signature2018",
    "created": "2021-03-20T03:20:12Z",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..JqWi09sLcsyPwEUcJWMNnuMVShq_hOQKjYRDUDoJqFqGwILU71NDqxjE9QyVpppKpFFtLNPIRoM_els8ZvliAw",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "did:key:z6Mkg8e1jy2Ro1NBgM3PKSBo1tTeB97gTgmveRatKZuiDorz#z6Mkg8e1jy2Ro1NBgM3PKSBo1tTeB97gTgmveRatKZuiDorz"
  }
}
```
