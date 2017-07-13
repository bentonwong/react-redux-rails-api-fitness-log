REQUIREMENTS

 ✔ The code should be written in ES6 as much as possible.

Arrows

  => are used throughout the client-side application as a function shorthand.

Classes

  Classes are used to create the three containers for this application using the class {name of class} extends Component {} syntax.  The PostsIndex container component uses super call and constructor.

Enhanced Object Literals

  shorthand for foo: foo assignments - see posts

          .then(posts => dispatch({
            type: FETCH_POSTS,
            posts
          }))

  defining methods and making super calls - example from PostForm.js

    function mapStateToProps({ posts }, ownProps) {
      return { post: posts[ownProps.match.params.id] };
    }

Template Strings

  Example: from PostForm.js, construct an HTTP request prefix is used to interpret the replacements and construction

    this.props.createPost(values, (newPostObj) => {
            this.props.history.push(`/posts/${newPostObj.post["id"]}`);
          });

Destructing:

  Example: object matching shorthand in PostForm.js

  	  const { id } = this.props.match.params;

Default + Rest

  -Default: Used in action/index.js as export default function(state = {}, action) {}, to set default state.
  -Rest: {...props.input} turns an array into consecutive arguments for an input tag in FormField and DateField

Modules

  -All application components and containers are modules which uses “export” or “export default” notation to make itself available to other parts of the application.
  -All application components and containers use import notation to access other libraries such as React and in many cases, other components.

Promises

Used by action creators in actions/index.js to perform certain actions after it makes and resolves API calls.

✔  Use the create-react-app generator to start your project.

The project was started using the ‘create-react-app’ command.

✔  Your app should have one HTML page to render your react-redux application

A single HTML page that renders the application is located at: react-redux-client/public/index.html

✔  There should be 2 container components.

  1-PostForm - renders the form for creating and editing posts
  2-PostShow - renders the page for showing an individual post
  3-PostsIndex - renders the page listing all the posts along with a pagination bar and a chart showing weight data over time

✔  There should be 5 stateless components

  1-ButtonLink - enables buttons to redirect to redirect the page to a specified route used by multiple containers
  2-Chart - generates a chart showing weight data over time displayed on PostsIndex
  3-DateField - generates the calendar date picker used by Form
  4-Form - organizes the fields for the form to create and edit posts used by the PostForm container
  5-FormField - generates the input to collect data used by Form
  6-IndexPost - renders an individual mini post that is displayed on the PostIndex container
  7-ShowPost - renders the data for an individual post to be displayed on the PostShow container

✔  There should be 3 routes

  1-‘/’ - renders the PostsIndex component to display list of posts
  2-‘/posts/:id’ - renders the PostShow component to display an individual post
  3-‘/posts/edit/:id’ - renders the PostForm component to display a form prepopulated with post values to be edited and save
  4-‘/posts/new’ - renders the PostForm component to display a blank form to be filled in and saved

✔  The Application must make use of react-router and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate docs; docs for v4 can be found here)

  index.js uses BrowserRouter imported from ‘react-router-dom’. The client-side fetch() and the Rails server uses RESTful routing for API calls (i.e. maps HTTP VERBS + URL to a specific action in the controller).  Here is a list of available routes:

  Prefix Verb   		URI Pattern           Controller#Action
  GET    		        /api/v1/posts		     	api/v1/posts#index
  POST   		        /api/v1/posts		     	api/v1/posts#create
  GET    		        /api/v1/posts/:id	 	  api/v1/posts#show
  PUT    			      /api/v1/posts/:id	 	  api/v1/posts#update
  DELETE 		       /api/v1/posts/:id	 	  api/v1/posts#destroy


✔  Use Redux middleware to respond to and modify state change

  Index.js uses applyMiddleware from ‘redux’ to handle the store’s dispatch function sending actions the reducers for state changes.

✔  Make use of async actions to send data to and receive data from a server

  Index.js uses thunk from 'redux-thunk' to handle async API calls in the action creators in actions/index.js.

✔  Your Rails API should handle the data persistence. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.

  The Rails API for this project is called ‘rails-api’. It is a bare bones rails API application that has creates, renders, updates, and deletes post data.  The react-redux application uses fetch() from the action creator to make calls the Rails API.

✔  Your client-side application should handle the display of data with minimal data manipulation

  The client-side application takes Post json data from the Rails API and it does minimal data manipulation to make it easier for the client-side application to work with the data and consumable, such as:

  -Locally, it converts the array of Posts objects when fetching all posts and converts it into an object containing all post objects with their respective ids as their keys
  -Sorts posts locally in descending chronological order on the PostsIndex component
  -Takes the weight data to calculate and display an average value to be displayed on the PostsIndex component

✔  Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!

  The application primarily uses Twitter Bootstrap for CSS styling. In addition, the application uses the CSS stylesheet located at react-redux-client/public/stylesheets/style.css.
