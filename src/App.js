import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

      this.handleChange = this.handleChange.bind(this);
  }

  /* para leer el doc .json, primero se pasa a json y luego se le asigna los usuarios de la base de datos a users*/
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  };
  /* el render funciona porque importa Component */
  render() {
    const {monsters, searchField} = this.state;
    const filteredmonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1> Monster Rolodex </h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredmonsters} />
      </div>
    );
  }
}

export default App;
