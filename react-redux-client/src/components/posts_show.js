import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchPost(id);
  }

  render () {
    const { post } = this.props;

    if (!post) {
      return <div>loading...</div>
    }

    return (
      <div>
        <Link className="btn btn-primary" to="/">
          Back to Posts
        </Link>
        <h4>{post.date}</h4>
        <p>Context: {post.context}</p>
        <p>Food: {post.food}</p>
        <p>Workout: {post.workout}</p>
        <p>Weight: {post.weight}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
