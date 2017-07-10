import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className='list-group-item' key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.date} | {post.context}</Link>
        </li>
      );
    });
  }

  render() {

    const weight_data = _.map(this.props.posts, post => post.weight)

    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add Post
          </Link>
        </div>
        <div>
          <Sparklines data={weight_data} limit={30} width={100} height={25}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </div>
        <ul className='list-group'>{this.renderPosts()}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
