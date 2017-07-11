import React from 'react';

export default (props) => {
  return(
    <div>
      <h4>{props.data.date}</h4>
      <p>Context: {props.data.context}</p>
      <p>Food: {props.data.food}</p>
      <p>Workout: {props.data.workout}</p>
      <p>Weight: {props.data.weight}</p>
    </div>
  )
}
