import axios from 'axios';
import { useState, useHistory } from 'react';
// DEVUELVE UN 500 AUNQUE CARGA EL POKEMON
export default function CreatePokemon() {
  const [pokemon, setPokemon] = useState({});
  //let history = useHistory();

  function onInputChange(e) {
    e.preventDefault();
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value
    })
  }
  
  function onSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:3001/api/pokemons', pokemon)
    .then(() => {
      //history.push('/')
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Create a new Pokemon</h2>
      <label>Name</label>
      <input onChange={onInputChange} name="name" type="text" /><br></br>
      <label>HP</label>
      <input onChange={onInputChange} name="hp" type="text" /><br></br>
      <label>Attack</label>
      <input onChange={onInputChange} name="attack" type="text" /><br></br>
      <label>Defense</label>
      <input onChange={onInputChange} name="defense" type="text" /><br></br>
      <label>Velocity</label>
      <input onChange={onInputChange} name="velocity" type="text" /><br></br>
      <label>Height</label>
      <input onChange={onInputChange} name="height" type="text" /><br></br>
      <label>Weight</label>
      <input onChange={onInputChange} name="weight" type="text" /><br></br>
      <label>Image</label>
      <input onChange={onInputChange} name="imageDefault" type="text" /><br></br>
      <label>Image Shiny</label>
      <input onChange={onInputChange} name="imageShiny" type="text" /><br></br>
      <input type="checkbox" value="normal" /> normal
      <input type="checkbox" value="fighting" /> fighting
      <input type="checkbox" value="flying" /> flying
      <input type="checkbox" value="poison" /> poison
      <input type="checkbox" value="ground" /> ground
      <input type="checkbox" value="rock" /> rock
      <input type="checkbox" value="ghost" /> ghost
      <input type="checkbox" value="steel" /> steel
      <input type="checkbox" value="fire" /> fire
      <input type="checkbox" value="water" /> water
      <br></br>
      <input type="checkbox" value="grass" /> grass
      <input type="checkbox" value="electric" /> electric
      <input type="checkbox" value="psychic" /> psychic
      <input type="checkbox" value="ice" /> ice
      <input type="checkbox" value="dragon" /> dragon
      <input type="checkbox" value="dark" /> dark
      <input type="checkbox" value="fairy" /> fairy
      <input type="checkbox" value="unknown" /> unknown
      <input type="checkbox" value="shadow" /> shadow
      <br></br>
      <input type="submit" value="Submit" />
    </form>
  );
}
