'use strict';
const React = require('react');
const Slice = require('./slice');

const Pie = ({colors, labels, hole, radius, data, animate, percent, stroke, strokeWidth}) => {
  var colorsLength = colors.length;
  var diameter = radius * 2;
  var sum = data.reduce((carry, current) => carry + current, 0);
  var startAngle = 0;
  var Slises = data.map((_slice, sliceIndex) => {
    var nextAngle = startAngle;
    var angle = (_slice / sum) * 360;
    var _percent = (_slice / sum) * 100;
    startAngle += angle;

    return (<Slice
      animate = {animate}
      key={ sliceIndex }
      value={ _slice }
      percent={ percent }
      percentValue={ _percent.toFixed(1) }
      startAngle={ nextAngle }
      angle={ angle }
      radius={ radius }
      hole={ radius - hole }
      trueHole={ hole }
      showLabel= { labels }
      fill={ colors[sliceIndex % colorsLength] }
      stroke={ stroke }
      strokeWidth={ strokeWidth }
    />);
  })
  return (
    <svg width={diameter} height={diameter} viewBox={'0 0 ' + diameter + ' ' + diameter} xmlns="http://www.w3.org/2000/svg" version="1.1">
      {Slises}
    </svg>
  );
};

module.exports = Pie;
