import React, { PureComponent } from 'react';
import './Media.css';
import PropTypes from 'prop-types';

class Media extends PureComponent {
	

	constructor(props) {
		super(props)
		this.state = {
			author: 'Título'
		}
		this.handleClick = this.handleClick.bind(this);
	} 

	handleClick(event) {
		console.log(this.props.cover);
		this.setState({
			author: this.props.title
		})
	}

	

	render() {
		return (
			<div className="Media" onClick={this.handleClick}>
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