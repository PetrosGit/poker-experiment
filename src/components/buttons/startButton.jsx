import React, { PropTypes } from 'react';



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

    render() {
    	return ( <div>Start</div>);


	}
export {StartButton};