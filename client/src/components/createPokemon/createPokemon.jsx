import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { createPokemon, fetchTypes } from '../../store/actions';

import c from './createPokemon.module.css';

export default function CreatePokemon() {
  const [pokemon, setPokemon] = useState({
    name: null,
    hp: null,
    attack: null,
    defense: null,
    velocity: null,
    height: null,
    weight: null,
    imageDefault: null,
    imageShiny: null,
    types: []
  });

  let dispatch = useDispatch();
  useEffect(() => dispatch(fetchTypes()), [])

  //let history = useHistory();

  function onInputChange(e) {
    console.log(e.target.value)
    e.preventDefault();
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
      types: [
        ...pokemon.types,
        e.target.value
      ]
    })
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(createPokemon(pokemon))
    //history.push('/')
  }

  return (
    <>
    <Link to='/home'>
      <h1 className={c.text_h1}>Pokemon</h1>
    </Link>
    <form onSubmit={onSubmit}>
      <h3 className={c.text_h3}>Create a new Pokemon</h3>
      <label className={c.text}>Name</label>
      <input onChange={onInputChange} name="name" type="text" /><br></br>
      <label className={c.text}>HP</label>
      <input onChange={onInputChange} name="hp" type="text" /><br></br>
      <label className={c.text}>Attack</label>
      <input onChange={onInputChange} name="attack" type="text" /><br></br>
      <label className={c.text}>Defense</label>
      <input onChange={onInputChange} name="defense" type="text" /><br></br>
      <label className={c.text}>Velocity</label>
      <input onChange={onInputChange} name="velocity" type="text" /><br></br>
      <label className={c.text}>Height</label>
      <input onChange={onInputChange} name="height" type="text" /><br></br>
      <label className={c.text}>Weight</label>
      <input onChange={onInputChange} name="weight" type="text" /><br></br>
      <label className={c.text}>Image</label>
      <input onChange={onInputChange} name="imageDefault" type="text" /><br></br>
      <label className={c.text}>Image Shiny</label>
      <input  name="imageShiny" type="text" /><br></br>

      <label className={c.text}>Select Types</label><br />
      <button className={c.btn_text} name='types' value='normal' onClick={onInputChange}>normal</button>
      <button className={c.btn_text} name='types' value='fighting' onClick={onInputChange}>fighting</button>
      <button className={c.btn_text} name='types' value='flying' onClick={onInputChange}>flying</button>
      <button className={c.btn_text} name='types' value='poison' onClick={onInputChange}>poison</button>
      <button className={c.btn_text} name='types' value='ground' onClick={onInputChange}>ground</button>
      <button className={c.btn_text} name='types' value='rock' onClick={onInputChange}>rock</button>
      <button className={c.btn_text} name='types' value='ghost' onClick={onInputChange}>ghost</button>
      <button className={c.btn_text} name='types' value='steel' onClick={onInputChange}>steel</button>
      <button className={c.btn_text} name='types' value='fire' onClick={onInputChange}>fire</button>
      <button className={c.btn_text} name='types' value='water' onClick={onInputChange}>water</button>
      <br />
      <button className={c.btn_text} name='types' value='grass' onClick={onInputChange}>grass</button>
      <button className={c.btn_text} name='types' value='electric' onClick={onInputChange}>electric</button>
      <button className={c.btn_text} name='types' value='psychic' onClick={onInputChange}>psychic</button>
      <button className={c.btn_text} name='types' value='ice' onClick={onInputChange}>ice</button>
      <button className={c.btn_text} name='types' value='dragon' onClick={onInputChange}>dragon</button>
      <button className={c.btn_text} name='types' value='dark' onClick={onInputChange}>dark</button>
      <button className={c.btn_text} name='types' value='fairy' onClick={onInputChange}>fairy</button>
      <button className={c.btn_text} name='types' value='unknown' onClick={onInputChange}>unknown</button>
      <button className={c.btn_text} name='types' value='shadow' onClick={onInputChange}>shadow</button>
      <br></br>
      <input className={c.btn_submit} type="submit" value="Submit" />
    </form>
    </>
  );
}
