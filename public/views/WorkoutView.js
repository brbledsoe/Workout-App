var WorkoutView = Backbone.View.extend({
   tagName: 'li',

   template: Handlebars.compile($('#new-ex-template').html()),

   events.: {
      'click #new-set': 'addSet'
   },

   addSet: function (e) {
      console.log(this.model.get('exercises'));
   },

   render: function () {
      this.$el.html(this.template(this.model.toJSON()));

      return this;
   }
});
