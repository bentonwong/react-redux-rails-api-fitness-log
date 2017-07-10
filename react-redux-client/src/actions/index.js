export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
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

export function fetchPost(id) {
  console.log("id: ", id)
  return (dispatch) => {
    return fetch(`${POSTS_API_URL_ROOT}/${id}.json`)
      .then(response => response.json())
      .then(post => dispatch({
        type: FETCH_POST,
        post
      }));
  };
}
