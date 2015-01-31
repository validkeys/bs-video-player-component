import Ember from 'ember';

export default Ember.ObjectController.extend({

  queryParams: ["startAt"],

  startAt:     0,
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
      // changed this from pushObject to unshift
      // so that the comment appears at the top
      this.get("comments").unshiftObject({
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