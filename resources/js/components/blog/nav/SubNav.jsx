import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class SubNav extends Component {
    state = {
        visibility: this.props.view || false,
        content: this.props.content
    }

    componentDidMount(){
        //axios to fetch top three with this.state.content
    }

    render() {
        return (
            <div id="subNav" className="subNav">
                <a href="/blog/34">{this.props.article1}</a>
                <a href="/blog/29">{this.props.article2}</a>
                <a href="/blog/20">{this.props.article3}</a>
            </div>
        )
    }
}