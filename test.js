'use strict';

var path = require('path');
var test = require('ava');
var spawn = require('child_process').spawn;

var cli = path.resolve('cli.js');

test('it should error if no file was specified', function (t) {
  t.throws(function () { return spawn(cli); });
  t.end();
});

test('it should error if the file is not .js or .json', function (t) {
  t.throws(function () { return spawn(cli, ['test.jpg']); });
  t.throws(function () { return spawn(cli, ['test.gif']); });
  t.throws(function () { return spawn(cli, ['test.txt']); });
  t.throws(function () { return spawn(cli, ['test.sh']); });
  t.throws(function () { return spawn(cli, ['test.java']); });
  // t.doesNotThrow(function () { return spawn(cli, ['fixture.js'], { stdio: [process.stdin, null, null] }); });
  t.end();
});
