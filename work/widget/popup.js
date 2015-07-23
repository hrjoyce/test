goog.provide('work.widget.Popup');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');

goog.scope(function () {

  var _ = work.widget;

  _.Popup = function () {
    this.init_();
  };

  _.Popup.prototype.init_ = function () {
    var mask = goog.dom.getElement('popup-mask');
    var popup = goog.dom.getElement('popup');
    if (!mask) {
      mask = goog.dom.createDom('div', {
        'class': 'popup-mask',
        'id': 'popup-mask'
      });
      goog.dom.appendChild(document.body, mask);
    }
    if (!popup) {
      popup = goog.dom.createDom('div', {
        'class': 'popup',
        'id': 'popup'
      });
      goog.dom.appendChild(document.body, popup);
    }
    this.mask = mask;
    this.popup = popup;
  };

  _.Popup.prototype.create = function (conHtml, opt_closeClass) {
    var closeClass = opt_closeClass || 'popup-close';
    this.popup.innerHTML = conHtml;
    this.closeBtn_ = goog.dom.getElementByClass(closeClass, this.popup);
    goog.events.listen(this.closeBtn_, goog.events.EventType.CLICK, this.hide, false, this);
  };

  _.Popup.prototype.show = function () {
    this.mask.style.display = 'block';
    this.popup.style.display = 'block';
  };

  _.Popup.prototype.hide = function () {
    this.mask.style.display = 'none';
    this.popup.style.display = 'none';
  };

});