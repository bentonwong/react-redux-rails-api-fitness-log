export const FETCH_POSTS = 'fetch_posts';
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

export function createPost(post) {
  return (dispatch) => {
    return fetch(`${POSTS_API_URL_ROOT}`, {
      method: 'POST'
      body: post
      })
    })
      .then(response => response.json())
      .then(post => dispatch({
        type: CREATE_POST,
        post
      }));
  };
}
