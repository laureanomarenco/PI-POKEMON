import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPokemonDetails } from "../../../store/actions";
import { fetchPokemons } from "../../../store/actions";

import a from './arena.module.css'
export default function Arena() {
    const allPokemons = useSelector((state) => state.pokemons);
    let dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchPokemons());
    }, [dispatch]);
  
    const enemies = allPokemons.filter(
      (p) =>
        p.name === "weedle" ||
        p.name === "rattata" ||
        p.name === "ekans" ||
        p.name === "pidgey"
    );

    let pokemon = useSelector((state) => state.pokemonById);
    let { id } = useParams();

    useEffect(() => {
      dispatch(getPokemonDetails(id));
    }, [dispatch, id]);

  return (
    <>
    <div className={a.background}>

        <img className={a.pokemon} src={pokemon.imageBack} alt="pokemon"/>
    
        <img className={a.enemie} src={enemies[0].imageDefault} alt="pokemon"/>

    </div>
    </>
  )
}
