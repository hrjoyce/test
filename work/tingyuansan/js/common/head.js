goog.provide('work.tingyuansan.Head');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');

goog.scope(function () {

  var _ = work.tingyuansan;

  /**
   * @constructor
   */
  _.Head = function () {
    this.initSearch_();
  };

  _.Head.prototype.initSearch_ = function () {
    this.search_ = goog.dom.getElement('nav-search');
    if (this.search_) {
      this.searchBtn_ = goog.dom.getElementByClass('nav-search-btn', this.search_);
      this.searchText_ = goog.dom.getElementByClass('nav-search-btn-text', this.search_);
      this.searchList_ = goog.dom.getElementByClass('nav-search-btn-list', this.search_);
      this.searchHidden_ = goog.dom.getElementByClass('nav-search-btn-hidden', this.search_);

      goog.events.listen(this.searchBtn_, goog.events.EventType.CLICK, function () {
        this.searchList_.style.display = 'block';
      }, null, this);
      goog.events.listen(this.searchList_, goog.events.EventType.CLICK, function (e) {
        e.stopPropagation();
        var item = e.target;
        var text = item.innerHTML;
        var value = item.getAttribute('data-type');
        this.searchText_.innerHTML = text;
        this.searchHidden_.value = value;
        this.searchList_.style.display = 'none';
      }, null, this);
    }
  };

});