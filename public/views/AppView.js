var AppView = Backbone.View.extend({
  el: $('section'),

  events: {
    'click .day-and-type': 'createType',
    'keypress .wo-type-input': 'addType'
  },

  initialize: function () {
    
  },

  createType: function(e) {
    $('.day-and-type').toggleClass('hidden');
    $('.wo-type-input').toggleClass('hidden');
  },

  addType: function(e) {
    if (e.which === 13) {
      $('.wo-wrap').toggleClass('hidden');
      $('.wo-type').html($('.wo-type-input').val());
      // need to change a createType func to be more useful
      this.createType();
    }
  }


});