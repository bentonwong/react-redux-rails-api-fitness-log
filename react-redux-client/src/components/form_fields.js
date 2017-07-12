import React from 'react';
import { Field } from 'redux-form';

export default (props) => {
  const data = props.data
  const component =props.component
  return(
    <div>
      <div className="add-margin-below-date-picker">
        <Field label="Date" name="date" component={props.dateComponent} data={ data } />
      </div>
      <div>
        <Field label="Context (e.g. notes, mood, events, etc.)" name="context" component={ component } data={ data.context } />
      </div>
      <div>
        <Field label="Food" name="food" component={ component } data={ data.food } />
      </div>
      <div>
        <Field label="Workout" name="workout" component={ component } data={ data.workout } />
      </div>
      <div>
        <Field label="Weight" name="weight" component={ component } data={ data.weight } />
      </div>
    </div>
  )
}
