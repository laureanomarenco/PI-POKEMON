import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../../store/actions";

import p from "./pokemons.module.css";
import Pokemon from "../pokemon/pokemon.jsx";
import Pagination from "../pagination/pagination";
import downloading from '../../assets/downloading.png';

export default function Pokemons() {
  let pokemons = useSelector((state) => state.filteredPokemons);
  const [currentPage , setCurrentPage] = useState(1);
  const [items] = useState(12);

  const max = Math.ceil(pokemons.length / items)

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]); // delay in pagination


  return (
    <>
      <div>
        <Pagination 
          className={p.pagination}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          max={max}
        />
      </div>
      <div className={p.container}>
        {pokemons.length === 0 ? <img className={p.downloading} src={downloading} alt='downloading'/>
        :
        pokemons?.slice((currentPage * items) - items, (currentPage * items)).map((pokemon, i) => {
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
      </div>
    </>
  );
}
