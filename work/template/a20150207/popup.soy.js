// This file was automatically generated from popup.soy.
// Please don't edit this file by hand.

goog.provide('work.template.a20150207.popup');

goog.require('soy');


work.template.a20150207.popup.create = function(opt_data) {
  var output = '<h3 class="popup-title">' + soy.$$escapeHtml(opt_data.item.title) + '</h3><div class="popup-con"><ul>';
  var imageList6 = opt_data.item.images;
  var imageListLen6 = imageList6.length;
  for (var imageIndex6 = 0; imageIndex6 < imageListLen6; imageIndex6++) {
    var imageData6 = imageList6[imageIndex6];
    output += (imageIndex6 == opt_data.item.index) ? '<li class="popup-con-item popup-con-item-selected"><img src="' + soy.$$escapeHtml(imageData6) + '" /></li>' : '<li class="popup-con-item"><img src="' + soy.$$escapeHtml(imageData6) + '" /></li>';
  }
  output += '</ul><a href="#" class="popup-prev" onclick=";return false;"></a><a href="#" class="popup-next" onclick=";return false;"></a></div><div class="popup-foot"><a href="#" class="popup-close" onclick=";return false;">返回列表<i class="popup-close-icon"></i></a></div>';
  return output;
};
