import Comment from "./Comment"

const CommentContainer = ({ comments }) => {
	const mapComments = () => {
		return comments.map((commentObj) => {
			return <Comment commentObj={commentObj} key={commentObj.id} />
		})
	}
	return (
		<div>
			{comments.length} comment{comments.length > 1 ? "s" : null}
			<ul>{mapComments()}</ul>
		</div>
	)
}

export default CommentContainer
