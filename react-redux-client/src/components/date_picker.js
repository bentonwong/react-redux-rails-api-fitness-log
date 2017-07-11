import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default (props) => {
  return (
    <div>
      <label>{props.data.label}</label>
      <DatePicker {...props.data.input}
      className="form-control"
      selected={props.selected}
      dateFormat="YYYY/MM/DD"
      todayButton={"Today"}
      maxDate={moment()}
      placeholderText="Click to select a date"
      />
      <div className="text-help">{props.data.meta.touched ? props.data.meta.error : ''}</div>
    </div>
  )
}
