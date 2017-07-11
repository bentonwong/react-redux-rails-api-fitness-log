import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import Chart from '../components/chart';
import ShowIndexPost from '../components/show_index_post';
import ButtonLink from '../components/button_link';
import ReactPaginate from 'react-paginate';

function sortedPostsArray(posts) {
  return _.sortBy(posts, 'date')
}

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    const SortedPostsArray = sortedPostsArray(this.props.posts);
    return _.map(SortedPostsArray.reverse(), post => {
      return (
        <ShowIndexPost data={post} key={post.id}/>
      );
    });
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);

    this.setState({offset: offset}, () => {
      this.fetchPost();
    });
  };

  render() {
    const weight_data = _.map(sortedPostsArray(this.props.posts), post => post.weight)
    return (
      <div>
        <div>
          <h4 className="center-text">Trending Weight Data (from Most Recent Posts)</h4>
          <Chart data={weight_data} color="green" units="lbs." />
        </div>
        <div>
          <ButtonLink to="/posts/new" buttonText="Add Post" className="btn btn-primary btn-md btn-add-margin" />
        </div>
        <div>
          <ul className='list-group'>{this.renderPosts()}</ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
