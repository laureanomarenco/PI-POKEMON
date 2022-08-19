import { Link } from "react-router-dom";

import p from "./pokemon.module.css";

export default function Pokemon({ id, name, imageDefault, types }) {
  return (
    <>
      <Link to={`/pokemonDetails/${id}`} name={name}>
        <div className={p.container}>
          <div className={p.card}>
            <h4 className={p.text_h4}>{name}</h4>
            <div>
              <img
                className={p.image_pokemon}
                src={imageDefault}
                alt="Imagen"
              />
              <div className={p.container_types}>
                {types?.map((t, i) => {
                  return <span key={i} className={p.text}>{t}</span>;
                })}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
