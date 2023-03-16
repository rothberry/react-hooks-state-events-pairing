const Comment = ({ commentObj/* : { user, comment } */ }) => {
	const { user, comment } = commentObj
	return (
		<div>
			{user}: {comment}
		</div>
	)
}

export default Comment
