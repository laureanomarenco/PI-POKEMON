import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemons } from "../../store/actions";
import { Link } from 'react-router-dom';

import pokemon from "../../assets/pokemon.png";
import s from './searchBar.module.css'

export default function SearchBar() {
  const [search, setSearch] = useState("");
  let dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(searchPokemons(search));
  }
  function onInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <>
      <Link to='/home'>
        <h1 className={s.text_h1}>Pokemon</h1>
      </Link>
      <form onSubmit={onSubmit}>
        <input className={s.input} type="text" onChange={onInputChange} value={search} />
        <input className={s.btn_search} type="submit" value="Search" />
      </form>
    </>
  );
}
