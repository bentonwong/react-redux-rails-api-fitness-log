import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';

import ShowPost from '../components/ShowPost';
import ButtonLink from '../components/ButtonLink';

class PostsShow extends Component {

  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id, () => {
        console.log(this.props)
      });
    }
  }

  handleDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
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

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
