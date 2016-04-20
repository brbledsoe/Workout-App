var WorkoutView = Backbone.View.extend({
   tagName: 'li',

   template: Handlebars.compile($('#new-ex-template').html()),

   events: {
      'click #new-set-btn': 'addSet',
      'keypress .set-input-weight': 'addWeight',
      'keypress .set-input-reps': 'addReps'
   },

   initialize: function () {
    //  console.log(this.model.get('workouts').toJSON());
   },

   addSet: function (e) {
      var view = new ExView({model: this.model  });
      $(e.target).closest('.set').prepend(this.$el);
      $('.set-input-weight').focus();
   },
   
   addWeight: function (e) {
     if (e.which === 13 && $('.set-input-weight').val() !== '') {
       $(e.target).siblings('.set-output-weight').html($(e.target).val() + ' lbs');
       $('.set-output-weight').removeClass('hidden');
       $(e.target).hide();
       $('.set-input-reps').focus();
     }
   },

   addReps: function (e) {
     if (e.which === 13 && $('.set-input-reps').val() !== '') {
       $(e.target).siblings('.set-output-reps').html($(e.target).val() + ' times');
       $('.set-output-reps').removeClass('hidden')
       $(e.target).hide();
     }
   },

   render: function () {
      this.$el.html(this.template(this.model.toJSON()));

      return this;
   }
});
