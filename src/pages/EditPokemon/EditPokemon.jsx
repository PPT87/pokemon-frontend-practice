import React, {useState, useRef} from 'react'
import { Link, useLocation } from 'react-router-dom'

const EditPokemon = () => {
  //useLocation let's us access the data of the PuppyCard component
  const location = useLocation()
  
  const [formData, setFormData] = useState(location.state.pokemon)

  //handling controlled inputs like addPokemon
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <>
      <h1>Edit Pokemon</h1>
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
            value={formData.name}
            onChange={handleChange}
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
            value={formData.type}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className='d-grid mb-3'>
          <button
            type='submit'
            className='btn btn-primary btn-fluid'
          >
            Save
          </button>
        </div>
        <div className="d-grid">
          <Link 
          to='/'
          className='btn btn-danger btn-fluid'
          >
            Cancel
          </Link>
        </div>
      </form>
    </>
  )
}

export default EditPokemon