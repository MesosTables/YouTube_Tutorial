//imports library react from node_modules and assign it to variable: React
//knows how to create and manage React components
import React, {Component} from 'react';
//this library knows how to render components to the DOM
import ReactDOM from 'react-dom';
//import the component SearchBar -> have to give the path reference
import SearchBar from './components/search_bar';
//import the component VideoList -> have to give the path reference
import VideoList from './components/video_list';
//import the component VideoList -> have to give the path reference
import VideoDetail from './components/video_detail';
//imported from npm
import YTSearch from 'youtube-api-search';
//imported from npm
import _ from 'lodash';
//youtube API key
const API_KEY = "AIzaSyBUjt8wxz41eFErD9Abyqy8kg8xIQdamGI";

//pass in API Key and search term,  will return object's data to the log


//Create a new component, which produces some HTML
//const is ES2016 syntax
class App extends Component {
	constructor(props){
		super(props);
		//will contain an array of videos
		this.state = {
			videos: [],
			selectedVideo:null
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term:term}, videos =>{
			//this will set the videos state to the videos returned from the API 
			this.setState({
				videos: videos,
				//set selectedVideo as the first video
				selectedVideo: videos[0]
			});
		});
	}

	//onVideoSelect function takes in a video and sets it as the Selected video for the App's state
	//pass this function as a property
	render(){
		//videoSearch can only now be called every 300 milliseconds
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
		//old: <SearchBar onSearchTermChange = {term => this.videoSearch(term)} />
		return (
		<div>
			<SearchBar onSearchTermChange = {videoSearch} />
			<VideoDetail video={this.state.selectedVideo}/>
			<VideoList 
				onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
				videos={this.state.videos}/>
		</div>);
	}
}

//Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.getElementById('container'));
// instance of App, pushed to div w/ id of container