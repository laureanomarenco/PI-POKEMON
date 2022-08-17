import {
  FETCH_POKEMONS,
  GET_POKEMON_DETAILS,
  SEARCH_POKEMONS,
  SORT,
} from "../actions";
import {
  ASCNAME,
  DESCNAME,
  ASCATTACK,
  DESCATTACK,
  DEF,
} from "../../constants/sort";

const initalState = {
  pokemons: [],
  filteredPokemons: [],
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
        filteredPokemons: action.payload,
      };

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

    default:
      return state;
  }
}
