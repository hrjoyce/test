
var fs = require('fs');

var args = process.argv;
var file = args[2];

var content = fs.readFileSync(file, 'utf-8');

content = removeProvide(content);
content = removeProvideGoog(content);

if (file.match(/-dev/) || file.match(/\.debug/)) {
} else {
  content = "goog.provide('" + getNamespace(file) + "');\n" + content;
}

fs.writeFileSync(file, content);

console.log(file);

function getNamespace(file) {
  var s = file.replace('.js', '').replace(/_/g, '')
    .replace(/-/g, '').replace(/\./g, '').split('/');
  s[0] = 'lg';
  return s.join('.');
}

function removeProvide(content) {
  return content.replace(/goog\.provide\([^\)]*\);\n/g, '');
}

function removeProvideGoog(content) {
  return content.replace(/@provideGoog/g, '');
}

