var AppView = Backbone.View.extend({
  el: $('section'),

  events: {
    'click .day-and-type': 'createType',
    'keypress .wo-type-input': 'addType'
  },

  initialize: function () {
     this.$list = this.$('.ex-list');
     console.log(this.$list);
     this.listenTo(this.model.get('workouts'), 'add', this.renderWorkouts);
  },

  createType: function(e) {
    $('.day-and-type').toggleClass('hidden');
    $('.wo-type-input').toggleClass('hidden');
  },

  addType: function(e) {
    if (e.which === 13) {
      $('.wo-wrap').toggleClass('hidden');
      $('.wo-type').html($('.wo-type-input').val());
      this.model.set('type', $('.wo-type-input').val());
      this.model.set('date', new Date());
      // need to change a createType func to be more useful
      this.createType();
    }
  },

  renderWorkouts: function (woModel) {
     var view = new WorkoutView({model: woModel});
     this.$list.append(view.render().el);
  }


});
