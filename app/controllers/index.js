import Ember from 'ember';

export default Ember.ObjectController.extend({

  currentTime: 0,
  duration:    0,

  newComment:  "",

  actions: {
    scrollTo: function(sec) {
      this.set("currentTime", sec);
    },

    videoDetailsRetrieved: function(data) {
      this.setProperties(data);
    },

    createComment: function(){
      this.get("comments").pushObject({
        name:     "Chris",
        time:     100,
        comment:  this.get("newComment")
      });
      // add this in after the on="submit"
      // change on the form
      this.set("newComment", "");
    }
  }

});