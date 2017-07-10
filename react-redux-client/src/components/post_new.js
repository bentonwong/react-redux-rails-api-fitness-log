import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from '../actions';
import { connect } from 'react-redux';

class NewPost extends Component {

  renderField(field) {
    //need to fix has danger to appear red
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">{field.meta.touched ? field.meta.error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <Field label="Date" name="date" component={this.renderField} />
        </div>
        <div>
          <Field label="Context (e.g. notes, mood, events, etc.)" name="context" component={this.renderField} />
        </div>
        <div>
          <Field label="Food" name="food" component={this.renderField} />
        </div>
        <div>
          <Field label="Workout" name="workout" component={this.renderField} />
        </div>
        <div>
          <Field label="Weight" name="weight" component={this.renderField} />
        </div>

        <div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to='/' className="btn btn-danger">Cancel</Link>
        </div>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};
    //enter a date validation so that the date is not greater than today
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
    }
  return errors;
}

export default reduxForm({
  validate,
  form: 'NewPostForm'
})(
  connect(null, { createPost })(NewPost)
);
