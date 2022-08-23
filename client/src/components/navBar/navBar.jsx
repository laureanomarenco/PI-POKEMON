import { Link } from "react-router-dom";

import FilterByType from "../filterByType/filterByType.jsx";
import From from "../from/from.jsx";
import Order from "../order/order.jsx";
import SearchBar from "../searchBar/searchBar.jsx";
import n from './navBar.module.css';

export default function NavBar() {
  return (
    <>
      <Link to="/home">
        <h1 className={n.text_h1}>Pokemon</h1>
      </Link>
      <div className={n.container}>
        <div className={n.g1}>
          <Order />
          <FilterByType />
        </div>
        <div className={n.g2}>
          <SearchBar />
        </div>
        <From />
      </div>
      <Link to="/createPokemon">
        <button className={n.btn_create}>CREATE POKEMON</button>
      </Link>
    </>
  );
}
