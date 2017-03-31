import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}

	render() {
		return (
			<div className="searchBar" style={styles.searchBar}>
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
          style={styles.searchBarInput}
        />
			</div>
		);
	}


}

export default SearchBar;

const styles = {
  searchBar: {
    margin: '20px',
  },

  searchBarInput: {
    width: '15em'
  }
}
