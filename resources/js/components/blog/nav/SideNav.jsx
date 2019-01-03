import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SubNav from './SubNav'

class SideNav extends Component {
    state = {
        foodSubView: false,
        parentingSubView: false,
        churchSubView: false,
        booksSubView: false,
    }

    toggleFood = () => {
        let newState = this.state.foodSubView ? false : true
        this.setState({
            foodSubView: newState,
            parentingSubView: false,
            churchSubView: false,
            booksSubView: false,
        })
    }
    toggleParenting = () => {
        let newState = this.state.parentingSubView ? false : true
        this.setState({
            foodSubView: false,
            parentingSubView: newState,
            churchSubView: false,
             booksSubView: false,
        })
    }
    toggleChurch = () => {
        let newState = this.state.churchSubView ? false : true
        this.setState({
            foodSubView: false,
            parentingSubView: false,
            churchSubView: newState,
             booksSubView: false,
        })
    }
    togglePopular = () => {
        let newState = this.state. booksSubView ? false : true
        this.setState({
            foodSubView: false,
            parentingSubView: false,
            churchSubView: false,
             booksSubView: newState,
        })
    }
    render() {
        return (
            <nav className="sideNavComponent">
                <div>
                    <a className="sidenav-lead" href="/"><h2>IWT</h2></a>
                </div>
                <div className="sidenav-links">
                    <p id="Food" className="link main-font" onClick={ this.toggleFood }>Food</p>
                    {  this.state.foodSubView ?
                        <SubNav
                            article1={"Cooking for Large Families"}
                            article2={"Making Salmon the Right Way"}
                            article3={"Un-Bland your Chicken"}
                            view={this.state.foodSubView}
                        />
                        : null
                    }
                    <p id="Parenting" className="link main-font" onClick={ this.toggleParenting }>Parenting</p>
                    {   this.state.parentingSubView ?
                        <SubNav
                            article1={"Spoil the Rod, Spare the Child"}
                            article2={"Teachable Two's"}
                            article3={"Video Games"}
                            view={this.state.parentingSubView}
                        />
                        : null
                    }
                    <p id="Church" className="link main-font" onClick={ this.toggleChurch }>Church</p>
                    {   this.state.churchSubView ?
                        <SubNav
                            article1={"Children's Church for Sinners"}
                            article2={"Preaching and Teaching"}
                            article3={"Let Them Cry"}
                            view={ this.state.churchSubView }
                        />
                        : null
                    }
                    <p id="Popular" className="link main-font" onClick={ this.togglePopular }>Books</p>
                    {   this.state. booksSubView ?
                        <SubNav
                            article1={"Tender Hearts, Hard Spanks"}
                            article2={"The Sucky Side of Seminary"}
                            article3={"He's not that Smart"}
                            view={ this.state. booksSubView }
                        />
                        : null
                    }
                    <a className="link main-font" href="/home">{this.props.text}</a>
                </div>
             </nav>
        );
    }
}

if (document.getElementById('side-nav')) {
    const element = document.getElementById('side-nav')
    const props = Object.assign({}, element.dataset)
    ReactDOM.render(<SideNav {...props}/>, element);
}
