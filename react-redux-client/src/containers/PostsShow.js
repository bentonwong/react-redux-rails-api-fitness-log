import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../actions';
import _ from 'lodash';

import ShowPost from '../components/ShowPost';
import ButtonLink from '../components/ButtonLink';

class PostsShow extends Component {

/*
  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id, () => {
        console.log(this.props)
      });
    }
  }
*/

  componentDidMount() {
    this.props.fetchPosts();
  }

  handleDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  handlePrevClick() {
    this.props.history.push(`/posts/${this.props.prevPostId}`)
  }

  handleNextClick() {
    console.log(this.props.nextPostId);
    this.props.history.push(`/posts/${this.props.nextPostId}`)
  }

  render () {
    const { post } = this.props;

    if (!post) {
      return <div>loading...</div>
    }

    return (
      <div>
        <ButtonLink className="btn btn-primary btn-md btn-add-margin" to="/" buttonText="Back to Posts" />
        <ShowPost data={post} />
        <div>
          <div className="row btn-add-margin btn-group">
            <button className="btn btn-info" onClick={this.handlePrevClick.bind(this)}>Prev</button>
            <button className="btn btn-info" onClick={this.handleNextClick.bind(this)}>Next</button>
          </div>
        </div>

        <div className="row btn-add-margin">
          <div className="col-xs-2">
            <ButtonLink to={`/posts/edit/${post.id}`} buttonText="Edit" className="btn btn-warning btn-block" />
          </div>
          <div className="col-xs-2">
            <button onClick={this.handleDeleteClick.bind(this)} type="submit" className="btn btn-danger btn-block">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

/*function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
} */

function mapStateToProps({ posts }, ownProps) {
  const sortedPosts = _.sortBy(posts, 'date').reverse();
  const post = sortedPosts[ownProps.match.params.id];
  const prevPostId = sortedPosts.indexOf(post) - 1;
  const nextPostId = sortedPosts.indexOf(post) + 1;
  return {
    posts,
    post,
    prevPostId,
    nextPostId
  }
}

export default connect(mapStateToProps, { fetchPosts, deletePost })(PostsShow);
