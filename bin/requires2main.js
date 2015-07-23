
var fs = require("fs");
var path = require("path");

var args = process.argv;
var file = args[2];

var content = fs.readFileSync(file, 'utf-8');


content = content.replace(/\.js/g, '').replace(/_/g, '')
    .replace(/-/g, '').replace(/\./g, '');//.replace(/\//g, '.');
content = content.replace(/<script src="/g, 'goog.require("lg.chatroom.');
content = content.replace(/><\/script>/g, ');');
content  = content.replace(/\//g, '.');

pathname = path.dirname(file);

content = 'goog.provide("' + pathname.replace(/.*lg/, 'lg').replace(/\//, '.') 
  + '.main");\n\n' + content;

var mainFile = path.dirname(file) + '/main.js'; 

fs.writeFileSync(mainFile, content);
