import React from 'react';

export default (props) => {
  return (
    <div>
      <div>
        <label>{props.label}</label>
        <input className="form-control" {...props.input} />
      </div>
      <div className="text-help">{props.meta.touched ? props.meta.error : ''}</div>
    </div>
  );
}
