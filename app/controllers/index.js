import Ember from 'ember';

export default Ember.ObjectController.extend({

  currentTime: 0,
  duration:    0,

  actions: {
    scrollTo: function(sec) {
      this.set("currentTime", sec);
    },

    videoDetailsRetrieved: function(data) {
      this.setProperties(data);
    }
  }

});