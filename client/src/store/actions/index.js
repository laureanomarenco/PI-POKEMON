import axios from 'axios';
export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const SEARCH_POKEMONS = 'SEARCH_POKEMONS';
export const GET_POKEMON_DETAILS = 'GET_POKEMON_DETAILS';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const FETCH_TYPES = 'FETCH_TYPES';
export const FETCH_BY_ID = 'FETCH_BY_ID';
export const SORT = 'SORT';
export const FROM = 'FROM';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';

export function fetchPokemons() {
    return async function(dispatch) {
        await axios.get('http://localhost:3001/api/pokemons')
        .then(pokemons => {
            dispatch({
                type: FETCH_POKEMONS,
                payload: pokemons.data
            })
        })
        .catch(err => {console.log(err)})
    }
}

export function searchPokemons(search) {
    return async function(dispatch) {
        await axios.get(`http://localhost:3001/api/pokemons?name=${search}`)
        .then(pokemons => {
            dispatch({
                type: SEARCH_POKEMONS,
                payload: pokemons.data
            })
        })
        .catch(err => {console.log(err)})
    }
}

export function getPokemonDetails(id) {
    return async function(dispatch) {
        let pokemons = await axios.get(`http://localhost:3001/api/pokemons/${id}`)

            return dispatch({
                type: GET_POKEMON_DETAILS,
                payload: pokemons.data
            })

    }
}

export function createPokemon(pokemon) {
    return async function(dispatch) {
        await axios.post('http://localhost:3001/api/pokemons', pokemon)
        .then(pokemons => {
            dispatch({
                type: CREATE_POKEMON,
                payload: pokemons.data
            })
        })
        .catch(err => {console.log(err)})
    }
}

export function fetchTypes() {
    return async function(dispatch) {
        await axios.get('http://localhost:3001/api/types')
        .then(types => {
            dispatch({
                type: FETCH_TYPES,
                payload: types.data
            })
        })
        .catch(err => {console.log(err)})
    }
}

export function filterByType(type){
    return {
        type: FILTER_BY_TYPE,
        payload: type,
    }
}

export function sort(order){
    return {
        type: SORT,
        payload: order,
    }
}

export function from(place){
    return {
        type: FROM,
        payload: place
    }
}