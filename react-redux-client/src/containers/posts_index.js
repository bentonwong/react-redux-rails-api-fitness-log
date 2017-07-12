import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import Chart from '../components/chart';
import ShowIndexPost from '../components/show_index_post';
import ButtonLink from '../components/button_link';
import { Pagination } from 'react-bootstrap';
import { push } from 'react-router-redux';

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

  //renderPosts() {
    //return _.map(sortedPostsArray(this.props.posts).reverse(), post => {
      //return (
        //<ShowIndexPost data={post} key={post.id}/>
      //);
    //});
  //}
  changePage(page) {
    this.props.dispatch(push('/?page=' + page));
  }

  render() {
    const weight_data = _.map(sortedPostsArray(this.props.posts), post => post.weight);

    const per_page = 10;
    const pages = Math.ceil(this.props.posts.length / per_page);
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
          <ButtonLink to="/posts/new" buttonText="Add Post" className="btn btn-primary btn-md btn-add-margin" />
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
        <Pagination bsSize="medium" maxButtons={10} first last next prev boundaryLinks items={pages} activePage={current_page} onSelect={this.changePage}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  debugger
  return ({ posts: state.posts,
            page: Number(state.routing) || 1,
   });
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
