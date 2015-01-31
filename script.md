Today we're going to be looking at creating a component with EmberJS. There's no need for a backend here, so we'll just be focusing on the front end.

Components are a way to encapsulate functionality into a single piece of code that can easily be dropped into different places of your application. A good metaphor for components is a Car Wash. Car washes take a car, clean it and then spit the same car out at the end. The car wash has a certain amount of functionality that it all easily encapsulated under one roof. That car wash does one thing -- wash cars. It can then easily be duplicated and placed on any street, anywhere. This is how I like to think of components.

So let's start by looking at what we want this component to do. I've gone ahead and created the final output so that you can see where we want to end up.

So as you can see, we've got a single page here. When we load the page, we've go our video viewer here. The video auto-plays as soon as the page is loaded. 

You can see here that we've also got some video controls. This is the video component. Everything outside of the black area here is outside of the component.

At the top of the page, you we're got a simple real-time readout of the current second being played in the video player below. Notice how it's not part of the video component but seems to be in-sync with it somehow. The great thing about components is that they aren't a black box. Using Ember's built-in bindings, we can easily setup the pathways for information to flow both into and out of our component. We'll get to this a little later one.

So as you can see, when I pause the video, our live counter here at the top stops counting. When I start the video backup again, you can see that the counter here has started back up again as well.

Now you can see as I start to shrink the screen, our video responds to the new screensizes while maintaining it's aspect ratio. This responsiveness is going to be an optional feature of our component. 

Now below you can see our comments area with the ability to create a new comment. One thing that I really like about sound cloud is that when a user makes a comment, their position in the track is also saved with their comment -- so as I look at the track, I can see comments that were made at that specific time in the track. So next to each comment we're going to want to show how far into the video the comment was made.

Also, I'd really like to be able to click the comment and have the video automatically skip to the time the comment was made so that I get the visual context for the comment.

I can also submit a comment here and get the same functionality as the other comments. Now if I click this first comment, you'll see that the video scans to the 10 second mark. Now when I click my new comment, it takes me to XXX second ins -- where I made the comment.

Finally, you'll notice in the URL bar that when I click one of these comments, a query parameter is updated with the startAt time. I want to be able to share out a URL to friends so that when they load the page, it loads the video to that specific time. We'll go over how that time is read in from the URL bar to our application and down to our component.

Alright. Let's get started.