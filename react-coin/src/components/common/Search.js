import React from 'react';
import {API_URL} from '../../config';
import {handleResponse} from '../../helpers';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      searchQuery: '',
      firstname: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const searchQuery = e.target.value;
    this.setState({ searchQuery });

    if (!searchQuery) {
      return '';
    }

    fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
      .then(handleResponse)
      .then((result) => {
        console.log(result);

        this.setState({ loading: false });
      });
    //add error catching
  }


  render() {
    return (
      <div>
        <input onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Search;
