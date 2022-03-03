import { useState } from 'react';
import {Route, Routes, NavLink} from 'react-router-dom'
import AddPokemon from './pages/AddPokemon/AddPokemon';

import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([])

  //takes in the new pokemon data
  const handleAddPokemon = newPokemonData => {
    //will set the pokemon with any existing pokemon in addition to the new pokemon data
    setPokemon([...pokemon, newPokemonData])
  }

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
        <Routes>
          <Route path='/add' element={<AddPokemon handleAddPokemon={handleAddPokemon}/>} />
        </Routes>
      </main>
    </div> 
  );
}

export default App;
