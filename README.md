# movie-draft-cli

> Get the data of a list of Box Office Mojo's movies through the command-line.

[![npm version](https://img.shields.io/npm/v/movie-draft-cli.svg)](https://npmjs.org/package/movie-draft-cli)
[![Build Status](https://img.shields.io/travis/alebelcor/movie-draft-cli/master.svg)](https://travis-ci.org/alebelcor/movie-draft-cli)
[![Test Coverage](https://img.shields.io/coveralls/alebelcor/movie-draft-cli/master.svg)](https://coveralls.io/github/alebelcor/movie-draft-cli)

## Install

```bash
npm install --global movie-draft-cli
```

## Usage

Get the data of a list of Box Office Mojo's movies through the command-line.

Specify a file to read as an argument. It has to be a (CommonJS) `.js` file or a `.json` file.

The contents of the file should be the same you pass into the `movie-draft` [package](https://github.com/alebelcor/movie-draft).

## Examples

Given a `example1.js`:

```js
module.exports = [ "pulpfiction.htm", "returnoftheking.htm" ];
```

You would run:

```bash
movie-draft example1.js
```

Given a `example2.json`:

```json
[ "pulpfiction.htm", "returnoftheking.htm" ];
```

You would run:

```bash
movie-draft example2.json
```

## License

MIT © Alejandro Beltrán
