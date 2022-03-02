import React, { useState } from 'react'

const AddPokemon = (props) => {
  
  return (
    <>
      <h1>Add Pokemon</h1>
      <form>

        <div className='form-group mb-3'>
          <label htmlFor='name-input' className='form-label'>
            Pokemon Name: 
          </label>
          <input 
            type="text"
            className="form-control"
            id='name-input'
            name='name'
            required
          />
        </div>

        <div className='form-group mb-3'>
          <label htmlFor='type-input' className='form-label'>
            Pokemon Type: 
          </label>
          <input 
            type="text"
            className="form-control"
            id='type-input'
            name='type'
            required
          />
        </div>
        <div className='d-grid'>
          <button
            type='submit'
            className='btn btn-primary btn-fluid'
          >
            Add Pokemon
          </button>
        </div>

      </form>
    </>
  )
}

export default AddPokemon