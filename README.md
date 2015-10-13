# export-eslint-config

![](https://img.shields.io/npm/v/export-eslint-config.svg)
![](https://img.shields.io/npm/dt/export-eslint-config.svg)
![](https://img.shields.io/npm/l/export-eslint-config.svg)

> Export any eslint-config-* project to default ESLint config file - .eslintrc

## Install

```
npm install -g export-eslint-config
```

## Usage

```
$ export-eslint-config SUFFIX
 
 SUFFIX  Suffix of eslint-config-* project.
         Search in node_modules project eslint-config-SUFFIX
         and covert to .eslintrc format and export to this file.
```

## Test

Before you should have `jasmine` installed globally.

```
npm test
```

## Code coverage

Before you should have `istanbul` installed globally.

```
npm run coverage
```

Next open in browser `./coverage/lcov-report/index.html`.

## License

[The MIT License](http://twitter.com/piecioshka)
