# Simplest Test Framework for NodeJS
As programming advances and more and more tools are released to make the job of developing easier, sometimes the act of programming becomes more about handling and maintaining the programming environment than actually writing useful application code.

This testing framework has the purpose of being as light-weight and easy to use as possible.  It is aimed at avoiding the trend of making programming focused around the testing and instead serves to focus on the development itself by keeping testing to a minimum.

There are no 'suites' or 'units' for tests to be grouped under.  Instead, test files are executed individually which consist of nothing more than plain .js files containing a list of commands to be run.  If you need to run more than one test script for your project, write a shell script that calls them one after another.

After each command is run, the package's test command can be run on the results to make sure that they conform to expected values.  This test command acts just like node's `assert`, but doesn't cause a fatal error and records results for output at the end.

# Usage
1. Install the package
2. Require the package at the top of your test script with the following code:
```
var simplest = require("simplest-test");
var test = simplest.init("Main Test").test;
```
3. Run your test commands and check the results using the test function.  The `test()` function has one argument with an optional second in the format `test(condition, name)`.  If the second argument isn't given, a numerical value will be given.

Example:
```
//Makes sure that the result exists
var res = process(input);
test(typeof(res) != "undefined");
```

This will have the effect of logging a failed test if the condition is not met.  In cases of hard errors causing the test script to have a fatal error, hang, unexpectedly stop, or oterwise break, go back and fix the code that's causing it before testing again.  Tests shouldn't have the purpose of verifying code quality but instead should serve to catch unexpected glitches that don't cause exceptions.

4. Insert the line `simplest.done()` at the end of your test script which will analyze the results of the tests and display them.
