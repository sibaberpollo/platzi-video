import React from 'react';
import Playlist from '../../playlist/components/playlist'
import './category.css'

function Category(props) {
	//console.log(props.categories)
	return(
		<div className="Category">
			<p className="Category-title">{props.description}</p>
			<h2 className="Category-description">{props.title}</h2>
			<Playlist
				handleOpenModal={props.handleOpenModal} 
				playlist={props.playlist}
				qvalue={props.qvalue}
			/>				
		</div>
	);
}

export default Category;