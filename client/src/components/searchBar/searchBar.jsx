import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemons } from "../../store/actions";

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
      <form className={s.container} onSubmit={onSubmit}>
        <input className={s.input} type="text" onChange={onInputChange} value={search} placeholder=' Search pokemon' />
        <input className={s.btn_search} type="submit" value="Search" />
      </form>
    </>
  );
}
