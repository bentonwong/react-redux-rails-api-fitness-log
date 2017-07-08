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
      </div>
    );
  }

  render() {
    return (
      <form>
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
          <button type="submit">Submit</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};
    if (!values.date) {
      errors.date = "Date required"
    }
    if (!values.context) {
      errors.date = "Context required"
    }
    if (!values.food) {
      errors.date = "Food information required"
    }
    if (!values.workout) {
      errors.date = "Workout information required"
    }
    if (!values.weight) {
      errors.date = "Weight required"
    }
  return errors;
}

export default reduxForm({
  validate,
  form: 'NewPostForm'
})(NewPost)
