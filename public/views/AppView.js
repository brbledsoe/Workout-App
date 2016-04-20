var AppView = Backbone.View.extend({
  el: $('section'),

  events: {
    'click .day-and-type': 'toggleType',
    'keypress .wo-type-input': 'addType',
    'click .add-ex': 'addExercise'
  },

  initialize: function () {
    this.$list = this.$('.ex-list');
    this.listenTo(this.model, 'add', this.render);
  },

  toggleType: function(e) {
    $('.day-and-type').toggleClass('hidden');
    $('.wo-type-input').toggleClass('hidden');
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

    console.log(this.model.toJSON());
  },

  render: function (woView) {
    console.log(woView);
    var view = new WorkoutView({model: woView});
    this.$list.append(view.render().el);
  }


});
