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
      <div className="row btn-add-margin">
        <div className="col-xs-2">
          <button action="submit" className="btn btn-primary btn-block">Submit</button>
        </div>
        <div className="col-xs-2">
          <ButtonLink to={props.id ? `/posts/${props.id}` : '/'} buttonText="Cancel" className="btn btn-danger btn-block" />
        </div>
      </div>
    </div>
  );
}
