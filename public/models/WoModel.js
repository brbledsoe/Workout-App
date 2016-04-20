var WoModel = Backbone.Model.extend({
  defaults: function () {
    return {
      type: '',
      date: '',
      exercises: []
    }
  },

  parse: function(response) {
    response.id = response._id;
    // response.exercises = this.get('exercises') || new ExCollection();
    return response;
  }
});
