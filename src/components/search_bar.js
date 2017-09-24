import React, { Component } from 'react';
import './app.css';
class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: ''};

  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input onChange={ (event) => this.onInputChange(event.target.value) }
                value={this.state.term}/>

      </div>
    )
  }
}

export default SearchBar;
