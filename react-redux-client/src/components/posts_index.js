import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from './chart';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    const revSortedPostsArray = _.sortBy(this.props.posts, 'date').reverse();
    return _.map(revSortedPostsArray, post => {
      return (
        <li className='list-group-item' key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.date} | {post.context}</Link>
        </li>
      );
    });
  }

  render() {

    const sortedPostsArray = _.sortBy(this.props.posts, 'date');
    const weight_data = _.map(sortedPostsArray, post => post.weight)

    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add Post
          </Link>
        </div>
        <div>
          <h4>Weight Data for Most Recent Posts</h4>
          <Chart data={weight_data} color="green" units="lbs." />
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
