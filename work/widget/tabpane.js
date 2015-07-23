goog.provide('work.widget.TabPane');

goog.require('goog.array');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.events');
goog.require('goog.events.EventType');

goog.scope(function () {

  var _ = work.widget;

  /**
   * @constructor
   */
  _.TabPane = function (tabs, pages, opt_selectedCssClass, opt_event) {
    this.tabs_ = tabs;
    this.pages_ = pages;
    this.selectedCssClass_ = opt_selectedCssClass;
    this.events_ = {
      'click': goog.events.EventType.CLICK,
      'mouseover': goog.events.EventType.MOUSEOVER
    };
    this.eventType_ = typeof opt_event != 'undefined' ? this.events_[opt_event] : this.events_['click'];

    goog.array.forEach(tabs, function (item, index) {
      goog.events.listen(item, this.eventType_,
        goog.bind(function (e) {
          e.preventDefault();
          this.select(index);
        }, this));
    }, this);
  };

  _.TabPane.prototype.selectedIndex_ = 0;

  _.TabPane.prototype.select = function (index) {
    if (this.selectedIndex_ == index) return;
    if (this.selectedCssClass_) {
      goog.dom.classlist.remove(
        this.tabs_[this.selectedIndex_], this.selectedCssClass_);
      goog.dom.classlist.add(
        this.tabs_[index], this.selectedCssClass_);
    }
    this.pages_[this.selectedIndex_].style.display = 'none';
    this.pages_[index].style.display = 'block';
    this.selectedIndex_ = index;
  };


});