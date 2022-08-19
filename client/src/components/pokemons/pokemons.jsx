import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../../store/actions";

import p from './pokemons.module.css'
import Pokemon from "../pokemon/pokemon.jsx";

export default function Pokemons() {
  let pokemons = useSelector((state) => state.filteredPokemons);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <>
      <Link to="/createPokemon">
        <button className={p.btn_create}>CREATE POKEMON</button>
      </Link>

      {pokemons?.map((pokemon, i) => {
        return (
          <Pokemon
              key={i}
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
