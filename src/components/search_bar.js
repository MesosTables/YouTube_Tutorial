//component for our search bar
//knows how to create and manage React components
import React, { Component } from 'react';

//class based component
// this will have a bunch of functionality from the React.Component
class SearchBar extends Component{
	//how we initialize state
	constructor(props){
		//calls the Component constructor and passes it props
		super(props);
		//assigned a new object to this.state
		this.state = {term: ''};
	}

	render(){
		//onChange is an html event attribute
		// when HTML event happens it calls the onInputChange method
		//whenever input changes the State property term is set to value in input
		return(
			<div className="search-bar">
				<input 
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
			);
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

//any file in /component will get SearchBar
export default SearchBar;