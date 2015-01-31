## Video Component
An HTML5 video player component for EmberJS
---

### Master Branch
This branch gets the basic video player up and running

### Step-2-Autoload
- This branch will deal with preloading and auto-play attributes
- Also changing over the template for the component to set the tagName to "video" and use attributeBindings

### Step-3-Timeline-Comments
This branch then loads in comments on the video that, when clicked, take the user to the timestamp ther user was commenting on (like soundcloud comments)
- get the comments to show up
- add the click handlers
- watch as now scroll to different positions
- now create a comment and add it to the model then click it to show
- now we need to communicate the videos current time out to the controller
  - then we change the currentTime attribute to startAt because it's clearer
  - then print the cursor variable out in index.hbs
  - it has nothing, so add the cursor variable to the controller and set it to 0
  - now the cursor variable will show 0 on the index.hbs
  - now we pass in the cursor variable to the component
  - now we should see the cursor live updating on the screen
  - now update the commenting form and add the time to the print out

### Step-4-QueryParams
- add the ability to pass the time in a query params -- like they do on youtube

### Step-5-Responsive
This branch then adds some CSS and computed property magic to make the video player respond to different screen sizes



### Contents
1. Intro - going to create a video player component
  - want to be able to pass it a source and have it render the video
  - we want to be able to use custom buttons and actions to send the video to a specific spot

2. Next - We want to be able to pass in a few more parameters to our video component to make it a little more useful
  - preload
  - auto play
  - controls

3. Comments - Now we want to be able to show a list of comments for this video. Each comment in our video, like soundcloud, should reference the time in the video when the comment was made. When the comment is clicked we want the video to auto-scan to that moment
  - we also want the user to be able to create a new comment and have the time of the comment automatically recorded for them so they don't have to enter it

4. Next, like youtube, we want to be able to send a link to the video to a friend. But we want them to start the video from a specific time. So we'll be looking at queryParams here

5. Finally we want this video to be optionally responsive so that as I change the width an height of my browser, the video resizes and maintains it's aspect ratio.