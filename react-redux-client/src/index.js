import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import rootReducer from './reducers';
import PostsIndex from './containers/PostsIndex';
import PostForm from './containers/PostForm';
import PostShow from './containers/PostShow';

const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostForm} />
          <Route path="/posts/edit/:id" component={PostForm} />
          <Route path="/posts/:id" component={PostShow} />
          <Route path="/" component={PostsIndex} />
          <Route component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
