import React, { Component } from 'react';
import { reduxForm, initialize } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Form from '../components/Form';

class PostForm extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.fetchPost(id, () => {
        this.handleInitialize()
      });
    }
  }

  handleInitialize() {
    const post = this.props.post;
    const initData = {
      "date": post.date,
      "context": post.context,
      "food": post.food,
      "workout": post.workout,
      "weight": post.weight
    }
    this.props.initialize(initData);
  }

  handleFormSubmit(values) {
    const { id } = this.props.match.params;
    if (id) {
      this.props.editPost(id, values, () => {
        this.props.history.push(`/posts/${id}`);
      });
    } else {
      this.props.createPost(values, () => {
        this.props.history.push('/');
      });
    }
  }

  render() {
    const { handleSubmit } = this.props;
    const { id } = this.props.match.params;
    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Form id={id} />
        </form>
      </div>
    );
  }

}

function validate(values) {
  const errors = {};
    if (!values.date) {
      errors.date = "Date required"
    }
    if (!values.context) {
      errors.context = "Context required"
    }
    if (!values.food) {
      errors.food = "Food information required"
    }
    if (!values.workout) {
      errors.workout = "Workout information required"
    }
    if (!values.weight) {
        errors.weight = "Weight required"
      } else if (isNaN(Number(values.weight))) {
        errors.weight = "Must be a number"
      } else if (Number(values.weight) < 1) {
        errors.weight = "Must be greater than 0"
      }
  return errors;
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

const form = reduxForm({
  form: 'PostForm',
  validate
});

export default connect(mapStateToProps, actions)(form(PostForm));
