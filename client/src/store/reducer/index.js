import {
  FETCH_POKEMONS,
  GET_POKEMON_DETAILS,
  SEARCH_POKEMONS,
  CREATE_POKEMON,
  FETCH_TYPES,
  FILTER_BY_TYPE,
  CLEAN_DETAIL,
  CLEAN_POKEMONS,
  CLEAN_PAGINATION,
  SET_CURRENT_PAGE,
  SORT,
  FROM,
} from "../actions";
import { ASCNAME, DESCNAME, ASCATTACK, DESCATTACK } from "../../constants/sort";
import { API, DB } from "../../constants/from";

const initalState = {
  pokemons: [],
  filteredPokemons: [],
  pokemonById: [],
  types: [],
  pagination: 1
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case FETCH_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        filteredPokemons: action.payload,
      };

    case SEARCH_POKEMONS:
      return {
        ...state,
        filteredPokemons: action.payload,
      };

    case GET_POKEMON_DETAILS:
      return {
        ...state,
        pokemonById: action.payload,
      };

    case CREATE_POKEMON:
      return {
        ...state,
      };

    case FETCH_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    case FILTER_BY_TYPE:
      let filteredByTypePokemons = [...state.pokemons];
      filteredByTypePokemons = filteredByTypePokemons.filter(p => p.types.includes(action.payload))
      return {
        ...state,
        filteredPokemons: filteredByTypePokemons,
      };

    case SET_CURRENT_PAGE: 
      let page = state.pagination;
      let newPage
      if(action.payload === 1){
        newPage = page + 1;
      }
      if(action.payload === -1){
        newPage = page - 1
      }
      return {
        ...state,
        pagination: newPage
      }

    case CLEAN_DETAIL:
      return {
        ...state,
        pokemonById: action.payload,
      };
    
    case CLEAN_POKEMONS:
      return {
        ...state,
        filteredPokemons: action.payload,
      };

    case CLEAN_PAGINATION:
      return {
        ...state,
        pagination: action.payload,
      }

    case SORT:
      let orderedPokemons = [...state.pokemons];
      if (action.payload === ASCNAME || action.payload === DESCNAME) {
        orderedPokemons = orderedPokemons.sort((a, b) => {
          if (a.name < b.name) {
            return action.payload === ASCNAME ? -1 : 1;
          }
          if (a.name > b.name) {
            return action.payload === ASCNAME ? 1 : -1;
          }
          return 0;
        });
      }
      if (action.payload === ASCATTACK || action.payload === DESCATTACK) {
        orderedPokemons = orderedPokemons.sort((a, b) => {
          if (a.attack > b.attack) {
            return action.payload === ASCATTACK ? -1 : 1;
          }
          if (a.attack < b.attack) {
            return action.payload === ASCATTACK ? 1 : -1;
          }
          return 0;
        });
      }
      return {
        ...state,
        filteredPokemons: orderedPokemons,
      };

    case FROM:
      let pokemonsFrom = [];
      let pokemons = [...state.pokemons];
      if (action.payload === API) {
        pokemons = pokemons.filter((p) => p.created !== true);
        pokemonsFrom = pokemons;
      }
      if (action.payload === DB) {
        pokemons = pokemons.filter((p) => p.created === true);
        pokemonsFrom = pokemons;
      }
      return {
        ...state,
        filteredPokemons: pokemonsFrom,
      };

    default:
      return state;
  }
}
