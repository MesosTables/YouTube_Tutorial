//component for our search bar
//knows how to create and manage React components
import React from 'react';


//pass in the returned videos to the component as the video variable
// video is = saying "const video = <passReference>.video;"
const VideoDetail = ({video}) => {

	if(!video){
		return <div>Loading...</div>
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	console.log(url);

	return(
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;