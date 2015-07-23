#!/bin/env node

var fs = require('fs');
var cmd = require('./lib/cmd');
var deps = require('./lib/deps');

deps.scan(cmd.root, function(value) {
  fs.writeFileSync(cmd.root + '/../work/workdeps.js', value);
  console.log('完成');
}, function(error) {
  console.log(error);
});



