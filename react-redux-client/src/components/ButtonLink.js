import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      <Link className={props.className} to={props.to}>{props.buttonText}</Link>
    </div>
  );
}
