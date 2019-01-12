import React, {Component} from 'react'
import Counter from './Counter'

export default class ThumbsUp extends Component {
    /* TODO: 
     * ThumbsUp to stateless functional component
     * that receives prop for current likes and a function
     * to update and rerender UI
     *
    */

    _isMounted = false
    _votable = true

    state = {
        currentVotes: null
    }

    upvote = () => {
        if(this._votable){
            axios
            .get(`/api/content/${this.props.postId}/edit`)
            .then(response => {  this.setState({ currentVotes: response.data[0].votes }) })
            this._votable = false
        } else {
            console.log("Already Voted")
        }
    }
    
    componentDidMount() {
        this._isMounted = true
        axios
        .get(`/api/content/${this.props.postId}`)
        .then( response => {
            if(this._isMounted){
                this.setState({
                    currentVotes: response.data[0].votes
                })
            }
        })
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    render(){
        return (
            <div className="svg-wrapper">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" className="thumbs-up" onClick={ this.upvote } >
                    <path fill="#444444" d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z">
                    </path>
                </svg>
                <Counter count={this.props.likes} />
            </div>
        )
    }
}