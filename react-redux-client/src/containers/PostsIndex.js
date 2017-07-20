import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, addLike } from '../actions';
import { Pagination } from 'react-bootstrap';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import queryString from 'query-string';

import Chart from '../components/Chart';
import IndexPost from '../components/IndexPost';
import ButtonLink from '../components/ButtonLink';

class PostsIndex extends Component {
  constructor() {
    super();

    this.state = {
      posts: {},
      page: ''
    };
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  changePage(page, location) {
    this.props.history.push(`${location.target.pathname}?page_no=${page}`)
  }

  handleLike(post, event) {
    this.props.addLike(post, event.target.value);
  }

  render() {
    const { posts, page, handleLike } = this.props;
    const maxRecentDataPoints = 30;
    const weightData = _.map(sortedPostsArray(posts), post => post.weight);
    const recentWeightData = weightData.slice(Math.max(weightData.length - maxRecentDataPoints, 1));
    const perPage = 10;
    const currentPage = page;
    const startOffset = (currentPage - 1) * perPage;
    let startCount = 0;
    let pages = 0;

    if (posts !== undefined) {
      pages = Math.ceil(_.size(posts) / perPage);
    }

    return (
      <div>
        <div className="center-chart center-text">
          <h4 className="chart-title center-text">Trending Weight Data (from Most Recent Posts)</h4>
          <Chart data={recentWeightData} color="green" units="lbs." />
        </div>
        <div>
          <ButtonLink to="/posts/new" buttonText="Add Post" className="btn btn-primary btn-add-margin" />
        </div>
        <div>
          <ul className='list-group'>
            {_.map(sortedPostsArray(posts).reverse(), (post, index) => {
              if (index >= startOffset && startCount < perPage) {
                startCount++;
                return(
                  <div key={post.id} onClick={this.handleLike.bind(this, post)}>
                    <IndexPost data={post} key={post.id} likes={post.likes} />
                  </div>
                );
              }
            })}
          </ul>
        </div>
        <div className="center-pagination-bar center-text">
          <Pagination bsSize="medium" maxButtons={5} first last next prev ellipsis boundaryLinks items={pages} activePage={currentPage} onSelect={this.changePage.bind(this)}/>
        </div>
      </div>
    );
  }

}

function sortedPostsArray(posts) {
  return _.sortBy(posts, 'date');
}

function mapStateToProps(state, ownProps) {
  let queryParam = queryString.parse(ownProps.location.search);
  return {
      posts: state.posts,
      page: Number(queryParam.page_no) || 1,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts, addLike, push }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
