import React, { PropTypes, Component } from 'react';
const style = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
  color: 'red';
};

class Startbutton extends React.Component {
	static propTypes = {
    Start: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: true,
    };

    this.onClick = () => {
      this.setState({
        selected: !this.state.selected,
      });
    };
  }
    render() {
    	const {Start} = this.props;
    	if (Start === true) {
    	  return (
    	    <button onClick={this.onClick} style={style}>Start</button>
    	  );
    	}

   		return (
      		<button onClick={this.onClick} style={style}>Stop</button>
    	);
  		
   }
}

export {Startbutton};
