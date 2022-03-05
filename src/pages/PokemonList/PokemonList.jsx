import React from 'react'
import styles from './PokemonList.module.css'

const PokemonList = ({pokemon}) => {
  return (
    <div className={styles.container}>
      {pokemon.map((pmon) =>
        <h1 key={pmon._id}>{pmon.name} <span><h5>{pmon.type}</h5></span></h1>
      )}
    </div>
  )
}

export default PokemonList