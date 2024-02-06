// import { Component } from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/cardlist.component';
import SearchBox from './components/searchbox/searchbox.component';

const App = () => {
  const [searchfield, setSearchfield] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log('render')

  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => setMonsters(users));
  },[])

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchfield) });
     
      setFilteredMonsters(newFilteredMonsters);
  },[monsters, searchfield])

  

  const onSearchChange = (e) => {
        const searchstring = e.target.value.toLowerCase();
        setSearchfield(searchstring)
      }

 

    
           

  return (
    <div className="App">
      <h1 className='app-title'> Monsters Rolodex </h1>
      <div >
        <SearchBox searchChange={onSearchChange}
          placeholder='search monsters'
          className='searchbox'
        />
        <CardList filteredMonsters={filteredMonsters} />
      </div>
    </div>
  )
}

// class App extends Component {

//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchfield: ''
//     };

//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(() => {
//         return { monsters: users }
//       },
//         () => { console.log(this.state) }
//       ));
//   }

//   onSearchChange = (e) => {
//     const searchfield = e.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchfield }
//     })
//   }

//   render() {
//     const {searchfield, monsters} = this.state;
//     const {onSearchChange} = this

//     const filteredMonsters = monsters.filter((monster) => { return monster.name.toLowerCase().includes(searchfield) });
//     return (
//       <div className="App">
//         <h1 className='app-title'> Monsters Rolodex</h1>
//         <div >
//           <SearchBox searchChange = {onSearchChange}
//           placeholder='search monsters'
//           className = 'searchbox'
//           />
//           <CardList filteredMonsters = {filteredMonsters}/>
//         </div>
//       </div>
//     );
//   }

// }

export default App;
