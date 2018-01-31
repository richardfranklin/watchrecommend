import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionYearFrom, actionYearTo } from '../actions/action_year';

class WatchYear extends Component {

  constructor(props) {
    super(props);

    this.state = {
      yearValue: null
    };

    this.yearSelected = this.yearSelected.bind(this);
  }

  yearSelected(event) {
    this.setState({
      yearValue: event.target.value
    }, () => {
      this.props['actionYear' + this.props.scale](this.state.yearValue);
    })
  }

  render() {
    return (
      <div>
        <select onChange={this.yearSelected} value={this.state.yearValue}>
          <option>Please select:</option>
          <option value="1980">1980</option>
          <option value="1990">1990</option>
          <option value="2000">2000</option>
          <option value="2015">2015</option>
        </select>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    actionYearFrom: actionYearFrom,
    actionYearTo:   actionYearTo }, dispatch)
}

export default connect(null, mapDispatchToProps)(WatchYear);
