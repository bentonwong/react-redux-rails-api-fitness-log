import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

export default (props) => {
  return (
    <div>
      <Sparklines data={props.data} limit={30} width={500} height={200}>
        <SparklinesLine style={{ fill: "none" }} color={props.color}/>
        <SparklinesSpots />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div className="center-text">{displayAverage(props)}</div>
    </div>
  );
}

function average(data) {
  return _.round(_.sum(data)/data.length);
}

function displayAverage(props) {
  return isNaN(average(props.data)) ? 'calculating average...' : "Average: " + average(props.data) + ` ${props.units}`
}
