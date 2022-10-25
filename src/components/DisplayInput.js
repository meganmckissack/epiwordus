import React from 'react';

export class DisplayInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
	  this.setState({
	    userInput: e.target.value
	  });
	}

  render() {
    return (
      <div>
        <input 
          type="text" 
          onChange={this.handleUserInput} 
          value={this.state.userInput}
        />
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

export default DisplayInput;