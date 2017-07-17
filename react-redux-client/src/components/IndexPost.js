import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';

export default (props) => {
  const data = props.data;
  return(
    <div>
      <li className='list-group-item' key={data.id}>
        <Link to={`/posts/${data.id}`}>
          {Moment(data.date).format('MMM DD, YYYY')} ∙ {data.context}
        </Link>
      </li>
    </div>
  );
}