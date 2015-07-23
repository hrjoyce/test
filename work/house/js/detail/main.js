goog.provide('work.house.detail.main');

goog.require('goog.dom');
goog.require('work.widget.Gallery');

function main() {
  //图片播放
  var galleryModule = goog.dom.getElement('gallery-module');
  var galleryItem = goog.dom.getElementsByClass('gallery-item', galleryModule);
  var galleryNavItem = goog.dom.getElementsByClass('gallery-nav-item', galleryModule);
  var prevBtn = goog.dom.getElementByClass('gallery-prev', galleryModule);
  var nextBtn = goog.dom.getElementByClass('gallery-next', galleryModule);
  var gallery = new work.widget.Gallery();
  gallery.setBtn(prevBtn, nextBtn);
  gallery.create(galleryItem, galleryNavItem, {
    selectedClass: 'gallery-nav-item-selected'
  });

}

if (goog.DEBUG) {
  window.onload = main;
} else {
  main();
}