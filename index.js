"use strict";
/*
Simplest Test Framework
This framework serves the purpose of an extremely light-weight, uncomplicated,
and easy to use test framework aimed at speeding up testing and keeping it to a minimum.
For more information, see README.md
*/
var test = exports;

test.status = {};

test.init = name=>{
  test.status.name = name;
  test.status.successes = [];
  test.status.failures = [];
  return test;
};

test.test = (cond, name)=>{
  if(!name){
    var name = test.status.successes.length + test.status.failures.length + 1;
  }

  if(cond){
    test.status.successes.push(name);
  }else{
    test.status.failures.push(name);
  }
};

test.done = ()=>{
  console.log("\n====TEST RESULTS====\nSuccesses:");
  for(var i=0;i<test.status.successes.length;i++){
    console.log("  " + test.status.successes[i]);
  }

  console.log("Failures:");
  for(var i=0;i<test.status.failures.length;i++){
    console.log("  " + test.status.failures[i]);
  }
};
