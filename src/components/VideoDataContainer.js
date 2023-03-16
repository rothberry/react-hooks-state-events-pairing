const VideoDataContainer = ({
	title,
	views,
	createdAt,
	upvotes,
	downvotes,
	setUpvotes,
	setDownvotes,
	setShowComments,
}) => {
	const increaseStateByOne = (prevState) => prevState + 1

	const toggleState = (prev) => !prev

	const upVote = () => {
		setUpvotes(upvotes + 1)
		console.log(upvotes) // always drag 
	}

	return (
		<div className="container">
			<h1>{title}</h1>
			<p>
				{views} Views | Uploaded on {createdAt}
			</p>
			<button onClick={() => setUpvotes(increaseStateByOne)}>
				{upvotes} 👍
			</button>
			<button onClick={() => setDownvotes((prevState) => prevState + 1)}>
				{downvotes} 👎
			</button>
			<br />
			<button onClick={() => setShowComments(toggleState)}>
				Hide Comments
			</button>
		</div>
	)
}

export default VideoDataContainer
