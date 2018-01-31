import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// import { bindActionCreators } from 'redux';
//import selectType from '../actions/action_type';

class SearchResults extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentSearchResults: []
    };

    this.searchResults = this.searchResults.bind(this);
  }

  searchResults() {
    const TMDB_API_KEY = "ced5bf6ea738d9b46e4f185b22f76c14";

    axios.get(`https://api.themoviedb.org/3/discover/${this.props.watch_type}?release_date.gte=${this.props.watch_yearFrom}-01-01&release_date.lte=${this.props.watch_yearTo}-12-30&sort_by=vote_average.desc&vote_count.gte=500&api_key=${TMDB_API_KEY}`)
    .then(response => {
      console.log(response.data.results);
      this.setState({
        currentSearchResults: response.data.results
      });
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.searchResults}>Search</button>

        <ul>
          {this.state.currentSearchResults.map((result) => {
              return (
                <li key={result.id}>
                  {result.title ? result.title : result.name }
                </li>
              )
            })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    watch_type:     state.watch_type,
    watch_yearFrom: state.watch_yearFrom,
    watch_yearTo:   state.watch_yearTo
  };
}

export default connect(mapStateToProps)(SearchResults);
