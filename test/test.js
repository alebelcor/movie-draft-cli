'use strict';

var path = require('path');
var test = require('ava');
var execFile = require('child_process').execFile;

var cli = path.join('..', 'cli.js');

test('it should error if no file was specified', function (t) {
  t.plan(2);

  execFile(cli, [], { cwd: __dirname }, function (err, stdout, stderr) {
    t.true(stderr.indexOf('Input file path was not specified') !== -1);
    t.ok(err);
  });
});

test('it should error if the file is not .js or .json', function (t) {
  t.plan(12);

  execFile(cli, ['foo.gif'], { cwd: __dirname }, function (err, stdout, stderr) {
    t.true(stderr.indexOf('Input file must be .js or .json') !== -1);
    t.ok(err);
  });

  execFile(cli, ['foo.jpg'], { cwd: __dirname }, function (err, stdout, stderr) {
    t.true(stderr.indexOf('Input file must be .js or .json') !== -1);
    t.ok(err);
  });

  execFile(cli, ['foo.sh'], { cwd: __dirname }, function (err, stdout, stderr) {
    t.true(stderr.indexOf('Input file must be .js or .json') !== -1);
    t.ok(err);
  });

  execFile(cli, ['foo.txt'], { cwd: __dirname }, function (err, stdout, stderr) {
    t.true(stderr.indexOf('Input file must be .js or .json') !== -1);
    t.ok(err);
  });

  execFile(cli, ['fixture.js'], { cwd: __dirname }, function (err, stdout, stderr) {
    t.true(stderr.indexOf('Input file must be .js or .json') === -1);
    t.notOk(err);
  });

  execFile(cli, ['fixture.json'], { cwd: __dirname }, function (err, stdout, stderr) {
    t.true(stderr.indexOf('Input file must be .js or .json') === -1);
    t.notOk(err);
  });
});
