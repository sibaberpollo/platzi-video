import React from 'react';
import { render } from 'react-dom';
//import Playlist from'./src/playlist/components/playlist';
import Home from'../pages/containers/home';
import data from '../api.json'; 
//console.log("Hola Sapo");

const container = document.getElementById('app');


render(<Home data={data} />, app);