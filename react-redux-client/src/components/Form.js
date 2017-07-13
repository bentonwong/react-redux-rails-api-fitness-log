import React from 'react';
import { Field } from 'redux-form';
import ButtonLink from '../components/ButtonLink';
import FormField from '../components/FormField';
import DateField from '../components/DateField';

export default (props) => {
  return (
    <div>
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
          <ButtonLink to={props.id ? `/posts/${props.id}` : '/'} buttonText="Cancel" className="btn-link-text" />
        </button>

      </div>
    </div>
  );
}
