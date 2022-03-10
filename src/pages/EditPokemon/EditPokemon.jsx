import React, {useState, useRef, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'

const EditPokemon = ({ handleUpdatePokemon }) => {
  //useLocation let's us access the data of the PuppyCard component
  const location = useLocation()

  //this is to hold on to the form so we can always have access to it and check its validity
  const formElement = useRef()
  
  const [formData, setFormData] = useState(location.state.pokemon)

  //setting initial state to true because when the component is mounted the form is valid
  const [validForm, setValidForm] = useState(true)

    //handling controlled inputs like addPokemon
  const handleChange = (e) => {
    e.preventDefault()
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  //checking to see if form is valid. This is called every time the formData state changes.
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleSubmit = (e) => {
    e.preventDefault()
    handleUpdatePokemon(formData)
  }

  return (
    <>
      <h1>Edit Pokemon</h1>
      <form 
      ref={formElement}
      onSubmit={handleSubmit}
      >

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
            disabled={!validForm}
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