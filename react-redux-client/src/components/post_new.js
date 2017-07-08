import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class NewPost extends Component {

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.touched ? field.meta.error : ''}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values)
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
          <button type="button" className="btn btn-secondary">Cancel</button>
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
})(NewPost)
