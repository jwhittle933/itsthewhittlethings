import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SideNav extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render() {
        return (
            <nav className="sidenav">
                <a href="/blog"><h2>IWT Blog</h2></a>
                <a className="nav-link" href="">Food</a>
                <a className="nav-link" href="">Parenting</a>
                <a className="nav-link" href="">Church</a>
             </nav>
        );
    }
}

if (document.getElementById('side-nav')) {
    ReactDOM.render(<SideNav />, document.getElementById('side-nav'));
}
