import React from 'react';
import { Sparklines, SparklinesLine, SparklinesNormalBand, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

export default (props) => {
  return (
    <div>
      <Sparklines data={props.data} limit={30} svgWidth={500} svgHeight={200}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
        <SparklinesNormalBand />
      </Sparklines>
      <div className="center-text">{isNaN(average(props.data)) ? 'calculating average...' : "Average: " + average(props.data) + ` ${props.units}`}</div>
    </div>
  );
}

function average(data) {
  return _.round(_.sum(data)/data.length);
}
