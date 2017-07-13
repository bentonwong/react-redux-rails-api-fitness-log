import React from 'react';
import Moment from 'moment';

export default (props) => {
  const data = props.data;
  return (
    <div>
      <h4>{Moment(data.date).format('dddd, MMMM Do YYYY')}</h4>
      <p>Context: {data.context}</p>
      <p>Food: {data.food}</p>
      <p>Workout: {data.workout}</p>
      <p>Weight: {data.weight}</p>
    </div>
  );
}
