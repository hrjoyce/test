goog.provide('work.tingyuansan.index.main');

goog.require('goog.dom');
goog.require('work.tingyuansan.Head');
goog.require('work.widget.Gallery');

goog.scope(function () {

  var _ = work.tingyuansan.index;

  _.main = function () {
    new work.tingyuansan.Head();

    //图片播放
    var galleryModule = goog.dom.getElement('gallery-module');
    var galleryItem = goog.dom.getElementsByClass('gallery-con-item', galleryModule);
    var galleryNavItem = goog.dom.getElementsByClass('gallery-controll', galleryModule);
    var gallery = new work.widget.Gallery();
    gallery.create(galleryItem, galleryNavItem, {
      auto: true,
      action: 'mouseover',
      itemSelectedClass: 'gallery-con-item-sel',
      navSelectedClass: 'gallery-controll-sel'
    });

  };

});

if (!goog.DEBUG) {
  work.tingyuansan.index.main();
} else {
  window.onload = work.tingyuansan.index.main;
}