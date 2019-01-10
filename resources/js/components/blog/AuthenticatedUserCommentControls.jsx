import React, {Component} from 'react'
import Trash from './svg/Trash'
import LikeComment from './svg/LikeComment'

export default class AuthenticatedUserCommentControls extends Component {
    /** 
      * TODO: Convert Laravel blade syntax to React JSX
      * 
      * Handle Laravel data bindings to check for authenticated user
      *
      * Axios for delete and like features 
    */

	state = {

	}


	render(){
		return (
			<div class="comment-interact">
                <form action="/comment/{{ $comment->id }}" method="POST">
                    <button type="submit" class="main-font font-sm comment-delete">
                        <Trash />
                    </button>
                </form>
                <form action="/comment/{{ $comment->id }}" method="POST">
                    <button type="submit" class="main-font font-sm comment-delete">
                        <LikeComment />
                    </button>
                </form>
            </div>
		)
	}
}


if (document.getElementById('authenticated-user')) {
    ReactDOM.render(<AuthenticatedUserCommentControls />, document.getElementById('authenticated-user'));
}