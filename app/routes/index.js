import Ember from 'ember';

export default Ember.Route.extend({

  model: function(){
    return {
      src:    "http://buildsociety.s3.amazonaws.com/video-component/video-component-demo.mp4",
      width:  1280,
      height: 720
    };
  }

});