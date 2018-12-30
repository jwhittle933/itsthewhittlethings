import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SubNav from './SubNav'

class SideNav extends Component {
    constructor(){
        super()
        this.state = {
            foodSubView: false,
            parentingSubView: false,
            churchSubView: false,
            popularSubView: false,
        }
    }

    render() {
        return (
            <nav className="sidenav">
                <div>
                    <a className="sidenav-lead" href="/"><h2>IWT</h2></a>
                </div>
                <div className="sidenav-links">
                    <p id="Food" className="link main-font" href="">Food</p>
                    {   this.state.foodSubView ?
                        <SubNav
                            view={this.state.foodSubView}
                        />
                        : null
                    }
                    <p id="Parenting" className="link main-font" href="">Parenting</p>
                    {   this.state.foodSubView ?
                        <SubNav
                            view={this.state.parentingSubView}
                        />
                        : null
                    }
                    <p id="Church" className="link main-font" href="">Church</p>
                    {   this.state.foodSubView ?
                        <SubNav
                            view={this.state.churchSubView}
                        />
                        : null
                    }
                    <p id="Popular" className="link main-font" href="">Popular</p>
                    {   this.state.foodSubView ?
                        <SubNav
                            view={this.state.popularSubView}
                        />
                        : null
                    }
                    <a className="link main-font" href="/contribute">Contribute</a>
                    {/* Link redirects to page to submit material */}
                    <a className="link main-font" href="/support" >Support</a>
                    {/* Link redirects to a donations page */}
                    <p className="link main-font">Search</p>
                    {/* Link opens opens a search bar that filters posts */}
                    <a className="link main-font" href="/dashboard">User Dashboard</a>
                    {/* Link redirects to login or to user backend */}
                </div>
             </nav>
        );
    }
}

if (document.getElementById('side-nav')) {
    ReactDOM.render(<SideNav />, document.getElementById('side-nav'));
}
