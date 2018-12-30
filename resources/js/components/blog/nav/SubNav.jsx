import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

export default class SubNav extends Component {
    state = {
        visibility: this.props.view || false,
        content: this.props.content
    }

    componentDidMount(){
        //axios to fetch top three
    }

    render() {
        return (
            <div>
                <h1>This is the {this.state.content} SubNav Component</h1>
            </div>
        )
    }
}