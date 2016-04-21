

import React from 'react';
import './homeview.css';


import { Card, Hand , BackHand } from 'components/cards';

export default class HomeView extends React.Component {
  render () {
    return (
    <div>
    	<h1 > Five Card Draw Poker </h1>
    	<div className = 'pokerhand'>
    		<BackHand/>


      		<Hand cards={[
      	  		{ rank:'Q', suit:'diams' },
     	 		  { rank:'J', suit:'diams' },
     		      { rank:'10', suit:'diams' },
     		   	  { rank:'9', suit:'diams' },
        		  { rank:'8', suit:'diams' },
       		 ]} />
      	</div>
    </div>
      
    );
  }
}
