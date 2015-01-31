import Ember from 'ember';

export default Ember.Route.extend({

  model: function(){
    return {
      src:    "http://buildsociety.s3.amazonaws.com/video-component/video-component-demo.mp4",
      width:  1280,
      height: 720,
      comments: [
        {id: 1, name: "Sara", time: 10, comment: "Something happens at 10 seconds"},
        {id: 2, name: "Lucie", time: 20, comment: "Something happens at 20 seconds"},
        {id: 3, name: "Kyle", time: 30, comment: "Something happens at 30 seconds"}
      ]
    };
  }

});