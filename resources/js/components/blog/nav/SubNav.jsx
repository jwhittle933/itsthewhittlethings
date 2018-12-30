import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SubNav extends Component {
    constructor(props){
        super(props)
        this.state = {
            visibility: this.props.view
        }
    }
    componentDidMount(){
        //fetch top three
    }

    render() {
        return (
            <div>
                <h1>This is the SubNav Component</h1>
            </div>
        )
    }
}