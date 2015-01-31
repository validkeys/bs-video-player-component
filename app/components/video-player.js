import Ember from 'ember';

export default Ember.Component.extend({

  // the name of the action to fire
  // when the video details are retrieved
  videoDetailsRetrieved: "videoDetailsRetrieved",

  // defaults
  width:        500,
  height:       320,
  currentTime:  0,
  duration:     0,

  nativeWidth:  0,
  nativeHeight: 0,

  // good opportunity for computed property lesson
  aspectRatio:  function(){
    return this.get("nativeWidth") / this.get("nativeHeight");
  }.property("nativeWidth","nativeHeight"),

  currentTimeObserver: function(){
    this.$('#main-video-player').get(0).currentTime = this.get("currentTime");
  }.observes('currentTime'),

  setupTracking: function(){
    var _this = this;
    this.$('#main-video-player').get(0).addEventListener("loadedmetadata", function(){

      // start by just setting the duration
      // started this with "this.set"
      // but now I want to set multiple properties
      // -> teach the user about setProperties
      _this.setProperties({
        duration:       this.duration,
        nativeHeight:   this.videoHeight,
        nativeWidth:    this.videoWidth
      });

      // now scan to the default time
      this.currentTime = _this.get("currentTime");

    });
  }.on('didInsertElement'),

  // notify outside elements on the length
  // of the video
  sendVideoDetails: function(){
    this.sendAction("videoDetailsRetrieved", {
      duration: this.get("duration")
    });
  }.observes("duration")

});