import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchIcon from './svg/Search'
import ThumbsUp from './svg/ThumbsUp'
import CommentIcon from './svg/Comment'
import Axios from 'axios'

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
        tile: {
            position: "relative",
            flexGrow: 1,
            margin: "2vw 2vh",
            width: "300px",
            height: "350px",
            overflow: "hidden",
            borderRadius: "8px",
            boxShadow: "-4px 4px 20px 1px lightgrey",
            textDecoration: "none",
            color: "inherit",
            animation: "tilebounce .5s",
        },
        tileActive: {}
    }

    componentDidMount(){
        this._isMounted = true
        Axios
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
                                        <img src="https://picsum.photos/317/225/?random"></img>
                                    </figure>
                                </div>
                                <div className="tile-bottom">
                                    <ThumbsUp
                                        postId={item.id}
                                    />
                                    <CommentIcon
                                        postId={item.id}
                                    />
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