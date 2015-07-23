
var cmd = require('./cmd');
var _ = require('./lodash');
var path = require('path');
var fs = require('fs');

function compile(namespace, success, fail) {
  var entry = getEntry(namespace);
  if (!fs.existsSync(entry)) {
    fail('找不到js入口 ' + getPath(entry));
    return;
  }
  var js = [
    'closure-templates/**.js',
    'closure-library/**.js',
    'work/**.js'
  ];
  js = _.map(js, function (item, index) {
    return getPath(item);
  });
  js = _.map(js, function (item) {
    return '--js=' + item + '';
  });
  js.push('--js=!**_test.js');
  js.push('--js=!**.min.js');

  var line = js.concat([
    '--closure_entry_point="' + namespace + '.main"',
    '--compilation_level=ADVANCED_OPTIMIZATIONS',
    '--only_closure_dependencies',
  //'--warning_level=VERBOSE',
  //'--create_source_map=' + getPath('source-map/'+namespace+'.js'),
  //'--output_wrapper=(function(){%output%})();',
    '--define=goog.DEBUG=false'
  ]);

  line.splice(0, 0, getPath('closure-compiler/compiler.jar'));
  line.splice(0, 0, 'java -jar');

  cmd.run(line.join(' '), success, fail);
}

function getPath(str) {
  return path.relative(process.cwd(),
    path.resolve(cmd.root, '../', str)).replace(/\\/g, '/')
}

function getEntry(namespace) {
  var PageName = namespace.split('.')[2];
  var reg = new RegExp('\/(?=' + PageName + ')');
  return path.resolve(cmd.root, '../', namespace.replace(/\./g, '/').replace(reg, '/js/') + '/main.js');
}

function getBuildPath(namespace) {
  var PageName = namespace.split('.')[2];
  var reg = new RegExp('\/(?=' + PageName + ')');
  var buildRoot = path.resolve(cmd.root, '../');
  return path.resolve(buildRoot, namespace.replace(/\./g, '/').replace(reg, '/js/') + '.js');
}


exports.compile = compile
exports.getBuildPath = getBuildPath;
