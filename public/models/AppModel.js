var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      workouts: new WoCollection()
    }
  }
});