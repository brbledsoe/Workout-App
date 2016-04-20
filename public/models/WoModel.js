var WoModel = Backbone.Model.extend({
  defaults: function () {
    return {
      type: '',
      date: '',
      exercises: []
    }
  },

  initialize: function () {
    this.set('exercises', new ExCollection());
  },

  parse: function(response) {
    response.id = response._id;
    // response.exercises = this.get('exercises') || new ExCollection();
    return response;
  }
});
