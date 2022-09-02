import { fetchPokemons } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import c from "./choose.module.css";
import pokebola from "../../../assets/downloading.png";

export default function Choose() {
  const allPokemons = useSelector((state) => state.pokemons);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  const initialPokemons = allPokemons.filter(
    (p) =>
      p.name === "bulbasaur" ||
      p.name === "charmander" ||
      p.name === "squirtle" ||
      p.name === "pikachu"
  );

  const colors = {
    fire: "radial-gradient(circle, #c99696 0%, #fe5959 100%)",
    water: "radial-gradient(circle, #bfecff 0%, #61d0ff 100%)",
    grass: "radial-gradient(circle, #9ac198 0%, #439740 100%)",
    electric: "radial-gradient(circle, #fffec9 0%, #fffc00 100%)",
  };
  return (
    <>
      <div className={c.background}>
      <Link to="/home">
        <h1 className={c.text_h1}>Pokemon</h1>
      </Link>
        <p className={c.text}>Choose your Pokemon</p>
        <div className={c.container}>
          {initialPokemons.map((p, i) => {
            return (
              <Link key={i} to={`/arena/${p.id}`}>
                <div className={c.container_pokebola}>
                  <img className={c.pokebola} src={pokebola} alt="pokebola" />
                  <p
                    className={c.types}
                    style={{ backgroundImage: colors[p.types[0]] }}
                  >
                    {p.types[0]}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
