import video from "../data/video.js"
import { useState } from "react"
import VideoBox from "./VideoBox"
import VideoDataContainer from "./VideoDataContainer"
import CommentContainer from "./CommentContainer"
/* 
  When the app loads, display a video along with its details and a list of all the comments
  When a user clicks on the "👍" button, the number of upvotes for the video should increase
  When a user clicks on the "👎" button, the number of downvotes for the video should increase
  When the user clicks the "Hide Comments" button, the comments should be removed from the page, and the button text should change to "Show Comments". When the button is clicked again, it should toggle back to showing the comments.

*/

function App() {
	console.log("Here's your data:", video)
	// const [videoState, setVideoState] = useState(video)
	const [upvoteState, setUpvotes] = useState(video.upvotes)
	const [downvotesState, setDownvotes] = useState(video.downvotes)
	const [commentState, setComments] = useState(video.comments)
	const [showComments, setShowComments] = useState(true)

	const {
		title,
		embedUrl,
		views,
		createdAt,
		// id,
		// upvotes,
		// downvotes,
		// comments,
	} = video

	return (
		<div className="App">
			<VideoBox title={title} embedUrl={embedUrl} />
			<VideoDataContainer
				// videoObj={video}
				views={views}
				title={title}
				createdAt={createdAt}
				upvotes={upvoteState}
				downvotes={downvotesState}
				setUpvotes={setUpvotes}
				setDownvotes={setDownvotes}
				setShowComments={setShowComments}
			/>
			<hr />
			{showComments ? <CommentContainer comments={commentState} /> : null}
		</div>
	)
}

export default App
