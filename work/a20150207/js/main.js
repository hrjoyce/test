goog.provide('work.a20150207.main');

goog.require('goog.dom');
goog.require('goog.array');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('work.widget.Popup');
goog.require('work.widget.Gallery');
goog.require('work.template.a20150207.popup');

function main() {
  var imageList = goog.dom.getElementsByClass('tp');


  goog.array.forEach(imageList, function (item, index) {
    goog.events.listen(item, goog.events.EventType.CLICK, function () {
      var model = getModel(imageList, index);
      var html = work.template.a20150207.popup.create({
        item: model
      });

      var popup = new work.widget.Popup();
      popup.create(html);
      var images = goog.dom.getElementsByClass('popup-con-item', popup.popup);
      var prev = goog.dom.getElementByClass('popup-prev', popup.popup);
      var next = goog.dom.getElementByClass('popup-next', popup.popup);

      var gallery = new work.widget.Gallery(index);
      gallery.create(images);
      gallery.setBtn(prev, next);
      popup.show();
    });
  });


}

function getModel(items, index) {
  var images = goog.array.map(items, function (item) {
    return item.getAttribute('src');
  });
  return {
    title: '新东方别墅',
    images: images,
    index: index
  };
}

if (goog.DEBUG) {
  window.onload = main;
} else {
  main();
}