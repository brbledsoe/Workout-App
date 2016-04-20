var ExView = Backbone.View.extend({
  className: 'set-wrap row',

   template: Handlebars.compile($('#new-set-template').html()),

   render: function () {
     console.log(this.model);
     this.$el.html(this.template(this.model.toJSON()));

     return this;
   }
});
