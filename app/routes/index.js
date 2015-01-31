import Ember from 'ember';

export default Ember.Route.extend({

  model: function(){
    return {
      src:    "http://buildsociety.s3.amazonaws.com/video-component/video-component-demo.mp4",
      width:  1280,
      height: 720,

      // type these out in the screencast
      // going back and forth between finding the seconds
      // and then typing in the message
      comments: [
        {id: 1, name: "Sara",   time: 10,  comment: "Great shot of Chris & Hans at the piano."},
        {id: 2, name: "Lucie",  time: 83,  comment: "Love when Chris breaks the news to Hans that the movie isn't about a father and a son."},
        {id: 3, name: "Kyle",   time: 186, comment: "Love this organ!"}
      ]
    };
  }
});