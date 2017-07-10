import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import rootReducer from './reducers';
import PostsIndex from './components/posts_index';
import PostNew from './components/post_new';
import PostsShow from './components/posts_show';


const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <header>My Fitness Log</header>
        <Switch>
          <Route path="/posts/new" component={PostNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
