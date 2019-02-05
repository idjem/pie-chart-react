'use strict';


const React    = require('react')
const ReactDom = require('react-dom')

const PieChart = require('../');

var colors     = ['#3498DB', '#E3E3E3', '#E3E3AA'];
var data       = [40, 60, 20];



class Example extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      radius : 150,
      hole   : 10,
      labels : true,
      percent : true,
      strokeWidth : 4,
      stroke : "#fff"
    };
  }

  onChangeHole(event) {
    this.setState({hole : event.target.value});
  }
  
  onChangeStrokeWidth(event) {
    this.setState({strokeWidth : event.target.value});
  }

  onChangeLabels() {
    this.setState({labels : !this.state.labels});
  }
    
  render() {
    const {radius, hole, labels, percent, strokeWidth, stroke} = this.state;
    return (
      <div>
        <PieChart
          data={data}
          radius={radius}
          hole={hole}
          colors={colors}
          labels={labels}
          percent={percent}
          strokeWidth={strokeWidth}
          stroke={stroke}
        />

        <div>
          <label>Hole </label>
          <input 
            type="range"
            min="0"
            max={radius}
            value={hole}
            className="slider"
            id="myRange"
            onChange={this.onChangeHole.bind(this)}
        />
        </div>
        <div>
          <label>hole width </label>
          <input 
          type="range"
          min="0"
          max="30"
          value={strokeWidth}
          className="slider"
          id="myRange"
          onChange={this.onChangeStrokeWidth.bind(this)}
        />
        </div>
     

        <div>
          <input type="checkbox" value={labels} onClick={this.onChangeLabels.bind(this)} />
          <label>labels</label>
        </div>

      </div>
    )
  }

}




ReactDom.render((<Example />), document.getElementById('content'));
