
import './App.css';
import React, {Component} from 'react';
import {Cardlist} from './components/Cardlist/Cardlist';
import {SearchBox} from './components/SearchBox/SearchBox';

//Short cart rafc

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters: [],
      searchField:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }

  render(){
    const {monsters, searchField} = this.state;
    const filterMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
    <div className="App">
      <SearchBox 
      placeholder="Search Monster" 
      handleOnChange={e => this.setState({searchField: e.target.value})}/>
      <Cardlist monsters={filterMonster} />
    </div>
  );
    
  }
}

export default App;
