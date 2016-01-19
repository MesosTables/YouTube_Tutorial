//component for our search bar
//knows how to create and manage React components
import React from 'react';

//functional based component
//pass in the returned videos to the component as the video variable
// video is = saying "const video = <passReference>.video;"
//pull the function onVideoSlect from the props
const VideoListItem = ({video, onVideoSelect}) => {
	//returns a URL for an image that represents the video
	const imageURL = video.snippet.thumbnails.default.url;
	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className= "video-list media">
				<div className="media-left">
					<img className= "media-object" src={imageURL}/>
				</div>
				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
		);
};

export default VideoListItem;