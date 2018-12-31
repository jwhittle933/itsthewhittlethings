import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchIcon from './svg/Search'
import Search from './svg/Search';

export default class BlogsComponent extends Component {
    /**
     * Implement search functionality
     * Call to api for all blog entries is searchParam is null
     * Set search param based on user input and filter blog entries based on keyword search
     */

    state = {
        searchParam: null
    }

    updateSearchParam = (e) => {
        let value = e.target.value
    }

    render() {
        return (
            <div className="searchComponent">
                <div className="searchbar">
                    <SearchIcon />
                    <input type="text" name="filter-blogs" className="input" onChange={this.updateSearchParam} placeholder="Search"/>
                </div>
            </div>
        )
    }
}

if (document.getElementById('blogs')) {
    ReactDOM.render(<BlogsComponent />, document.getElementById('blogs'));
}