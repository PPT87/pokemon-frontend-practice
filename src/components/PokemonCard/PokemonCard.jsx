import React from 'react'

const PokemonCard = ({ pmon }) => {
  return (
    <div className='card'>
      <div className="card-body">
        <h2 className="card-text">{pmon.name}</h2>
        <p className='card-text'>{pmon.type}</p>
      </div>
    </div>
  )
}

export default PokemonCard