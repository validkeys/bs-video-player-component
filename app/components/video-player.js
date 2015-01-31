import Ember from 'ember';

export default Ember.Component.extend({

  // the name of the action to fire
  // when the video details are retrieved
  videoDetailsRetrieved:  "videoDetailsRetrieved",
  tagName:                "video",
  attributeBindings:      ["width","height","controls","preload","autoplay"],
  classNames:             ["video-player"],

  // mention the difference between classNames and classNameBindings
  classNameBindings:      ["responsive:responsive"],

  // So now you can see as we toggle this between true/false
  // the attribute is added/removed from the dom
  controls:     true,

  // adding in the preload
  // add this then refresh the page... Hmm.. it's not showing up
  // because we didn't add it to the attributeBindings array above..
  // then add it
  preload:      "auto", //auto, metadata, none

  // whether or not to autoplay the video
  autoplay:     true,

  // defaults
  width:        500,
  height:       320,
  startAt:      0,
  duration:     0,
  responsive:   true,

  // this will keep track of the current time in the video
  // like a cursor
  cursor:       0,

  // the actual width / height of the video
  nativeWidth:  0,
  nativeHeight: 0,

  // good opportunity for computed property lesson
  aspectRatio:  function(){
    return this.get("nativeWidth") / this.get("nativeHeight");
  }.property("nativeWidth","nativeHeight"),

  currentTimeObserver: function(){
    // changing here as well
    this.get('element').currentTime = this.get("startAt");
  }.observes('startAt'),

  setupTracking: function(){
    var _this = this;

    // we're now going to change this to get the element
    // instead of this.$('#main-video-player').
    this.get('element').addEventListener("loadedmetadata", function(){

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
      this.currentTime = _this.get("startAt");

      // now set the sizes
      if (_this.get("responsive")) {
        _this.makeResponsive();
      }

    });
  }.on('didInsertElement'),

  // notify outside elements on the length
  // of the video
  sendVideoDetails: function(){
    this.sendAction("videoDetailsRetrieved", {
      duration: this.get("duration")
    });
  }.observes("duration"),

  // first set this to .on('init')
  // the browser will then respond with undefined is not a function
  // this is because the video element isnt in the DOM yet
  // so then change it to didInsertElement
  trackingObserver: function(){
    var _this = this;
    this.get("element").addEventListener("timeupdate", function(){
      _this.set("cursor", this.currentTime);
    });
  }.on('didInsertElement'),

  makeResponsive: function(){
    Ember.run.once(this, function(){
      this.$().parent().css("padding-bottom", ((this.get("nativeHeight") / this.get("nativeWidth")) * 100) + "%");
    });
  }

});