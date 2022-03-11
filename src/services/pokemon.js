//this lets the frontend to talk to backend

const BASE_URL = '/api/pokemon'

//uploading JSON data
const create = async pokemon => {
  try{
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { //telling backend that "i'm sending you JSON data"
        'content-type': 'application/json'
      },
      body: JSON.stringify(pokemon)
    })
    const data = await res.json()
    return data
  } catch (err) {
    throw err
  }
}

//get all pokemon function
const getAll = async () => {
  try{
    //we're not sending anything to the backend so we don't need a header
    //we're not sending anything on the body, so we don't need a body
    const res = await fetch(`${BASE_URL}`);
    const data = await res.json();
    return data;
  } catch (err) {
    throw err
  }
}

// const deleteOne = (id) => {
//   return fetch(`${BASE_URL}/${id}`, {
//     method: "DELETE"
//   })
//   .then(res => res.json())
// }

const deleteOne = async id => {
  try{
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE"
    })
  } catch (err) {
    throw err
  }
}

const update = async (pokemon) => {
  const updatedPokemon = await fetch(`${BASE_URL}/${pokemon._id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(pokemon),
  });
  return await updatedPokemon.json()
}

export {
  create,
  getAll,
  deleteOne,
  update
}