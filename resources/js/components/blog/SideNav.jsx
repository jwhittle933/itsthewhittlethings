import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Landing extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div></div>
        );
    }
}

if (document.getElementById('side-nav')) {
    ReactDOM.render(<SideNav />, document.getElementById('side-nav'));
}
