import { useState } from 'react';
import {Route, Routes, NavLink} from 'react-router-dom'
import AddPokemon from './pages/AddPokemon/AddPokemon';

import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([])

  return (
    <div className="App">
      <header className='App-header'>
        React Pokemon CRUD
        <nav>
          <NavLink to='/'>Pokemon List</NavLink>
          <NavLink to='/add' className='m-left'> Add Pokemon</NavLink>
        </nav>
      </header>
      <main>
        <AddPokemon />
      </main>
    </div> 
  );
}

export default App;
