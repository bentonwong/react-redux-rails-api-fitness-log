import React from 'react';

export default (props) => {
  return (
    <div>
      <label>{props.data.label}</label>
      <input
        className="form-control"
        type="text"
        {...props.data.input}
        value={props.data.data}
      />
      <div className="text-help">{props.data.meta.touched ? props.data.meta.error : ''}</div>
    </div>
  )
}
