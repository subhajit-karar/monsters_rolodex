
import './App.css';
import React, {Component} from 'react';
import {Cardlist} from './components/Cardlist/Cardlist';

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters: [{name:"hi"},{name:'hello'}]
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }

  render(){
    return(
    <div className="App">
      <Cardlist monsters={this.state.monsters} />
    </div>
  );
    
  }
}

export default App;
