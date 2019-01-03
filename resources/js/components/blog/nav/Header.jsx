import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
    state = {
        mainText: "",
        subText: "",
        opText: ""
    }
    render(){
        return(
            <div class="header padding-md">
                <h1 class="text-center main-font color-white position-relative">Get Creative</h1>
                <h2 class="text-center main-font color-white mx-auto mt-5 w-75">“If the book is true, it will find an audience that is meant to read it.”</h2>
                <p class="text-center main-font color-white mx-auto">– Wally Lamb</p>
            </div>
        )
    }
}