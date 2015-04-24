var View = require('ampersand-view');

module.exports = View.extend({
  template: JST['templates/home']({name: 'Fred'}),
  autoRender: true
});
