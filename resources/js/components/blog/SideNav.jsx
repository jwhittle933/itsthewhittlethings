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
                <div>
                    <a className="sidenav-lead" href="/blog"><h2>IWT</h2></a>
                </div>
                <div className="sidenav-links">
                    <a className="link main-font" href="">Food</a>
                    <a className="link" href="">Parenting</a>
                    <a className="link" href="">Church</a>
                    <a className="link" href="">Archive</a>
                    <a className="link" href="">User Dashboard</a>
                    <a className="link" href="">Search</a>
                </div>
             </nav>
        );
    }
}

if (document.getElementById('side-nav')) {
    ReactDOM.render(<SideNav />, document.getElementById('side-nav'));
}
