var WorkoutView = Backbone.View.extend({
   tagName: 'li',

   template: Handlebars.compile($('#new-ex-template').html()),

   events: {
      'click #new-set-btn': 'addSet',
      'click .drop-down-effect': 'toggleWorkoutView',
      'keypress .ex-input': 'addExercise'
   },

   initialize: function () {
     console.log(this.model.get('exercises').toJSON());

   },

   addExercise: function (e) {
     if (e.which === 13 && $('.ex-input').val() !== '') {
       var name = $(e.target).val();
       this.model.get('exercises').add({name: name, sets: []});
       console.log(this.model.get('exercises').toJSON());
       $(e.target).siblings('.ex-output').append(name);
       $(e.target).hide();

       // show ex-output h2
       var closest_ex_output = $(e.target).siblings('.ex-output');
       $(closest_ex_output).removeClass('hidden');
       // $('.ex-output').removeClass('hidden');

       // did the same thing as in the addSet function/
       var exmodel = new ExModel()
       var view = new ExView({model: exmodel});

      // gonna change to check
       $(e.target).find('.set').children('.set-container').append(view.render().el);
       $('.set-input-weight').focus();

       var closest_set_btn = $(e.target).parent().siblings('.row').find('.set-btn');

       closest_set_btn.removeClass('hidden');

     }
   },

   addSet: function (e) {
     var exmodel = new ExModel()
     var view = new ExView({model: exmodel});
     $(e.target).closest('.set').children('.set-container').append(view.render().el);
   },

   toggleWorkoutView: function (e) {

      $(e.target).toggleClass('drop-down-color');
      $(e.target).toggleClass("fa-chevron-down fa-chevron-up");
      $(e.target).closest('li').toggleClass('view');
      $(e.target).closest('li').toggleClass('light-grey');

   },

   render: function () {
      this.$el.html(this.template(this.model.toJSON()));

      return this;
   }
});
