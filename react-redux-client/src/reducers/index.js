import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  posts: PostsReducer,
  form: formReducer,
});

export default rootReducer;
