import React, { PropTypes, Component } from 'react';

const style = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
  color: 'red',
};

class StartButton extends Component {
  static propTypes = { start: PropTypes.bool };

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
    const { start } = this.props;
    if (start === true) {
      return (
        <button onClick={this.onClick} style={style}>Start</button>
      );
    }

    return (
      <button onClick={this.pronClick} style={style}/>
    );

  }
}

export { StartButton };
