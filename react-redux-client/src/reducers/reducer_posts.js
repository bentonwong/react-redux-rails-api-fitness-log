import {FETCH_POSTS, FETCH_POST} from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.posts, 'id');
    case FETCH_POST:
      debugger
      return { ...state, [action.post.id]: action.post}
    default:
      return state;
  }
}
