import React, { PropTypes } from 'react';
import { Card } from './card';
import { Hand } from './hand';


class StartButton extends Component {
	 constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };

    this.onClick = () => {
      this.setState({
         selected: !this.state.selected,
      });
    };

    renderStartButton(){
    	if(this.state.selected === false){
    		return (
    			<button type="button" onClick={this.onClick} >Start</button>)

    	}
    }
  
}