import React, { Component } from 'react';
import { Field, reduxForm, initialize } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions'

import moment from 'moment';
import ButtonLink from '../components/button_link';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import renderField from '../components/render_field';
import renderDateField from '../components/render_date_field';

class PostForm extends Component {
  componentDidMount() {
    if (id(this.props)) {
      this.props.fetchPost(id(this.props), () => {
        this.handleInitialize()
      });
    }
  }

  handleInitialize() {
    const initData = {
      "date": this.props.post.date,
      "context": this.props.post.context,
      "food": this.props.post.food,
      "workout": this.props.post.workout,
      "weight": this.props.post.weight
    }
    this.props.initialize(initData);
  }

  handleFormSubmit(values) {
    if (this.props.match.params.id) {
      this.props.editPost(this.props.match.params.id, values, () => {
        this.props.history.push(`/posts/${this.props.match.params.id}`);
      });
    } else {
      this.props.createPost(values, () => {
        this.props.history.push('/');
      });
    }
  }

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props)
    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div>
            <div className="add-margin-below-date-picker">
              <Field name="date" component={renderDateField} label="Date" />
            </div>
            <div>
              <Field name="context" type="text" component={renderField} label="Context (e.g. notes, mood, events, etc.)" />
            </div>
            <div>
              <Field name="food" type="text" component={renderField} label="Food" />
            </div>
            <div>
              <Field name="workout" type="text" component={renderField} label="Workout" />
            </div>
            <div>
              <Field name="weight" type="text" component={renderField} label="Weight" />
            </div>
          </div>
          <div className="btn-group btn-group-sm btn-add-margin">
            <button action="submit" className="btn btn-primary">Submit</button>
            <button className="btn btn-danger"><ButtonLink to="/" buttonText="Cancel" className="btn-text-white btn-text-center" /></button>
          </div>
        </form>
      </div>
    );
  }
}

function id(props) {
  return props.match.params.id;
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
