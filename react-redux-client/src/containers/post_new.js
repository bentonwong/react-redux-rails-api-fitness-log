import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions';
import { connect } from 'react-redux';
import moment from 'moment';
import FormField from '../components/form_field';
import FormFields from '../components/form_fields';
import ButtonLink from '../components/button_link';
import DatePickerComp from '../components/date_picker';

class NewPost extends Component {

  renderField(field) {
    //need to fix has danger to appear red
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <FormField data={field} />
      </div>
    );
  }

  renderDatePickerField(field) {
    const selected = field.input.value ? moment(field.input.value) : null;
    return (
      <div>
        <DatePickerComp data={field} selected={selected} />
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
          <FormFields component={this.renderField} dateComponent={this.renderDatePickerField} />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <ButtonLink className="btn btn-danger" to="/" buttonText="Cancel" />
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

export default reduxForm({
  validate,
  form: 'NewPostForm'
})(
  connect(null, { createPost })(NewPost)
);
