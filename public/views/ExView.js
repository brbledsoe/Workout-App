var ExView = Backbone.View.extend({
  className: 'set-wrap row',

   template: Handlebars.compile($('#new-set-template').html()),

   events: {
      'keypress .set-input-weight': 'addWeight',
      'keypress .set-input-reps': 'addReps'
   },

   initialize: function () {
     this.sets = {
       weight: null,
       reps: null
     };
   },

   addWeight: function (e) {
     if (e.which === 13 && $('.set-input-weight').val() !== '') {
       var weight = $(e.target).val();
       $(e.target).siblings('.set-output-weight').html(weight + ' lbs');

       // fixes all set-output-weight's turning removingClass('hidden')
       var closest_h3 = $(e.target).siblings('.set-output-weight');
       closest_h3.removeClass('hidden');

       $(e.target).hide();

      //  here is going a logic
      // var setM = new SetModel();
        this.sets.weight = weight;
        this.addSets();
     }
   },

   addReps: function (e) {
     if (e.which === 13 && $('.set-input-reps').val() !== '') {
       $(e.target).siblings('.set-output-reps').html($(e.target).val() + ' times');

       // fixes all set-output-rep's turning removingClass('hidden')
       var closest_h3 = $(e.target).siblings('.set-output-reps');
       closest_h3.removeClass('hidden');

       $(e.target).hide();

       this.sets.reps = $(e.target).val();

       this.addSets();
     }
   },

   addSets: function () {
     var counter = 0;
     $.each(this.sets, function (i, v) {
       if(v !== null) {
          ++counter;
       }
     });

     if (counter === 2) {
       this.model.get('sets').add({reps: this.sets.reps, weight: this.sets.weight});
     }

     console.log(this.sets);
     console.log(this.model.get('sets'));
     console.log(this.model.toJSON());
   },

   render: function () {
     console.log(this.model);
     this.$el.html(this.template(this.model.toJSON()));

     return this;
   }
});
