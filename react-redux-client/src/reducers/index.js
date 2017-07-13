import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  routing: routerReducer,
  posts: PostsReducer,
  form: formReducer,
});

export default rootReducer;
