import React from 'react';

export default (props) => {
  return (
    <label>{props.data.label}</label>
    <input
      className="form-control"
      type="text"
      {...props.data.input}
    />
    <div className="text-help">{props.data.meta.touched ? props.data.meta.error : ''}</div>
  )
}
