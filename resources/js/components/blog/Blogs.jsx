import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchIcon from './svg/Search'
import ThumbsUp from './svg/ThumbsUp'
import CommentIcon from './svg/Comment'
import Loading from './svg/Loading'
import Moment from 'react-moment'
import 'moment-timezone'

export default class BlogsComponent extends Component {
    /**
     * TODO:
     * Implement search filter functionality
     * Set search param based on user input and filter blog entries based on keyword search
     */
    _isMounted = false
    _loading = true

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
        this._loading = false
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
                    <input type="text" name="filter-blogs" className="blog-search-input" onChange={this.updateSearchParam} placeholder="Search"/>
                </div>
                <div className="blogs">
                    {
                        this._loading ? 
                        <div className="loading">
                            <Loading />
                        </div>  :
                        this.state.blogs.map( item => (
                            <div key={item.id} className="tile padding-md">
                                <a href={ `/blog/${item.id}` }><h5 className="main-font font-md">{item.title}</h5></a>
                                <p className="main-font">{item.author}</p>
                                <a href={ `/blog/${item.id}` }>
                                    <div className="tile-splash">
                                        <figure>
                                            <img src="https://picsum.photos/317/225/?random"></img>
                                        </figure>
                                    </div>
                                </a>
                                <div className="tile-bottom">
                                    <ThumbsUp
                                        postId={item.id}
                                    />
                                    <CommentIcon
                                        postId={item.id}
                                    />
                                    <p className="main-font font-sm"><Moment date={item.created_at} /></p>
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