import React from 'react'
import styles from './PokemonList.module.css'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

const PokemonList = ({pokemons, handleDeletePokemon}) => {
  return (
    <>
    <h1>Pokemon List</h1>
    <div className={styles.container}>
      {pokemons.map((pokemon) =>
      <PokemonCard 
        key={pokemon._id}
        pokemon={pokemon}
        handleDeletePokemon={handleDeletePokemon}
      />
      )}
    </div>
    </>
  )
}

export default PokemonList