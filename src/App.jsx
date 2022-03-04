import { useState, useEffect } from 'react';
import {Route, Routes, NavLink, useNavigate} from 'react-router-dom'
import AddPokemon from './pages/AddPokemon/AddPokemon';

import * as pokemonService from "./services/pokemon"

import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([])

  //this allows us to "redirect" to another page without refreshing the page
  const navigate = useNavigate()

  //takes in the new pokemon data
  const handleAddPokemon = async newPokemonData => {

    //going to await pokemonService for it to create a new pokemon using the newPokemonData
    const newPokemon = await pokemonService.create(newPokemonData)

    //will set the pokemon state with any existing pokemon in addition to the newPokemon that was created
    setPokemon([...pokemon, newPokemon])
    navigate('/')
  }

  //to get all pokemon
  useEffect(() => {
    pokemonService.getAll()
    .then(allPokemon => setPokemon(allPokemon))
  }, [])

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
