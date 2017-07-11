import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';
import ShowPost from '../components/show_post'

class PostsShow extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchPost(id);
  }

  handleDeleteClick() {
    const id = this.props.match.params.id;
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    });
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
        <ShowPost data={post} />
        <button onClick={this.handleDeleteClick.bind(this)} type="submit" className="btn btn-primary pull-xs-right">Delete</button>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
