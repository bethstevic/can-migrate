'use strict';

require('mocha');
var utils = require('../../../test/utils');
var transforms = require('../../../');

var toTest = transforms.filter(function (transform) {
  return transform.name === 'can-view-parser/require.js';
})[0];

describe('can-view-parser-require', function () {

  it('replaces require dependencies and references', function () {
    var fn = require(toTest.file);
    var inputPath = 'fixtures/' + toTest.fileName.replace('.js', '-input.js');
    var outputPath = 'fixtures/' + toTest.fileName.replace('.js', '-output.js');
    utils.diffFiles(fn, inputPath, outputPath);
  });
});