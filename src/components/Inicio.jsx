import React, { useEffect, useState } from 'react'
import { getPersonajes } from '../functions/functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

const Inicio = () => {
    const [personajes, setPersonajes] = useState(null)
    const [episodio, setEpisodio] = useState(null)
    const [busqueda, setBusqueda] = useState(0)

    const handleChange = async e => {
        setBusqueda(e.target.value);
        console.log("busqueda: " + e.target.value)
    }

    const datos = e => {
        e.preventDefault()
        fetch(`https://cpadilla-rick-and-morty.herokuapp.com/cpadilla-rickAndMorty/api/episodes/${busqueda}`)
            .then(response => response.json)
            .then(data => {
                const { Search } = data
                setPersonajes(Search)
            })
        getPersonajes(busqueda, setPersonajes, setEpisodio)
    }


    useEffect(() => {

    }, [])

    return (
        <div className='App'>
            <form onSubmit={datos} className=''>
                <div >
                    <label> {personajes != null && episodio != null ? ("Episodio " + episodio.episode + ": " + episodio.episodeName) : ('ingrese un episodio válido')}</label>
                    <input className=' ' placeholder='Busqueda por capitulo' onChange={handleChange} />
                    <button className='btn btn-success' type='submit'>
                        <FontAwesomeIcon icon={faSearch} ></FontAwesomeIcon>
                    </button>
                </div>
            </form>
            <hr></hr>


            <div class="row row-cols-1 row-cols-md-3 g-4">
                {personajes != null ? (
                    personajes.map(personaje => (
                        <div class="col">
                            <div class="card" key={personaje.id}>
                                <img src={personaje.image} class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">{personaje.name}</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Species: {personaje.species}</li>
                                    <li class="list-group-item">Gender: {personaje.gender}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                ) : ('Este episodio no existe')}

            </div>










        </div>

    )
}

export default Inicio