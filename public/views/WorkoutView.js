var WorkoutView = Backbone.View.extend({
   tagName: 'li',

   className: 'start',

   template: Handlebars.compile($('#new-ex-template').html()),

   events: {
      'click #new-set-btn': 'addSet',
      'click .drop-down-effect': 'toggleWorkoutView',
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
       $(e.target).siblings('.ex-output').html('<i class="fa fa-chevron-down drop-down-effect" aria-hidden="true"></i><i class="fa fa-chevron-up drop-down-effect hidden" aria-hidden="true"></i> ' + name);
       $(e.target).hide();

       // show ex-output h2
       var closest_ex_output = $(e.target).siblings('.ex-output');
       $(closest_ex_output).removeClass('hidden');
       // $('.ex-output').removeClass('hidden');

       // did the same thing as in the addSet function/
       var exmodel = new ExModel()
       var view = new ExView({model: exmodel});
       
       $(e.target).parent().siblings('.row').find('.set').children('.set-container').append( view.render().el);
       $('.set-input-weight').focus();

       var closest_set_btn = $(e.target).parent().siblings('.row').find('.set-btn');

       closest_set_btn.removeClass('hidden');

     }
   },

   addSet: function (e) {
          

     var exmodel = new ExModel()
      var view = new ExView({model: exmodel});
      $(e.target).closest('.set').children('.set-container').append(view.render().el);
      

      // commenting this out allows you to enter info on any open weight or rep input
      // $('.set-input-weight').focus();
   },

   addWeight: function (e) {
     if (e.which === 13 && $('.set-input-weight').val() !== '') {

       var weight = $(e.target).val();
       $(e.target).siblings('.set-output-weight').html(weight + ' lbs');

       // fixes all set-output-weight's turning removingClass('hidden')
       var closest_h3 = $(e.target).siblings('.set-output-weight');
       closest_h3.removeClass('hidden');

       $(e.target).hide();
       var reps = $(e.target).parent().siblings('.set-col').find('.set-input-reps');
       // $(reps).focus();
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

       // fixes all set-output-rep's turning removingClass('hidden')
       var closest_h3 = $(e.target).siblings('.set-output-reps');
       closest_h3.removeClass('hidden');
       
       $(e.target).hide();
     }
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
