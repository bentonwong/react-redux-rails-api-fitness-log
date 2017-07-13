import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

export default (props) => {
  
  return(
    <div>
      <li className='list-group-item' key={props.data.id}>
        <Link to={`/posts/${props.data.id}`}>{props.data.date} | {props.data.context}</Link>
      </li>
    </div>
  )
}
