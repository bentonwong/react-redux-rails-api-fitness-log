import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Pagination } from 'react-bootstrap';
import { push } from 'react-router-redux';
import queryString from 'query-string';
import { bindActionCreators } from 'redux';

import Chart from '../components/chart';
import ShowIndexPost from '../components/show_index_post';
import ButtonLink from '../components/button_link';

function sortedPostsArray(posts) {
  return _.sortBy(posts, 'date')
}

class PostsIndex extends Component {
  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const weight_data = _.map(sortedPostsArray(this.props.posts), post => post.weight);

    const per_page = 10;
    let pages = 0;
    if (this.props.posts !== undefined) {
      pages = Math.ceil(_.size(this.props.posts)/ per_page);
    }
    const current_page = this.props.page;
    const start_offset = (current_page - 1) * per_page;
    let start_count = 0;

    return (
      <div>
        <div className="center-chart center-text">
          <h4>Trending Weight Data (from Most Recent Posts)</h4>
          <Chart data={weight_data} color="green" units="lbs." />
        </div>
        <div>
          <ButtonLink to="/posts/new" buttonText="Add Post" className="btn btn-primary btn-sm btn-add-margin" />
        </div>
        <div>
          <ul className='list-group'>
            {_.map(sortedPostsArray(this.props.posts).reverse(), (post, index) => {
              if (index >= start_offset && start_count < per_page) {
                start_count++;
                return(
                  <ShowIndexPost data={post} key={post.id}/>
                );
              }
            })}
          </ul>
        </div>
        <div className="center-pagination-bar center-text">
          <Pagination bsSize="medium" maxButtons={5} first last next prev ellipsis boundaryLinks items={pages} activePage={current_page} onSelect={this.changePage}/>
        </div>
      </div>
    )
  }

  changePage(page, location) {
    this.props.history.push(`${location.target.pathname}?page_no=${page}`)
  }

}

function mapStateToProps(state, ownProps) {
  var queryParam = queryString.parse(ownProps.location.search);
  return {
      posts: state.posts,
      page: Number(queryParam.page_no) || 1,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts, push }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
