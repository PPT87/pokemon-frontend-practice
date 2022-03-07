import React, { useState, useRef, useEffect } from 'react'

const AddPokemon = ({ handleAddPokemon }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
  })

  const [validForm, setValidForm] = useState(false)

  const formElement = useRef()

  //this is handling controlled inputs in the form below
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleSubmit = (e) => {
    e.preventDefault() //prevents page being refreshed
    handleAddPokemon(formData)
  }

  return (
    <>
      <h1>Add Pokemon</h1>
      <form ref={formElement} onSubmit={handleSubmit}>

        <div className='form-group mb-3'>
          <label htmlFor='name-input' className='form-label'>
            Pokemon Name: 
          </label>
          <input 
            type="text"
            className="form-control"
            id='name-input'
            name='name'
            value={formData.name} //controlled input
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
            value={formData.type} //controlled input
            onChange={handleChange}
            required
          />
        </div>
        
        <div className='d-grid'>
          <button
            type='submit'
            className='btn btn-primary btn-fluid'
            disabled={!validForm}
          >
            Add Pokemon
          </button>
        </div>

      </form>
    </>
  )
}

export default AddPokemon