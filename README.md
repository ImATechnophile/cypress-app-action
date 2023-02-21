# test-todomvc-using-app-actions

[![Build status][ci-image]][ci-url] [![renovate-app badge][renovate-badge]][renovate-app] [![test-todomvc-using-app-actions](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/ovmwmi/master&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/ovmwmi/runs) [![ci](https://github.com/bahmutov/test-todomvc-using-app-actions/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/bahmutov/test-todomvc-using-app-actions/actions/workflows/ci.yml) [![spec dependencies](https://github.com/bahmutov/test-todomvc-using-app-actions/actions/workflows/spec-dependencies.yml/badge.svg?branch=master)](https://github.com/bahmutov/test-todomvc-using-app-actions/actions/workflows/spec-dependencies.yml)

![cypress version](https://img.shields.io/badge/cypress-12.6.0-brightgreen) ![@bahmutov/cy-grep version](https://img.shields.io/badge/@bahmutov/cy--grep-1.4.2-brightgreen) ![find-cypress-specs version](https://img.shields.io/badge/find--cypress--specs-1.25.3-brightgreen)

> Example Cypress tests going from page objects to app actions

This repo was used as an example in these blog posts:

- [Stop using Page Objects and Start using App Actions](https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/)
- [Convert Cypress Specs from JavaScript to TypeScript](https://glebbahmutov.com/blog/cypress-js-to-ts/).
- [Run Just The Failed Tests In Cypress](https://glebbahmutov.com/blog/run-failed-tests/)

## Steps

Each step is a Git tag. You can check out particular tag, install dependencies and run application and tests. Usually it would be:

```shell
git clone <tag>
npm install
npm start
# from another terminal
npm run cypress
```
