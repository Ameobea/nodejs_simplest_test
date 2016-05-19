'use strict';
/*
  Main test
*/

var simplest = require('../index');

simplest('Main Test', function(test) {

  // Test failures
  test(0==1, 'Always Fails');

  // Test successes
  test(1==1,'Always Succeeds');

});
