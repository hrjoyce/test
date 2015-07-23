goog.provide('work.widget.Gallery');

goog.require('goog.dom');
goog.require('goog.array');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.fx.dom');
goog.require('goog.fx.easing');

goog.scope(function () {

  var _ = work.widget;

  /**
   * @constructor
   */
  _.Gallery = function (opt_index) {
    this.currentIndex_ = opt_index || 0;
  };

  _.Gallery.prototype.create = function (items, navItems, options) {
    this.items_ = items;
    this.navItems_ = navItems || [];
    this.auto_ = options && typeof options.auto != 'undefined' ? options.auto : false;
    this.ITEMSELECTEDCLASS_ = options && typeof options.itemSelectedClass != 'undefined' ? options.itemSelectedClass : 'selected';
    this.NAVSELECTEDCLASS_ = options && typeof options.navSelectedClass != 'undefined' ? options.navSelectedClass : 'selected';
    this.maxLength_ = this.navItems_.length > 0 ? Math.min(this.items_.length, this.navItems_.length) : this.items_.length;
    this.action_ = options && typeof options.action != 'undefined' ? options.action : 'CLICK';
    this.speed_ = options && typeof options.speed != 'undefined' ? options.speed : 3;
    this.time_ = 300;
    this.init_();
  };

  _.Gallery.prototype.init_ = function () {
    if (this.navItems_.length > 0) {
      goog.array.forEach(this.navItems_, function (item, index) {
        goog.events.listen(item, this.action_, function () {
          this.show(index);
          this.start();
        }, false, this);
      }, this);
    }
    this.show(this.currentIndex_);
    this.start();
  };

  _.Gallery.prototype.setBtn = function (prev, next) {
    this.prev_ = prev;
    this.next_ = next;
    goog.events.listen(prev, goog.events.EventType.CLICK, this.prev, false, this);
    goog.events.listen(next, goog.events.EventType.CLICK, this.next, false, this);
  };

  _.Gallery.prototype.next = function () {
    this.show(this.currentIndex_ + 1);
    this.start();
  };

  _.Gallery.prototype.prev = function () {
    this.show(this.currentIndex_ - 1);
    this.start();
  };

  _.Gallery.prototype.start = function () {
    if (this.auto_) {
      clearTimeout(this.timer_);
      this.timer_ = window.setTimeout(goog.bind(this.next, this), this.speed_ * 1000);
    }
  };

  _.Gallery.prototype.stop = function () {
    window.clearTimeout(this.timer_);
  };

  _.Gallery.prototype.show = function (index) {
    if (this.auto_) {
      if (index < 0) index = this.maxLength_ - 1;
      if (index > this.maxLength_ - 1) index = 0;
    } else {
      if (index < 0 || index > this.maxLength_ - 1) return;
    }

    if (this.navItems_.length > 0) {
      goog.array.forEach(this.navItems_, function (item) {
        goog.dom.classlist.remove(item, this.NAVSELECTEDCLASS_);
      }, this);
      goog.dom.classlist.add(this.navItems_[index], this.NAVSELECTEDCLASS_);
    }

    if ((this.fx1_ && this.fx1_.isPlaying()) || (this.fx2_ && this.fx2_.isPlaying())) {
      this.fx1_.stop(true);
      this.fx2_.stop(true);
    }
    goog.dom.classlist.add(this.items_[index], this.ITEMSELECTEDCLASS_);
    this.fx1_ = new goog.fx.dom.FadeIn(this.items_[index], this.time_);
    this.fx1_.play();
    if (index != this.currentIndex_) {
      goog.dom.classlist.remove(this.items_[this.currentIndex_], this.ITEMSELECTEDCLASS_);
      this.fx2_ = new goog.fx.dom.FadeOut(this.items_[this.currentIndex_], this.time_);
      this.fx2_.play();
    }

    this.currentIndex_ = index;
  }

});