import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const NewPost = props => {

  render() {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date</label>
          <Field name="date" component="input" type="text" placeholder="date" />
        <div>
        <div>
          <label>Context (e.g. notes, mood, events)</label>
          <Field name="context" component="input" type="text" placeholder="context" />
        <div>
        <div>
          <label>Food</label>
          <Field name="food" component="input" type="text" placeholder="food" />
        <div>
        <div>
          <label>Workout</label>
          <Field name="workout" component="input" type="text" placeholder="workout" />
        <div>
        <div>
          <label>Weight</label>
          <Field name="weight" component="input" type="text" placeholder="weight" />
        <div>
        <div>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Cancel</button>
        </div>
      </form>
    )
  }

}

export default reduxForm({
  form: 'newPost'
})(NewPost)
