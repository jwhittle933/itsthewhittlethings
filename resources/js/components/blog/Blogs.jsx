import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchIcon from './svg/Search'
import ThumbsUp from './svg/ThumbsUp'
import CommentIcon from './svg/Comment'
import axios from 'axios'

export default class BlogsComponent extends Component {
    /**
     * TODO:
     * Implement search filter functionality
     * Set search param based on user input and filter blog entries based on keyword search
     */
    _isMounted = false

    state = {
        searchParam: null,
        blogs: [],
        tile: {},
        tileActive: {}
    }

    componentDidMount(){
        this._isMounted = true
        axios
        .get('/api/content', {
            params: {
                table: 'blogposts',
                which: "all"
            }
        })
        .then( response => {
            if(this._isMounted){
                this.setState({
                    blogs: response.data
                })
            }
        })
    }

    componentWillUnmount(){
        this._isMounted = false
    }

    updateSearchParam = (e) => {
        let value = e.target.value
    }

    render() {
        return (
            <div className="blogsComponent">
                <div className="searchbar">
                    <SearchIcon />
                    <input type="text" name="filter-blogs" className="input" onChange={this.updateSearchParam} placeholder="Search"/>
                </div>
                <div className="blogs">
                    {
                        this.state.blogs.map( item => (
                            <div key={item.id} className="tile padding-md">
                                <h5 className="main-font">{item.title}</h5>
                                <p className="main-font">{item.author}</p>
                                <p className="main-font">{item.created_at}</p>
                                {/* <p className="main-font">{item.body.substring(0, 200)}...</p> */}
                                <div className="tile-splash">
                                    <figure>
                                        <img></img>
                                    </figure>
                                </div>
                                <div className="tile-bottom">
                                    <ThumbsUp />
                                    <CommentIcon />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

if (document.getElementById('blogs')) {
    ReactDOM.render(<BlogsComponent />, document.getElementById('blogs'));
}