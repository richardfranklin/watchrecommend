import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectType from '../actions/action_type';

class WatchType extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

    this.typeSelected = this.typeSelected.bind(this);
  }

  typeSelected(type) {
    this.props.selectType(type);
  }

  render() {
    return (
      <div>
        <h1>Title</h1>
        <button onClick={() => this.typeSelected('movie')}>Select Movies</button>
        <button onClick={() => this.typeSelected('tv')}>Select TV Show</button>
        <br />
        <span>You have selected {this.props.watch_type}</span>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    watch_type: state.watch_type
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectType: selectType }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchType);
