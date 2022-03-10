import React from 'react'
import { Link } from 'react-router-dom'

const PokemonCard = ({ pokemon, handleDeletePokemon }) => {

  return (
    <div className='card'>
      <div className="card-body">
        <h2 className="card-text">{pokemon.name}</h2>
        <p className='card-text'>{pokemon.type}</p>
      </div>
      <div className="card-footer">
        <Link
        className='btn btn-sm btn-warning'
        to='/edit'
        state={{pokemon}} //passing pokemon state to set edit form
        >
        Edit
        </Link>
        <button 
        className='btn btn-sm btn-danger m-left'
        onClick={()=>handleDeletePokemon(pokemon._id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default PokemonCard