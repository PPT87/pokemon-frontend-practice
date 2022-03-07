import React from 'react'
import { Link } from 'react-router-dom'

const PokemonCard = ({ pmon, handleDeletePokemon }) => {

  return (
    <div className='card'>
      <div className="card-body">
        <h2 className="card-text">{pmon.name}</h2>
        <p className='card-text'>{pmon.type}</p>
      </div>
      <div className="card-footer">
        <Link
        className='btn btn-sm btn-warning'
        to='/edit'
        state={{pmon}}
        >
        Edit
        </Link>
        <button 
        className='btn btn-sm btn-danger m-left'
        onClick={()=>handleDeletePokemon(pmon._id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default PokemonCard