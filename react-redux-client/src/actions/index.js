export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';
export const EDIT_POST = 'edit_post';
export const POSTS_API_URL_ROOT = 'http://localhost:3000/api/v1/posts';

export function fetchPosts() {
  return (dispatch) => {
    return fetch(`${POSTS_API_URL_ROOT}.json`)
      .then(response => response.json())
      .then(posts => dispatch({
        type: FETCH_POSTS,
        posts
      }));
  };
}

export function createPost(post, callback) {
  return (dispatch) => {
    return fetch(`${POSTS_API_URL_ROOT}`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ post })
    })
    .then(response => response.json())
    .then(post => dispatch({
      type: CREATE_POST,
      post
    }))
    .then(() => callback());
  };
}

export function editPost(id, post, callback) {
  return (dispatch) => {
    return fetch(`${POSTS_API_URL_ROOT}/${id}`, {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ post })
    })
    .then(response => response.json())
    .then(post => dispatch({
      type: EDIT_POST,
      post
    }))
    .then(() => callback());
  };
}

export function fetchPost(id, callback) {
  return (dispatch) => {
    return fetch(`${POSTS_API_URL_ROOT}/${id}.json`)
      .then(response => response.json())
      .then(post => dispatch({
        type: FETCH_POST,
        post
      }))
      .then(() => callback());
  };
}

export function deletePost(id, callback) {
  return (dispatch) => {
    return fetch(`${POSTS_API_URL_ROOT}/${id}`, {
      method: 'delete'
    })
      .then(() => callback())
      .then(() => dispatch({
        type: DELETE_POST,
        id: id
      }));
  };
}
