# GTD example

This project is the test example which includes:

- Bleh
- Bleh
- Bleh

#### Contributing Prerequisites

- [Node LTS](https://nodejs.org)
- [Express](https://expressjs.com/)

#### Authenticate to Artifactory

- Logging into the NPM Registry
  - `FUNC_ID_USER=<IBM email address>`
  - `FUNC_ID_PASS=<IBM password>`
  - `curl -u "$FUNC_ID_USER:$FUNC_ID_PASS" "https://na.artifactory.swg-devops.com/artifactory/api/npm/blockchain-solutions-npm-local/auth/pbsa" >> ~/.npmrc`

## Development server

To start the development server run `npm start <app>`, where `<app>` is something.

Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io). By default, this command will run the tests continuously. To run the tests once and generate a coverage report run `npm run coverage`.

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Internationalization (i18n)

Please reference the official [i18n Cookbook](https://angular.io/docs/ts/latest/cookbook/i18n.html) for a complete guide to i18n.

### Quickstart

* Add 'i18n' attributes to template elements that need to be translated:
`<button i18n>Search</button>`
* Help the translator by adding a description:
`<div i18n="Estimated time of arrival">ETA:</div>`
If the same string appears in multiple places, the description needs to be added to each occurance to ensure that it gets extracted to the xlf file.
* To translate an element's attribute, insert an addiitonal attribute `i18n-<attribute name>`. For example, for `placeholder` text additionally insert `i18n-placeholder` to mark it for translation.
* To translate multiple selections, use [Select among alternative texts](https://angular.io/docs/ts/latest/cookbook/i18n.html#!#select).

### Externalizing Strings

To externalize text marked for translation run `npm run translation-prep`. This will update existing locale files and generate pseudo translations. This command should be run for any feature deliverable that includes a change to translatable text as part of the developer process. If you are not logged in to docker-artifactory this will not work correctly.

To verify strings are properly externalized run `npm run serve-i18n <appCode>`. This will serve the english version by default. To target a different locale run `npm run serve-i18n <appCode> -- --locale <locale> --i18n-file locales/messages.<locale>.xlf`.

### Pseudo-Translation

Pseudo-translations are updated when `npm run translation-prep` is executed. To view an application with pseudo-translations execute `npm run serve-pseudo <appCode>`

