import React from 'react';
import moment from 'moment';

export default (props) => {
  return(
    <div>
      <h4>{moment(props.data.date).format('dddd, MMMM Do YYYY')}</h4>
      <p>Context: {props.data.context}</p>
      <p>Food: {props.data.food}</p>
      <p>Workout: {props.data.workout}</p>
      <p>Weight: {props.data.weight}</p>
    </div>
  );
}
