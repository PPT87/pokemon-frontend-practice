//this lets the frontend to talk to backend

const BASE_URL = '/api/pokemon'

//uploading JSON data
const create = (pokemon) => {
  return fetch(BASE_URL, {
    method: "POST", 
    headers: { //telling backend that "i'm sending you JSON data"
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pokemon)
  })
  .then(res => res.json())
}

//get all pokemon function
const getAll = () => {
  //we're not sending anything to the backend so we don't need a header
  //we're not sending anything on the body, so we don't need a body
  return fetch(BASE_URL)
  .then(res => res.json())
}

const deleteOne = (id) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  })
  .then(res=>res.json())
}

export {
  create,
  getAll,
  deleteOne,
}