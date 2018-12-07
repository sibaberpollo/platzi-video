import React from 'react';
import Media from'./media.js';
import './playlist.css';

function Playlist(props) {
	//console.log(props.playlist);
	return (		
		<div className="Playlist">			
			{
				props.playlist.map(function(item) {
					return <Media {...item} key={item.id} />;

				})
			}
		</div>
	)
}

export default Playlist; 