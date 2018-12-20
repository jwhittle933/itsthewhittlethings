import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Landing extends Component {
    constructor(props){
        super(props)
        this.state = {
            tile1: "Purchase Prints",
            tile2: "Visit the Blog",
            img1Style: {
                width: '60vw',
                height: 'auto'
            },
            img2Style: {
                width: '40vw',
                height: 'auto'
            },
            figureStyle: {
                width: '40vw',
                height: '50vh',
                overflow: 'hidden',
                borderRadius: "10px",
            }
        }
    }

    render() {
        return (
            <div className="d-flex justify-content-center mt-5">
                <div className="mx-5">
                    <a className="nav-link text-center" href="/store"> { this.state.tile1 } </a>
                    <figure style={ this.state.figureStyle }>
                        <a  href="/store"><img style={this.state.img2Style}  src="img/img2.png" /></a>
                    </figure>
                </div>
                <div>
                    <a className="nav-link text-center" href="/blog"> { this.state.tile2 } </a>
                    <figure style={ this.state.figureStyle }>
                        <a href="/blog"><img style={this.state.img1Style}  src="img/img1.jpg" /></a>
                    </figure>
                </div>
            </div>
        );
    }
}

if (document.getElementById('landing')) {
    ReactDOM.render(<Landing />, document.getElementById('landing'));
}
