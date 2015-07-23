goog.provide('work.widget.Carousel');

goog.require('goog.dom');
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
  _.Carousel = function (container, content, options) {
    this.container_ = container;
    this.content_ = content;
    this.opt_ = options || {};
    this.controls_ = typeof this.opt_.controls != 'undefined' ? this.opt_.controls : false;
    this.currentIndex_ = typeof this.opt_.index != 'undefined' ? this.opt_.index : 0;
    this.auto_ = typeof this.opt_.auto != 'undefined' ? this.opt_.auto : true;
    this.speed_ = typeof this.opt_.speed != 'undefined' ? this.opt_.speed : 10;
    this.controlSelectedCssClass_ = typeof this.opt_.selectedCss != 'undefined' ? this.opt_.selectedCss : 'selected';
    this.prevBtn_ = typeof this.opt_.prev != 'undefined' ? this.opt_.prev : false;
    this.nextBtn_ = typeof this.opt_.next != 'undefined' ? this.opt_.next : false;
    this.maxLength_ = this.content_.children.length;

    if (this.controls_) {
      if (this.controls_.length <= 1) {
        this.controls_[0] && (this.controls_[0].style.display = 'none');
      } else {
        goog.array.forEach(this.controls_, function (item, index) {
          item.style.display = 'inline';
          goog.events.listen(item, goog.events.EventType.MOUSEOVER,
            goog.bind(function (e) {
              this.show(index);
            }, this));
          goog.events.listen(item, goog.events.EventType.MOUSEOUT,
            goog.bind(function (e) {
              this.start_();
            }, this));
        }, this);
      }
    }

    if (this.prevBtn_) {
      goog.events.listen(this.prevBtn_, goog.events.EventType.CLICK, goog.bind(function (e) {
        this.prev();
      }, this));
    }

    if (this.nextBtn_) {
      goog.events.listen(this.nextBtn_, goog.events.EventType.CLICK, goog.bind(function (e) {
        this.next();
      }, this));
    }
    this.show(this.currentIndex_);
    this.start_();
  };

  _.Carousel.prototype.next = function () {
    this.show(this.currentIndex_ + 1);
    this.start_();
  };

  _.Carousel.prototype.prev = function () {
    this.show(this.currentIndex_ - 1);
    this.start_();
  };

  _.Carousel.prototype.start_ = function () {
    if (this.auto_) {
      this.timer_ = window.setTimeout(goog.bind(this.next, this), this.speed_ * 1000);
    }
  };

  _.Carousel.prototype.stop_ = function () {
    window.clearTimeout(this.timer_);
  };

  _.Carousel.prototype.show = function (index) {
    if (!this.auto_) {
      if (index < 0 || index >= this.maxLength_) return;
    }
    index = index % this.maxLength_;
    if (this.timer_) {
      this.stop_();
    }
    if (!goog.isDef(this.width_)) {
      var containerWidth = goog.style.getSize(this.container_).width;
      var item = goog.dom.getFirstElementChild(this.content_);
      var size = goog.style.getSize(item);
      var margin = goog.style.getMarginBox(item);
      this.width_ = size.width;
      this.height_ = size.height;
      this.space_ = Math.max(margin.left, margin.right);
      this.content_.style.width = this.maxLength_ * (this.width_ + this.space_) + 'px';
      this.maxLength_ = this.maxLength_ - (Math.floor(containerWidth / (this.width_ + this.space_)) - 1);
    }
    if (this.fx_) {
      this.fx_.stop();
    }
    this.fx_ = new goog.fx.dom.SlideFrom(this.content_, [-index * (this.width_ + this.space_), 0], 630, goog.fx.easing.inAndOut);
    this.fx_.play();
    if (this.controls_ && this.controls_.length > 0) {
      goog.dom.classlist.remove(this.controls_[this.currentIndex_], this.controlSelectedCssClass_);
      goog.dom.classlist.add(this.controls_[index], this.controlSelectedCssClass_);
    }
    this.currentIndex_ = index;
  }

});