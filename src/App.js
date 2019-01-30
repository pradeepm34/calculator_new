import React, { Component } from 'react';
import './App.css';
import UserInput from '../src/components/UserInput';
import Buttons from '../src/components/Buttons';

class App extends Component {
   state ={
    result : []
  };
  
  calculate = () => {
    try {
      console.log(this.state.result);
        this.setState({
            result: (eval(this.state.result) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
};
 
backspace = () => {
  this.setState({
      result: this.state.result.slice(0, -1)
  })
};

  handleClick = (e)=>{  
  e.preventDefault();
   const number = e.target.value;
   switch(number){
     case "Clear" :
     return this.setState({
       result:[]
     });
     case "CE":
     return this.backspace();
     case "=":
     return this.calculate();
     default:
     let opertations = [...this.state.result,number].join('');
     return  this.setState({
      result: opertations
     })
   };
  };

  render() {
    return (
      <div className = "calc">
       <div className="calculator-body">
        <UserInput value = {this.state.result}/>
        <Buttons click={this.handleClick}/>
      </div>
      </div>
      
    );
  }
};

export default App;
