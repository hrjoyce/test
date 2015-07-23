goog.provide('work.tingyuansan.work.main');

goog.require('goog.dom');
goog.require('work.tingyuansan.Head');

goog.scope(function () {

  var _ = work.tingyuansan.work;

  _.main = function () {
    new work.tingyuansan.Head();
  };

});

if (!goog.DEBUG) {
  work.tingyuansan.work.main();
} else {
  window.onload = work.tingyuansan.work.main;
}