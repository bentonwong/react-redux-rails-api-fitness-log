import React from 'react';
import { Field } from 'redux-form';

export default (props) => {
  return(
    <div>
      <div className="add-margin-below-date-picker">
        <Field label="Date" name="date" component={props.dateComponent} date={props.data.date} />
      </div>
      <div>
        <Field label="Context (e.g. notes, mood, events, etc.)" name="context" component={props.component} context={props.data.context} />
      </div>
      <div>
        <Field label="Food" name="food" component={props.component} food={props.data.food} />
      </div>
      <div>
        <Field label="Workout" name="workout" component={props.component} workout={props.data.workout}/>
      </div>
      <div>
        <Field label="Weight" name="weight" component={props.component} weight={props.data.weight} />
      </div>
    </div>
  )
}
