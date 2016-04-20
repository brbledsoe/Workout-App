var WorkoutView = Backbone.View.extend({
   tagName: 'li',

   template: Handlebars.compile($('#new-ex-template').html()),

   events: {
      'click #new-set-btn': 'addSet',
      'keypress .ex-input': 'addExercise',
      'keypress .set-input-weight': 'addWeight',
      'keypress .set-input-reps': 'addReps'
   },

   initialize: function () {
    //  console.log(this.model.get('workouts').toJSON());
   },

   addExercise: function (e) {
     if (e.which === 13 && $('.ex-output') !== '') {
       var name = $(e.target).val();
       this.model.get('exercises').add({'name': name});
       $(e.target).siblings('.ex-output').html(name);
       $(e.target).hide();
     }
   },

   addSet: function (e) {
     var exmodel = new ExModel()
      var view = new ExView({model: exmodel});
      $(e.target).closest('.set').prepend(view.render().el);
      $('.set-input-weight').focus();
   },

   addWeight: function (e) {
     if (e.which === 13 && $('.set-input-weight').val() !== '') {
       var weight = $(e.target).val();
       $(e.target).siblings('.set-output-weight').html(weight + ' lbs');
       $('.set-output-weight').removeClass('hidden');
       $(e.target).hide();
       $('.set-input-reps').focus();
       console.log(this.model.get('exercises').at(1));
       this.model.get('exercises').each(function (i, val) {
        //  val.get('total_weight').set(val.get('total_weight'), weight);
        console.log(val.get('total_weight'));
       });
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
