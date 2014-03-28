
var assert = require('assert');
var Highlight = require('highlight');
var json = require('highlight-json');

var h;

describe('highlight-json', function(){
  beforeEach(function(){
    h = Highlight()
      .prefix('')
      .use(json);
  });

  it('should expose a plugin function', function(){
    assert.equal('function', typeof json);
  });

  it('should match booleans', function(){
    test('true', '<span class="boolean">true</span>');
  });

  it('should match strings', function(){
    test('"string"', '<span class="string">&quot;string&quot;</span>');
  })

  it('should match numbers', function(){
    test('1', '<span class="number">1</span>');
    test('0.1', '<span class="number">0.1</span>');
  })

  it('should match punctuation', function(){
    test(':', '<span class="punctuation">:</span>');
  })
});

/**
 * Test convenience.
 *
 * @param {String} input
 * @param {String} output
 */

function test(input, expected){
  var actual = h.string(input, 'json');
  try {
    assert.equal(actual, expected);
  } catch (e) {
    console.log('actual   : %s', actual);
    console.log('expected : %s', expected);
    e.actual = actual;
    e.expected = expected;
    e.showDiff = true;
    throw e;
  }
}