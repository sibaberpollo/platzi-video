import React, { Component } from 'react';
import '../components/search.css';
//import Search from '../components/search'

class SearchContainer extends Component {
	
	render() {
		return(
			<form className="Search" onSubmit={this.props.handleSubmit} >
				<input 	
					ref={this.props.setInputRef}
					type="text"
					placeholder="Buscar..." 
					className="Search-input"
					onChange={this.props.handleInputChange}
					value={this.props.value}
				/>
			</form>
		)
	}
}

export default SearchContainer;