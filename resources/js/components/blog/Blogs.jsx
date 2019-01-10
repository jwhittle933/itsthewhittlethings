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
     * Create progressive loading of blog posts or pagination
     */
    _isMounted = false
    _loading = true


    state = {
        //blogs will be Array of Objects
        blogs: [],
        /**
          * filteredBlogs holds same data as blogs on mount,
          * but will change based on search param
          * blogs will hold entire data set
        */
        filteredBlogs: [],
        filterParam: "",
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
                let data = response.data
                this.setState({
                    blogs: data,
                    filteredBlogs: data
                })
            }
        })
        this._loading = false
    }

    componentWillUnmount(){
        this._isMounted = false
    }

    componentDidUpdate(prevProps) {
        this._typing = false
    }

    /* Filter through blog posts by input parameter */
    updateSearchParam = e => {
        let value = e.target.value
        console.log(e.which)
        let searchBody = this.state.blogs
        let newAr = []
        if (e.keyCode === 13){  
            this._loading = true
            searchBody.map( item => {
                let tags = item.keywords.replace(/\\(.)/g, "")
                                        .replace(/,/g, "")
                                        .replace(/\[/g, "")
                                        .replace(/\]/g, "")
                                        .replace(/\"/g, "")
                                        .split(" ")
                tags.forEach( el => el.toUpperCase() === value.toUpperCase() ? newAr.push(item) : null)
            })
            this.setState({
                filteredBlogs: newAr.length === 0 ? this.state.blogs : newAr,
            })
            this._loading = false
        }
    }

    render() {
        return (
            <div className="blogsComponent">
                <div className="searchbar">
                    <SearchIcon />
                    <input  type="text" 
                            name="filter-blogs" 
                            className="blog-search-input" 
                            onKeyDown={this.updateSearchParam}
                            placeholder="Search"
                     />
                </div>
                <div className="blogs">
                    {
                        this._loading ? 
                        <div className="loading">
                            <Loading />
                        </div>  :
                        this.state.filteredBlogs.map( item => (
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
                                    <p className="main-font font-sm">
                                        <Moment 
                                            date={item.created_at} 
                                            format={"MM/DD/YYYY"}
                                        />
                                    </p>
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