export const FETCH_POSTS = 'fetch_posts';
export const POSTS_API_URL_ROOT = 'http://localhost:3000/api/v1/posts';

export function fetchPosts() {
  fetch(`${POSTS_API_URL_ROOT}.json`)
      .then(resp => resp.json())
      .then(posts => {
        return {
          type: FETCH_POSTS,
          payload: posts
        };
      });
}
