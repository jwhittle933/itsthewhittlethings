import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import SubNav from './SubNav'
import Login from '../svg/Login'
import User from '../svg/User'

class SideNav extends Component {

    /** 
      * TODO:
      * Move each SideBar item into an HOC. create single toggle control method for each based on
      * unique identifier
      * 
      * Each SubNav shows recent entries into that category
    */

    state = {
        foodSubView: false,
        parentingSubView: false,
        churchSubView: false,
        booksSubView: false,
        loggedIn: false,
        showHelp: false
    }

    toggleFood = () => {
        let newState = this.state.foodSubView ? false : true
        this.setState({
            foodSubView: newState,
        })
    }
    toggleParenting = () => {
        let newState = this.state.parentingSubView ? false : true
        this.setState({
            parentingSubView: newState,
        })
    }
    toggleChurch = () => {
        let newState = this.state.churchSubView ? false : true
        this.setState({
            churchSubView: newState,
        })
    }
    togglePopular = () => {
        let newState = this.state. booksSubView ? false : true
        this.setState({
             booksSubView: newState,
        })
    }

    showHelp = () => {
        this.state.showHelp === true ?
        this.setState({ showHelp: false }) :
        this.setState({ showHelp: true })
    }

    render() {
        return (
            <nav className="sideNavComponent">
                <div className="sidenav-lead">
                    <a className="font-xl" href="/">IWT</a>
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
                    <a href="/store" className="link main-font">Store</a>

                </div>
                <div className="user-direct" onMouseEnter={this.showHelp} onMouseLeave={this.showHelp}>
                {
                    this.props.user ?
                    <User 
                        user={this.props.user}
                     /> :
                    <Login />
                }

                {   this.props.user && this.state.showHelp === true ?
                    <p className="main-font font-sm user-popover">
                        { this.props.user }
                    </p> : null
                }
                {
                    !this.props.user && this.state.showHelp === true ?
                        <p className="main-font font-sm user-popover">
                            Login
                        </p> : null
                }

                </div>
            </nav>
        )
    }
}

if (document.getElementById('side-nav')) {
    const element = document.getElementById('side-nav')
    const props = Object.assign({}, element.dataset)
    ReactDOM.render(<SideNav {...props}/>, element);
}
