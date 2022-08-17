import { Link } from "react-router-dom";

export default function Pokemon({ id, name, imageDefault, types }) {
  return (
    <>
      <Link to={`/pokemonDetails/${id}`}>
        <h4>{name}</h4>
        <img src={imageDefault} alt="Imagen" />
        <div>
          {types.map((t) => {
            return <p>{t}</p>;
          })}
        </div>
      </Link>
    </>
  );
}
