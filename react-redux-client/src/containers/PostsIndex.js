import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Pagination } from 'react-bootstrap';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import queryString from 'query-string';

import Chart from '../components/Chart';
import IndexPost from '../components/IndexPost';
import ButtonLink from '../components/ButtonLink';

class PostsIndex extends Component {
  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts, page } = this.props;

    const weightData = _.map(sortedPostsArray(posts), post => post.weight);

    const perPage = 10;
    let pages = 0;
    if (posts !== undefined) {
      pages = Math.ceil(_.size(posts) / perPage);
    }
    const currentPage = page;
    const startOffset = (currentPage - 1) * perPage;
    let startCount = 0;

    return (
      <div>
        <div className="center-chart center-text">
          <h4>Trending Weight Data (from Most Recent Posts)</h4>
          <Chart data={weightData} color="green" units="lbs." />
        </div>
        <div>
          <ButtonLink to="/posts/new" buttonText="Add Post" className="btn btn-primary btn-md btn-add-margin" />
        </div>
        <div>
          <ul className='list-group'>
            {_.map(sortedPostsArray(posts).reverse(), (post, index) => {
              if (index >= startOffset && startCount < perPage) {
                startCount++;
                return(
                  <IndexPost data={post} key={post.id}/>
                );
              }
            })}
          </ul>
        </div>
        <div className="center-pagination-bar center-text">
          <Pagination bsSize="medium" maxButtons={5} first last next prev ellipsis boundaryLinks items={pages} activePage={currentPage} onSelect={this.changePage}/>
        </div>
      </div>
    );
  }

  changePage(page, location) {
    this.props.history.push(`${location.target.pathname}?page_no=${page}`)
  }
}

function sortedPostsArray(posts) {
  return _.sortBy(posts, 'date');
}

function mapStateToProps(state, ownProps) {
  var queryParam = queryString.parse(ownProps.location.search);
  return {
      posts: state.posts,
      page: Number(queryParam.page_no) || 1,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts, push }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
