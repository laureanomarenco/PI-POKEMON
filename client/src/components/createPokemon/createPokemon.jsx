import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createPokemon, fetchTypes } from "../../store/actions";
import validate from "./validate";
import c from "./createPokemon.module.css";

export default function CreatePokemon() {
  const [pokemon, setPokemon] = useState({
    name: "",
    hp: null,
    attack: null,
    defense: null,
    velocity: null,
    height: null,
    weight: null,
    imageDefault: "",
    imageShiny: "",
    types: [],
  });

  const [errors, setErrors] = useState({});
  let types = useSelector((state) => state.types);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);

  function onInputChange(e) {
    e.preventDefault();
    setPokemon((prevState) => {
      const newPokemon = {
        ...prevState,
        [e.target.name]: e.target.value,
      };
      setErrors(validate(newPokemon));

      return newPokemon;
    });
  }

  function handleSelect(e) {
    setPokemon({
      ...pokemon,
      types: [...pokemon.types, e.target.value],
    });
    setErrors(
      validate({
        ...pokemon,
        types: [...pokemon.types, e.target.value],
      })
    );
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(createPokemon(pokemon));
  }

  function handleDeleteSelection(e) {
    e.preventDefault();
    setPokemon({
      ...pokemon,
      types: pokemon.types.filter((type) => type !== e.target.name),
    });
  }
  return (
    <>
      <div className={c.background}>
        <Link to="/home">
          <h1 className={c.text_h1}>Pokemon</h1>
        </Link>

        <h3 className={c.text_h3}>Create a new Pokemon</h3>

        <form className={c.container} onSubmit={onSubmit}>
          <label className={c.text}>Name</label>
          <input
            className={c.inputs}
            onChange={onInputChange}
            name="name"
            value={pokemon.name}
            type="text"
          />
          {errors.name && <span className={c.danger}>{errors.name}</span>}

          <label className={c.text}>HP</label>
          <input
            className={c.inputs}
            onChange={onInputChange}
            name="hp"
            type="number"
            min="1"
          />
          {errors.hp && <span className={c.danger}>{errors.hp}</span>}

          <label className={c.text}>Attack</label>
          <input
            className={c.inputs}
            onChange={onInputChange}
            name="attack"
            type="number"
            min="1"
          />
          {errors.attack && <span className={c.danger}>{errors.attack}</span>}

          <label className={c.text}>Defense</label>
          <input
            className={c.inputs}
            onChange={onInputChange}
            name="defense"
            type="number"
          />
          {errors.defense && <span className={c.danger}>{errors.defense}</span>}

          <label className={c.text}>Velocity</label>
          <input
            className={c.inputs}
            onChange={onInputChange}
            name="velocity"
            type="number"
          />
          {errors.velocity && (
            <span className={c.danger}>{errors.velocity}</span>
          )}

          <label className={c.text}>Height</label>
          <input
            className={c.inputs}
            onChange={onInputChange}
            name="height"
            type="number"
          />
          {errors.height && <span className={c.danger}>{errors.height}</span>}

          <label className={c.text}>Weight</label>
          <input
            className={c.inputs}
            onChange={onInputChange}
            name="weight"
            type="number"
          />
          {errors.weight && <span className={c.danger}>{errors.weight}</span>}

          <label className={c.text}>Image</label>
          <input
            className={c.inputs}
            onChange={onInputChange}
            name="imageDefault"
            value={pokemon.imageDefault}
            type="text"
          />
          {errors.imageDefault && (
            <span className={c.danger}>{errors.imageDefault}</span>
          )}

          <label className={c.text}>Image Shiny</label>
          <input className={c.inputs} name="imageShiny" type="text" />

          <div>
            {pokemon.types?.map((type, i) => (
              <button
                key={i}
                name={type}
                className={c.btn_type}
                onClick={handleDeleteSelection}
              >
                {type}
              </button>
            ))}
          </div>

          {pokemon.types.length < 2 ? (
            <select
              name="types"
              id=""
              onChange={handleSelect}
              className={c.select}
            >
              <option value="" className={c.text}>
                Select Types
              </option>
              {types?.map((type, i) => {
                return (
                  <option key={i} value={type.name}>
                    {type.name}
                  </option>
                );
              })}
            </select>
          ) : (
            <p className={c.danger}>You can't add more than two types.</p>
          )}
          <input className={c.btn_submit} type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
