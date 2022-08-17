import axios from 'axios';
export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const SEARCH_POKEMONS = 'SEARCH_POKEMONS';
export const GET_POKEMON_DETAILS = 'GET_POKEMON_DETAILS';
export const SORT = 'SORT';
export const FROM = 'FROM';

export function fetchPokemons() {
    return function(dispatch) {
        axios.get('http://localhost:3001/api/pokemons')
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
    return function(dispatch) {
        axios.get(`http://localhost:3001/api/pokemons?name=${search}`)
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
    return function(dispatch) {
        axios.get(`http://localhost:3001/api/pokemons/${id}`)
        .then(pokemons => {
            dispatch({
                type: GET_POKEMON_DETAILS,
                payload: pokemons.data
            })
        })
        .catch(err => {console.log(err)})
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