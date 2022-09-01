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
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const CLEAN_POKEMONS = 'CLEAN_POKEMONS';
export const CLEAN_PAGINATION = 'CLEAN_PAGINATION';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

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
    }
}

export function fetchTypes() {
    return async function(dispatch) {
        await axios.get('http://localhost:3001/api/types')
        .then(types => {
            console.log(types)
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

export function setCurrentPage(set){
    return {
        type: SET_CURRENT_PAGE,
        payload: set,
    }
}
export function cleanDetail(){
    return {
        type: CLEAN_DETAIL,
        payload: []
    }
}

export function cleanPokemons(){
    return {
        type: CLEAN_POKEMONS,
        payload: []
    }
}

export function cleanPagination(){
    return {
        type: CLEAN_PAGINATION,
        payload: 1
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