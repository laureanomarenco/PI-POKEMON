import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createPokemon, fetchTypes } from "../../store/actions";
import validate from "./validate";
import c from "./createPokemon.module.css";

export default function CreatePokemon() {
  const colors = {
    normal:
      "radial-gradient(circle, #bebb93 0%, #96903f 100%)",
    fighting:
      "radial-gradient(circle, #da7f7f 0%, #bc0000 100%)",
    flying:
      "radial-gradient(circle, #ffffff 0%, #acfdff 100%)",
    poison:
      "radial-gradient(circle, #b084b8 0%, #8c4299 100%)", 
    ground:
      "radial-gradient(circle, #d4c399 0%, #aa7f13 100%)",
    rock: "radial-gradient(circle, #adadad 0%, #6a6a6a 100%)", 
    bug: "radial-gradient(circle, #ffebc3 0%, #f7ae20 100%)", 
    ghost:
      "radial-gradient(circle, #bfbfbf 0%, #ffffff 100%)", 
    steel:
      "radial-gradient(circle, #cacaca 0%, #979797 100%)", 
    fire: "radial-gradient(circle, #c99696 0%, #fe5959 100%)", 
    water:
      "radial-gradient(circle, #bfecff 0%, #61d0ff 100%)",
    grass:
      "radial-gradient(circle, #9ac198 0%, #439740 100%)",
    electric:
      "radial-gradient(circle, #fffec9 0%, #fffc00 100%)", 
    psychic:
      "radial-gradient(circle, #000000 0%, #ffffff 100%)",
    ice: "radial-gradient(circle, #8fddff 0%, #0079ad 100%)",
    dragon:
      "radial-gradient(circle, #e80000 0%, #4c0000 100%)",
    dark: "radial-gradient(circle, #5d5d5d 0%, #000000 100%)",
    fairy:
      "radial-gradient(circle, #e0b2db 0%, #d46bc9 100%)",
    unknown:
      "radial-gradient(circle, #ffffff 0%, #1b2094 100%)",
    shadow:
      "radial-gradient(circle, #000000 0%, #4e4e4e 100%)"
  };

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
  let history = useHistory()
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
    alert('Pokemon created, go back to see it');
    history.push('/')
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
          <div>
            {pokemon.types?.map((type, i) => (
              <button
                key={i}
                name={type}
                className={c.btn_type}
                style={{ backgroundImage: colors[type]}}
                onClick={handleDeleteSelection}
              >
                {type}
              </button>
            ))}
          </div>

          {pokemon.types.length < 2 && (
            <select
              name="types"
              id=""
              onChange={handleSelect}
              className={c.select}
            >
              <option value="" className={c.text}>
                Select Types
              </option>
              {types.lenght === 0 ? (<p>Searching types</p>) : types.map((type, i) => {
                return (
                  <option key={i} value={type.name}>
                    {type.name}
                  </option>
                );
              })}
            </select>
          )}
          <input className={c.btn_submit} type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}