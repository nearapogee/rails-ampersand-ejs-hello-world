// require jquery
// require jquery_ujs
//= require_tree ./templates
//
// NOTE: requiring foo.js borks when not used with the CommonJS require.

var MainView = require('./main-view');
var domready = require('domready');

window.app = {
  init: function() {
    var self = this;
    domready(function() {
      self.view = new MainView({
        el: document.body
      });
    });
  }
}

window.app.init();
