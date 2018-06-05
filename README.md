# pdfjs-core
[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Coverage Status][coveralls-image]][coveralls-url]

Packaging element of the [pdfjs](https://github.com/mozilla/pdf.js/) core library for the browser

## Useage
```Shell
npm i pdfjs-core --save
```

Provides two bunble formats:
- [index.amd.js](index.amd.js): Asynchronous Module Definition (AMD)
- [index.iife.js](index.iife.js): where pdfjsCore exposed as a global variable

Check [test/index.js](test/index.js) for usage examples

[travis-url]: https://travis-ci.org/jerp/pdfjs-core
[travis-image]: https://travis-ci.org/jerp/pdfjs-core.svg?branch=master
[npm-image]: https://img.shields.io/npm/v/pdfjs-core.svg
[npm-url]: https://www.npmjs.com/package/pdfjs-core
[coveralls-url]: https://coveralls.io/github/jerp/pdfjs-core?branch=master
[coveralls-image]: https://coveralls.io/repos/github/jerp/pdfjs-core/badge.svg?branch=master