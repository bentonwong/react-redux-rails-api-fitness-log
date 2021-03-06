import { FETCH_POSTS, FETCH_POST, DELETE_POST, EDIT_POST, CREATE_POST, ADD_LIKE } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.posts, 'id');
    case FETCH_POST:
      return { ...state, [action.post.id]: action.post};
    case CREATE_POST:
      return { ...state, [action.post.id]: action.post};
    case EDIT_POST:
      return { ...state, [action.post.id]: action.post};
    case DELETE_POST:
      return _.omit(state, action.id)
    case ADD_LIKE:
      return { ...state, [action.post.id]: action.post };
    default:
      return state;
  }
}
