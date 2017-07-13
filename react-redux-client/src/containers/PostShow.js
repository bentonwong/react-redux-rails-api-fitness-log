import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';

import ShowPost from '../components/ShowPost';
import ButtonLink from '../components/ButtonLink';

class PostShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id, () => {
      console.log(this.props)
    });
  }

  handleDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    });
  }

  render () {
    const { post } = this.props;

    if (!post) {
      return <div><img src="http://i.imgur.com/j2f0p2O.gifv" alt="loading..." /></div>
    }

    return (
      <div>
        <ButtonLink className="btn btn-primary btn-sm" to="/" buttonText="Back to Posts" />
        <ShowPost data={post} />
        <div className="btn-group btn-group-sm btn-add-margin">
          <button className="btn btn-block btn-warning"><ButtonLink to={`/posts/edit/${post.id}`} buttonText="Edit" className="btn-text-white btn-text-center" /></button>
          <button onClick={this.handleDeleteClick.bind(this)} type="submit" className="btn btn-danger btn-md btn-block">Delete</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
