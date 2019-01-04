import React, {Component} from 'react'

export default class Counter extends Component{
	render(){
		return (
			<p className="count main-font font-sm">
				{this.props.count}
			</p>
		)
	}
}