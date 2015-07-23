goog.provide('work.tingyuansan.message.main');

goog.require('goog.dom');
goog.require('work.tingyuansan.Head');

goog.scope(function () {

  var _ = work.tingyuansan.message;

  _.main = function () {
    new work.tingyuansan.Head();
  };

});

if (!goog.DEBUG) {
  work.tingyuansan.message.main();
} else {
  window.onload = work.tingyuansan.message.main;
}