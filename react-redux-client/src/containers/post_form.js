import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost, fetchPost } from '../actions';
import { connect } from 'react-redux';
import moment from 'moment';
import FormField from '../components/form_field';
import FormFields from '../components/form_fields';
import ButtonLink from '../components/button_link';
import DatePickerComp from '../components/date_picker';

function id(props) {
  return props.match.params.id;
}

class PostForm extends Component {
  componentDidMount() {
    this.props.fetchPost(id(this.props));
  }

  renderField(field) {
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
    const { handleSubmit, post } = this.props;

    if (!post) {
      return <div>loading...</div>
    }
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div>
            <FormFields component={this.renderField} dateComponent={this.renderDatePickerField} data={post}/>
          </div>
          <div className="btn-group btn-group-sm btn-add-margin">
            <button type="submit" className="btn btn-primary">Submit</button>
            <button className="btn btn-danger"><ButtonLink to="/" buttonText="Cancel" className="btn-text-white btn-text-center" /></button>
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

export default reduxForm({
  validate,
  form: 'PostForm'
})(
  connect(mapStateToProps, { createPost, fetchPost })(PostForm)
);
