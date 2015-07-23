goog.provide('work.tingyuansan.about.main');

goog.require('goog.dom');
goog.require('work.tingyuansan.Head');

goog.scope(function () {

  var _ = work.tingyuansan.about;

  _.main = function () {
    new work.tingyuansan.Head();
  };

});

if (!goog.DEBUG) {
  work.tingyuansan.about.main();
} else {
  window.onload = work.tingyuansan.about.main;
}