import React from 'react';
import ChangeColor from './ChangeColor.js';

class BackgroundColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'red'
    };
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor(){
      this.setState({
          backgroundColor: this.state.backgroundColor === 'red' ? 'blue' : 'red'
      });
  }
  render() {
    return (
      <div style={{height: '200px', width: '200px', backgroundColor: this.state.backgroundColor}}>
        <ChangeColor clickHandler= {this.changeColor} currentColor={this.state.backgroundColor}></ChangeColor>
      </div>
    )
  }
} 

export default BackgroundColor; 