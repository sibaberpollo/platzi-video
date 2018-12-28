import React from 'react';
import Media from'./media.js';
import './playlist.css';

function Playlist(props) {
	//console.log(props.playlist);
	return (		
		<div className="Playlist">			
			{
				props.playlist.map(function(item) {
					return <Media handleClick={props.handleOpenModal}  {...item} key={item.id} qvalue={props.qvalue}/>;

				})
			}
		</div>
	)
}

export default Playlist; 