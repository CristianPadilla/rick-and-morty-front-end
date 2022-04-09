import axios from "axios"

const getPersonajes = async (id,state,state2) =>{
    const peticion= await axios.get(`https://cpadilla-rick-and-morty.herokuapp.com/cpadilla-rickAndMorty/api/episodes/${id}`)
    state(peticion.data.characters)
    state2(peticion.data)
}

export{
    getPersonajes
}