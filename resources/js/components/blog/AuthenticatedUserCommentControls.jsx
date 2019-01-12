import React, {Component} from 'react'
import Trash from './svg/Trash'
import LikeComment from './svg/LikeComment'
import Axios from 'axios'

export default class AuthenticatedUserCommentControls extends Component {
    /** 
      * TODO: Convert Laravel blade syntax to React JSX
      * 
      * Handle Laravel data bindings to check for authenticated user
      *
      * Axios for delete and like features 
    */

	state = {
        auth: false
	}

    trashComment = () => {
        //Axios.delete('/comments/' + id)
    }

    likeComment = () => {
        //Axios.patch('/comments/' + id)
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
    const element = document.getElementById('authenticated-user')
    const props = Object.assign({}, element.dataset)
    ReactDOM.render(<AuthenticatedUserCommentControls {...props} />, element);
}



