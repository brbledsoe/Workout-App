var AppView = Backbone.View.extend({
  el: $('section'),

  events: {
    'click .day-and-type': 'createType',
    'keypress .wo-type-input': 'addType'
  },

  createType: function(e) {
    $('.day-and-type').hide();
    $('.wo-type-input').toggleClass('hidden');
  },

  addType: function(e) {
    if (e.which === 13) {
      $('.wo-wrap').toggleClass('hidden');
      $('.wo-type').html($('.wo-type-input').val());
      // need to change a createType func to be more useful
      $('.day-and-type').show();
      $('.wo-type-input').toggleClass('hidden');
    }
  }


});