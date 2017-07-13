import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


export default (props) => {
  return(
    <div>
      <li className='list-group-item' key={props.data.id}>
        <Link to={`/posts/${props.data.id}`}>{moment(props.data.date).format('MMM DD, YYYY')} | {props.data.context}</Link>
      </li>
    </div>
  );
}
