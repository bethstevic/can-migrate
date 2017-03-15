'use strict';

require('mocha');
var utils = require('../../../../test/utils');
var transforms = require('../../../../');

var toTest = transforms.modern.filter(function (transform) {
  return transform.name === 'can-stache/require.js';
})[0];

describe('can-stache-require', function () {

  it('replaces require dependencies and references', function () {
    var fn = require(toTest.file);
    var inputPath = 'fixtures/modern/' + toTest.fileName.replace('.js', '-input.js');
    var outputPath = 'fixtures/modern/' + toTest.fileName.replace('.js', '-output.js');
    utils.diffFiles(fn, inputPath, outputPath);
  });
});