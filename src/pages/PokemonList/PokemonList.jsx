import React from 'react'
import styles from './PokemonList.module.css'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

const PokemonList = ({pokemon, handleDeletePokemon}) => {
  return (
    <>
    <h1>Pokemon List</h1>
    <div className={styles.container}>
      {pokemon.map((pmon) =>
      <PokemonCard 
        key={pmon._id}
        pmon={pmon}
        handleDeletePokemon={handleDeletePokemon}
      />
      )}
    </div>
    </>
  )
}

export default PokemonList