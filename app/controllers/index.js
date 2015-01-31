import Ember from 'ember';

export default Ember.ObjectController.extend({

  startAt: 0,
  duration:    0,
  cursor:      0,

  newComment:  "",

  actions: {
    scrollTo: function(sec) {
      this.set("startAt", sec);
    },

    videoDetailsRetrieved: function(data) {
      this.setProperties(data);
    },

    createComment: function(){
      this.get("comments").pushObject({
        name:     "Chris",
        time:     this.get("cursor"),
        comment:  this.get("newComment")
      });
      // add this in after the on="submit"
      // change on the form
      this.set("newComment", "");
    }
  }

});