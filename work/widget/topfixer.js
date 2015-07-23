
goog.provide('work.widget.TopFixer');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');

goog.scope(function() {

 var _ = work.widget;

  /**
   * @constructor
   */
  _.TopFixer = function(ele) {
    this.element_ = ele;
    this.y_ = goog.dom.getPageScroll().y;
    goog.events.listen(window, 
      goog.events.EventType.SCROLL, this.onPageScroll_, false, this);

  };

  _.TopFixer.prototype.fixed_ = false;


  _.TopFixer.prototype.onPageScroll_ = function() {
    if (this.timer_) {
      window.clearTimeout(this.timer_);
    }
    this.timer_ = window.setTimeout(goog.bind(function() {
      var y = goog.dom.getPageScroll().y;
      if (this.y_ > y) {
	this.showElement_();
      } else {
	this.hideElement_();
      }
      this.y_ = y;
    }, this), 100);
  };

  _.TopFixer.prototype.showElement_ = function() {
    if (this.fixed_) return;
    this.element_.style.position = 'fixed';
    this.fixed_ = true;
  };

  _.TopFixer.prototype.hideElement_ = function() {
    if (!this.fixed_) return;
    this.element_.style.position = '';
    this.fixed_ = false;
  };


});
