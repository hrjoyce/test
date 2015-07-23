goog.provide('work.tingyuansan.contact.main');

goog.require('goog.dom');
goog.require('work.tingyuansan.Head');

goog.scope(function () {

  var _ = work.tingyuansan.contact;

  _.main = function () {
    new work.tingyuansan.Head();
  };

});

if (!goog.DEBUG) {
  work.tingyuansan.contact.main();
} else {
  window.onload = work.tingyuansan.contact.main;
}