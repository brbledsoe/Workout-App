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
    console.log();
    var view = new WorkoutView({model: this.model});
    this.$list.prepend(view.render().el);
  },

  render: function () {

  }


});
