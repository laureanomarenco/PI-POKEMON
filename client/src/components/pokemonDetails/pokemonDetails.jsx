import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTypes, getPokemonDetails } from "../../store/actions";

import p from "./pokemonDetails.module.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

export default function PokemonDetails() {
  let detail = useSelector((state) => state.filteredPokemons);
  let { id } = useParams();
  let dispatch = useDispatch();
  useEffect(() => {
    //dispatch(fetchTypes())
    dispatch(getPokemonDetails(id));
  }, []);

  return (
    <div className={p.background}>
      <p>{detail.name}</p>
      <p>hp {detail.hp}</p>
      <p>attack {detail.attack}</p>
      <p>defense {detail.defense}</p>
      <p>velocity {detail.velocity}</p>
      <p>height {detail.height}</p>
      <p>weight {detail.weight}</p>
      <p>types</p>
      {detail?.types?.map((t, i) => {
        return <span key={i} className={p.text}>{t}</span>;
      })} 
    </div>
  );
}
