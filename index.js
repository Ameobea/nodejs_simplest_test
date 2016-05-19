'use strict';
/*
  Simplest Test Framework
  This framework serves the purpose of an extremely light-weight, uncomplicated,
  and easy to use test framework aimed at speeding up testing and keeping it to a minimum.
  For more information, see README.md
*/

function printResults(name, results) {
  console.log(name + ':');
  results.forEach(function(output) {
    console.log('  ' + output);
  });
  if(results.length === 0) {
    console.log('  None!');
  }
}

function simplest(testName, fn) {
  var successes = [];
  var failures = [];
  fn(function(cond, name) {
    if(!name) {
      name = successes.length + failures.length + 1; // ??????
    }

    if(cond) {
      successes.push(name);
    } else {
      failures.push(name);
    }
  });
  console.log('\n====TEST RESULTS====');

  printResults('Successes', successes)
  printResults('Failures', failures)
}

module.exports = simplest;
