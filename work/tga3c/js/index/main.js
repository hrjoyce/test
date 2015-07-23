goog.provide('work.tga3c.index.main');

goog.require('goog.dom');
goog.require('work.widget.Gallery');

function main() {
  var galleryModule = goog.dom.getElement('gallery');
  var galleryItems = goog.dom.getElementsByClass('tag3c-gallery-item', galleryModule);
  var galleryControls = goog.dom.getElementsByClass('tga3c-gallery-control', galleryModule);
  var gallery = new work.widget.Gallery();
  gallery.create(galleryItems, galleryControls, {
    auto: true,
    speed:5,
    itemSelectedClass: 'tag3c-gallery-item-sel',
    navSelectedClass: 'tga3c-gallery-control-sel'
  });
}

if (goog.DEBUG) {
  window.onload = main;
} else {
  main();
}