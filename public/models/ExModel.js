var ExModel = Backbone.Model.extend({
  defaults: {
    name: '',
    sets: []
  },

  initialize: function () {
    this.set('sets', new SetCollection())
  }
});
