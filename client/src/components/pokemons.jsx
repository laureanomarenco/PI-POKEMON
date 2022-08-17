import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../store/actions";

import Pokemon from "./pokemon";

import pokemon from "../assets/pokemon.png";
import { Link } from "react-router-dom";


export default function Pokemons() {
  let pokemons = useSelector((state) => state.filteredPokemons);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <>
      <div>
        <img src={pokemon} alt="pokemon"></img>
      </div>
      <Link to='/createPokemon'>
        <button>CREATE POKEMON</button>
      </Link>

      {pokemons.map((pokemon) => {
        return (
          <Pokemon
            id={pokemon.id}
            name={pokemon.name}
            imageDefault={pokemon.imageDefault}
            hp={pokemon.hp}
            attack={pokemon.attack}
            defense={pokemon.defense}
            velocity={pokemon.velocity}
            height={pokemon.height}
            weight={pokemon.weight}
            types={pokemon.types}
          />
        );
      })}
    </>
  );
}
