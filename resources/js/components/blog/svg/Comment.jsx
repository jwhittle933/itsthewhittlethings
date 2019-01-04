import React, {Component} from 'react'
import Counter from './Counter'

export default class CommentIcon extends Component {
    _isMounted = false

    addComment = () => {
        console.log(this.props.postId)
    }

    componentDidMount() {
        this._isMounted = true
        //retrieve comments for post
    }

    componentWillUnmount() {
        this._isMounted = false
        //do stuff
    }

    render() {
        return (
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" version="1.1" width="20" height="20" className="comment" onClick={ this.addComment }>
                    <g id="surface1">
                    <path d="M 7 4 C 4.253906 4 2 6.253906 2 9 L 2 33 C 2 35.746094 4.253906 38 7 38 L 11.09375 38 C 11.230469 39.203125 11.214844 40.316406 10.90625 41.25 C 10.527344 42.398438 9.820313 43.363281 8.5 44.15625 C 8.128906 44.390625 7.957031 44.839844 8.070313 45.261719 C 8.183594 45.683594 8.5625 45.984375 9 46 C 13.242188 46 18.105469 43.785156 20.5625 38 L 43 38 C 45.746094 38 48 35.746094 48 33 L 48 9 C 48 6.253906 45.746094 4 43 4 Z M 7 6 L 43 6 C 44.65625 6 46 7.34375 46 9 L 46 33 C 46 34.65625 44.65625 36 43 36 L 20 36 C 19.582031 36 19.207031 36.261719 19.0625 36.65625 C 17.507813 40.898438 14.730469 42.917969 11.84375 43.65625 C 12.234375 43.097656 12.605469 42.507813 12.8125 41.875 C 13.332031 40.296875 13.289063 38.570313 12.96875 36.8125 C 12.878906 36.347656 12.476563 36.007813 12 36 L 7 36 C 5.34375 36 4 34.65625 4 33 L 4 9 C 4 7.34375 5.34375 6 7 6 Z "/>
                    </g>
                </svg>
                <Counter />
            </div>
        )
    }
}