goog.provide('work.tingyuansan.product.main');

goog.require('goog.dom');
goog.require('work.tingyuansan.Head');

goog.scope(function () {

  var _ = work.tingyuansan.product;

  _.main = function () {
    new work.tingyuansan.Head();
  };

});

if (!goog.DEBUG) {
  work.tingyuansan.product.main();
} else {
  window.onload = work.tingyuansan.product.main;
}