import React, { Component } from 'react';
import { Field, reduxForm, initialize } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';
import 'react-datepicker/dist/react-datepicker.css';

import ButtonLink from '../components/ButtonLink';
import FormField from '../components/FormField';
import DateField from '../components/DateField';

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
    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div>
            <div className="add-margin-below-date-picker">
              <Field name="date"
                     component={DateField}
                     label="Date"
              />
            </div>
            <div>
              <Field name="context"
                     type="text"
                     component={FormField}
                     label="Context (e.g. notes, mood, events, etc.)"
              />
            </div>
            <div>
              <Field name="food"
                     type="text"
                     component={FormField}
                     label="Food"
              />
            </div>
            <div>
              <Field name="workout"
                     type="text"
                     component={FormField}
                     label="Workout"
              />
            </div>
            <div>
              <Field name="weight"
                     type="text"
                     component={FormField}
                     label="Weight"
              />
            </div>
          </div>
          <div className="btn-group btn-group-sm btn-add-margin">
            <button action="submit" className="btn btn-primary">Submit</button>
            <button className="btn btn-danger">
              <ButtonLink to="/" buttonText="Cancel" className="btn-text-white btn-text-center" />
            </button>
          </div>
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
