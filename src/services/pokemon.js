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

export {
  create,
}