import { useState, useEffect } from 'react';
import {Route, Routes, NavLink, useNavigate} from 'react-router-dom'

import AddPokemon from './pages/AddPokemon/AddPokemon';
import PokemonList from './pages/PokemonList/PokemonList';
import EditPokemon from './pages/EditPokemon/EditPokemon';

import * as pokemonService from "./services/pokemon"

import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([])

  //this allows us to "redirect" to another page without refreshing the page
  const navigate = useNavigate()

  //takes in the new pokemon data
  const handleAddPokemon = async newPokemonData => {

    //going to await pokemonService for it to create a new pokemon using the newPokemonData
    const newPokemon = await pokemonService.create(newPokemonData)

    //will set the pokemon state with any existing pokemon in addition to the newPokemon that was created
    setPokemons([...pokemons, newPokemon])
    navigate('/')
  }

  //to get all pokemon
  useEffect(() => {
    pokemonService.getAll()
    .then(allPokemon => setPokemons(allPokemon))
  }, [])

  const handleDeletePokemon = (id) => {
    pokemonService.deleteOne(id)
    //filter out any pokemon whose id IS NOT the id that we're passing in above
    //the new state is all of the pokemon except for the pokemon that has an id that matches the pokemonID
    .then(setPokemons(pokemons.filter(pokemon => pokemon._id !== id)))
  }

  //lift up the state of the form to the App component because that's where our state for pokemon is being held.
  const handleUpdatePokemon = (updatedPokemonData) => {
    pokemonService.update(updatedPokemonData)
    .then(updatedPokemon => {
      //Using map to replace just the pokemon that was updated
      const newPokemonArray = pokemons.map(pokemon =>
      pokemon._id === updatedPokemon._id ? updatedPokemon : pokemon
    )
    setPokemons(newPokemonArray)
    navigate('/')
  })
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
          <Route 
          path='/'
          element={<PokemonList pokemons={pokemons} handleDeletePokemon={handleDeletePokemon}/>}
          />
          <Route path='/add' 
          element={<AddPokemon 
          handleAddPokemon={handleAddPokemon}/>} 
          />
          <Route path='/edit'
          element={<EditPokemon handleUpdatePokemon={handleUpdatePokemon}/>}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
