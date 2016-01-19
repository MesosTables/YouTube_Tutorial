//component for our search bar
//knows how to create and manage React components
import React from 'react';
import VideoListItem from './video_list_item';

//class based component
// this will have a bunch of functionality from the React.Component
//pass in the returned videos to the component as props
const VideoList = (props) => {
	//for each video in results pass these one by one to VideoListItem
	// return result and set in videoItems variable
	//pass the function onvideoSelect from the prop to the videoItem
	const videoItems = props.videos.map((video) =>{
		return <VideoListItem 
			onVideoSelect1={props.onVideoSelect}
			key = {video.etag} 
			video = {video} />
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
		);
};

export default VideoList;