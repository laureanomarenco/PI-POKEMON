import { Link } from "react-router-dom";

import p from "./pokemon.module.css";

export default function Pokemon({ id, name, imageDefault, types }) {
  const colors = {
    normal: "radial-gradient(circle, #bebb93 0%, #96903f 100%)",
    fighting: "radial-gradient(circle, #da7f7f 0%, #bc0000 100%)",
    flying: "radial-gradient(circle, #ffffff 0%, #acfdff 100%)",
    poison: "radial-gradient(circle, #b084b8 0%, #8c4299 100%)",
    ground: "radial-gradient(circle, #d4c399 0%, #aa7f13 100%)",
    rock: "radial-gradient(circle, #adadad 0%, #6a6a6a 100%)",
    bug: "radial-gradient(circle, #ffebc3 0%, #f7ae20 100%)",
    ghost: "radial-gradient(circle, #bfbfbf 0%, #ffffff 100%)",
    steel: "radial-gradient(circle, #cacaca 0%, #979797 100%)",
    fire: "radial-gradient(circle, #c99696 0%, #fe5959 100%)",
    water: "radial-gradient(circle, #bfecff 0%, #61d0ff 100%)",
    grass: "radial-gradient(circle, #9ac198 0%, #439740 100%)",
    electric: "radial-gradient(circle, #fffec9 0%, #fffc00 100%)",
    psychic: "radial-gradient(circle, #000000 0%, #ffffff 100%)",
    ice: "radial-gradient(circle, #8fddff 0%, #0079ad 100%)",
    dragon: "radial-gradient(circle, #e80000 0%, #4c0000 100%)",
    dark: "radial-gradient(circle, #5d5d5d 0%, #000000 100%)",
    fairy: "radial-gradient(circle, #e0b2db 0%, #d46bc9 100%)",
    unknown: "radial-gradient(circle, #ffffff 0%, #1b2094 100%)",
    shadow: "radial-gradient(circle, #000000 0%, #4e4e4e 100%)",
  };

  return (
    <>
      <Link
        to={`/pokemonDetails/${id}`}
        name={name}
        className={p.card}
        style={{ backgroundImage: colors[types[0]] }}
      >
        <p className={p.text_h4}>{name}</p>
        <div>
          <img className={p.image_pokemon} src={imageDefault} alt="Imagen" />
          <div className={p.container_types}>
            {types?.map((t, i) => {
              return (
                <span key={i} className={p.span}>
                  {t}
                </span>
              );
            })}
          </div>
        </div>
      </Link>
    </>
  );
}
