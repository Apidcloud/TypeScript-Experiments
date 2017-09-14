# TypeScript-Experiments
Some project setup experiments with TypeScript.

[![Build Status][build-badge]][build]
[![Build status][win-build-badge]][win-build]
[![codecov][codecov-badge]][codecov]
[![Dependencies][dependencyci-badge]][dependencyci]
[![Commitizen friendly][commitizen-badge]][commitizen]
[![Semantic-release][semantic-release-badge]][semantic-release]

[![MIT License][license-badge]][LICENSE]
[![npm-version][npm-version-badge]][package]
[![typescript][typescript-version-badge]][typescript]
[![node-version][node-version-badge]][node]

## Setup details

This package contemplates the use and combination of several packages, namely:
- [typescript] as the language for both implementation and tests
- [babel] for transpiling ES6 (ES2015) to ES5 using [babel-preset-es2015], and [babel-transform-runtime] and
 [babel-stage-3] for async/await support
- [webpack] for bundling everything into a single file with the help of [ts-loader],
 [babel-loader] and [cross-env]
- [webpack-dev-server] for running a live hot server
- [webpack-notifier] for build result notifications
- [jest] for testing in [typescript] using [ts-jest] and [@types/jest]
- [travis-ci] and [appveyor-ci] for Continuous Integration on unix and windows systems respectively
- [codecov] for code coverage
- [semantic-release] to handle publishing on [github] and [npm][package]
- [commitizen] together with [cz-conventional-changelog] to help with semantic commits
- [husky] to handle pre-commits and commit-msg hooks
- [validate-commit-msg] to validate commit messages


[github]: https://github.com/Apidcloud/TypeScript-Experiments
[package]: https://www.npmjs.com/package/experimental-library
[build-badge]: https://travis-ci.org/Apidcloud/TypeScript-Experiments.svg?branch=master
[build]: https://travis-ci.org/Apidcloud/TypeScript-Experiments
[win-build-badge]: https://ci.appveyor.com/api/projects/status/e6rb3wq7ji91y2up/branch/master?svg=true
[win-build]: https://ci.appveyor.com/project/Apidcloud/typescript-experiments/branch/master
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen]: http://commitizen.github.io/cz-cli/
[codecov-badge]: https://codecov.io/gh/Apidcloud/TypeScript-Experiments/branch/master/graph/badge.svg
[codecov]: https://codecov.io/gh/Apidcloud/TypeScript-Experiments
[npm-version-badge]: https://img.shields.io/npm/v/experimental-library.svg
[node]: https://nodejs.org
[node-version-badge]: https://img.shields.io/badge/node-%3E%3D%206.0-orange.svg
[license-badge]: https://img.shields.io/npm/l/experimental-library.svg
[LICENSE]: https://github.com/Apidcloud/TypeScript-Experiments/blob/dev/LICENSE
[dependencyci-badge]: https://dependencyci.com/github/Apidcloud/TypeScript-Experiments/badge
[dependencyci]: https://dependencyci.com/github/Apidcloud/TypeScript-Experiments
[typescript-version-badge]: https://img.shields.io/badge/typescript-2.3.3-blue.svg
[typescript]: https://www.typescriptlang.org/
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release]: https://github.com/semantic-release/semantic-release

[webpack]: https://webpack.js.org/
[webpack-dev-server]: https://www.npmjs.com/package/webpack-dev-server
[webpack-notifier]: https://www.npmjs.com/package/webpack-notifier
[babel]: https://babeljs.io/
[babel-transform-runtime]: https://babeljs.io/docs/plugins/transform-runtime/
[babel-stage-3]: https://babeljs.io/docs/plugins/preset-stage-3/
[ts-loader]: https://www.npmjs.com/package/ts-loader
[babel-loader]: https://www.npmjs.com/package/babel-loader
[cross-env]: https://www.npmjs.com/package/cross-env
[babel-preset-es2015]: https://babeljs.io/docs/plugins/preset-es2015/
[jest]: https://facebook.github.io/jest/
[ts-jest]: https://www.npmjs.com/package/ts-jest
[@types/jest]: https://www.npmjs.com/package/@types/jest
[travis-ci]: https://travis-ci.org/Apidcloud/TypeScript-Experiments
[appveyor-ci]: https://ci.appveyor.com/project/Apidcloud/typescript-experiments
[codecov]: https://codecov.io/gh/Apidcloud/TypeScript-Experiments
[semantic-release]: https://www.npmjs.com/package/semantic-release
[commitizen]: https://www.npmjs.com/package/commitizen
[cz-conventional-changelog]: https://www.npmjs.com/package/cz-conventional-changelog
[validate-commit-msg]: https://www.npmjs.com/package/validate-commit-msg
[husky]: https://www.npmjs.com/package/husky