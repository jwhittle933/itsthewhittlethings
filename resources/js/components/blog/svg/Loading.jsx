import React, {Component} from 'react'


export default class Loading extends Component {


	render(){
		return (
			<svg width="90px"  height="90px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-ellipsis" >
			<circle cx="84" cy="50" r="1.29847" fill="#585872">
			<animate attributeName="r" values="9;0;0;0;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.9s" repeatCount="indefinite" begin="0s"></animate>
			<animate attributeName="cx" values="84;84;84;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.9s" repeatCount="indefinite" begin="0s"></animate></circle>
			<circle cx="79.0947" cy="50" r="9" fill="#95d5ee"><animate attributeName="r" values="0;9;9;9;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.9s" repeatCount="indefinite" begin="-0.95s"></animate>
			<animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.9s" repeatCount="indefinite" begin="-0.95s"></animate></circle>
			<circle cx="45.0947" cy="50" r="9" fill="#ffe691"><animate attributeName="r" values="0;9;9;9;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.9s" repeatCount="indefinite" begin="-0.475s"></animate>
			<animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.9s" repeatCount="indefinite" begin="-0.475s"></animate></circle>
			<circle cx="16" cy="50" r="7.70153" fill="#ffb6bb"><animate attributeName="r" values="0;9;9;9;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.9s" repeatCount="indefinite" begin="0s"></animate>
			<animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.9s" repeatCount="indefinite" begin="0s"></animate></circle>
			<circle cx="16" cy="50" r="0" fill="#585872"><animate attributeName="r" values="0;0;9;9;9" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.9s" repeatCount="indefinite" begin="0s"></animate>
			<animate attributeName="cx" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1.9s" repeatCount="indefinite" begin="0s"></animate></circle>
			</svg>
		)
	}
}