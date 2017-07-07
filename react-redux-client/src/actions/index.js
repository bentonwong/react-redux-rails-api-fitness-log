export const FETCH_POSTS = 'fetch_posts';
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
