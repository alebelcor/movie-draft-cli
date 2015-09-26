#!/usr/bin/env node

'use strict';

var path = require('path');
var meow = require('meow');
var movieDraft = require('movie-draft');
var reporter = require('movie-draft-default-reporter');

var cli = meow({
  help: [
    'Usage',
    '  movie-draft <file.js|file.json>'
  ]
});

var input = cli.input[0];

function endsWith(string, suffix) {
  return string.indexOf(suffix, string.length - suffix.length) !== -1;
}

if (typeof input !== 'string') {
  throw new Error('Input file path was not specified');
}

if (!(endsWith(input, '.js') || endsWith(input, '.json'))) {
  throw new Error('Input file must be .js or .json');
}

var movieList = require(path.resolve(input));

movieDraft(movieList).then(reporter);
