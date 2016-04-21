var AppView = Backbone.View.extend({
  el: $('section'),

  events: {
    'click .day-and-type': 'toggleType',
    'keypress .wo-type-input': 'addType',
    'click .add-ex': 'addExercise'
  },

  initialize: function () {
    this.$list = this.$('.ex-list');
  },

  toggleType: function(e) {
    $('.day-and-type').toggleClass('hidden');
    $('.wo-type-input').toggleClass('hidden');
    $('.wo-type-input').focus();
  },

  addType: function(e) {
    if (e.which === 13) {
      $('.wo-wrap').toggleClass('hidden');
      $('.wo-type').html($('.wo-type-input').val());
      this.model.set('type', $('.wo-type-input').val());
      // need to change a createType func to be more useful
      this.toggleType();
    }
  },

  addExercise: function () {
    var womodel = new WoModel();
    var view = new WorkoutView({model: womodel});
    this.$list.append(view.render().el);

    // collapse all open exercises except the new exercise created on click
    // todo: invoke the collapse function on all exercise li's
    
    // todo: invoke the open function on exercise closest to this button
  },

  render: function (workouts) {

  }


});
