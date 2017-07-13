import React from 'react';
import DatePicker from 'react-datepicker';
import Moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default (props) => {
  const selected = props.input.value ? Moment(props.input.value) : null;
  return (
    <div>
      <label>{props.label}</label>
      <DatePicker {...props.input}
                  className="form-control"
                  selected={selected}
                  dateFormat="YYYY/MM/DD"
                  todayButton={"Today"}
                  maxDate={Moment()}
                  placeholderText="Click to select a date"
      />
      <div className="text-help">
        {props.meta.touched ? props.meta.error : ''}
      </div>
    </div>
  );
}
