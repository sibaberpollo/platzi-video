import React, { PureComponent } from 'react';
import './Media.css';
import PropTypes from 'prop-types';

class Media extends PureComponent {
	

	constructor(props) {
		super(props)
		this.state = {
			author: 'Título'
		}
		//this.handleClick = this.handleClick.bind(this);
	} 

	/*
	Ahora viene heradado desde Categories
	handleClick(event) {
		console.log(this.props.cover);
		this.setState({
			author: this.props.title
		})
	}
	*/

	render() {
		if(this.props.title.search(this.props.qvalue) == -1){
			return "";
		}
		//console.log(this.props.title + "xxx" + this.props.qvalue);
		return (
			<div className="Media" onClick={this.props.handleClick}>
				<div className="Media-cover">
					<img 
						src={this.props.cover}
						alt=""
						width={260}
						height={160}
						className="Media-image"
					/>
					<h3 className="Media-title">{this.props.title}</h3>
					<p className="Media-author">{this.props.author}</p>
				</div>
			</div>
		)
	}
}

Media.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;