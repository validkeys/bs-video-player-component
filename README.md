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