"use strict";
/*
Main test
*/
var simplest = require("../index");
var test = simplest.init("Main Test").test;

//Test failures
test(0==1, "Always Fails");
test(simplest.status.failures.length == 1 &&
  simplest.status.failures.indexOf("Always Fails") != -1,
  "Failures are recorded");

//Test successes
test(1==1,"Always Succeeds");
test(simplest.status.successes.length == 2 &&
  simplest.status.successes.indexOf("Always Succeeds") != -1,
  "Successes are recorded");

simplest.done();
