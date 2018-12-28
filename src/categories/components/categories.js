import React, { Component } from 'react';
import Category from './category'
import './categories.css'
import Search from '../../widgets/containers/searchContainer' 

class Categories extends Component {
	//console.log(props);
	state = {
		value: ''
	}
	handleSubmit = (event) => {
		event.preventDefault();
		//console.log(this.input.value, 'Enviado');
	}
	setInputRef = element => {
		this.input = element;
	}
	handleInputChange = (event) => {
		this.setState({
			value: this.input.value
		})
		
	}

	render(){
		return(
			<div className="Categories">
				<Search
					setInputRef={this.setInputRef}
					handleSubmit={this.handleSubmit}
					handleInputChange={this.handleInputChange}
					value={this.state.value} 
				/>
				{
					this.props.categories.map((item) => {
						return (
							<Category 
							 	key={item.id} 
							 	{...item} 
								handleOpenModal={this.props.handleOpenModal}
								qvalue={this.state.value}
							/>
						)
					})
				}
			</div>
		)
	}
}

export default Categories