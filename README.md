# movie-draft-cli

> Get the data of a list of Box Office Mojo's movies through the command-line.

[![Build Status](https://travis-ci.org/alebelcor/movie-draft-cli.svg)](https://travis-ci.org/alebelcor/movie-draft-cli)

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
