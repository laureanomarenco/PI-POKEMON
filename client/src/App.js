import "./App.css";
import LandingPage from "./components/landingPage/landingPage.jsx";
import Pokemons from "./components/pokemons/pokemons.jsx";
import CreatePokemon from "./components/createPokemon/createPokemon.jsx";
import PokemonDetails from "./components/pokemonDetails/pokemonDetails.jsx";
import SearchBar from "./components/searchBar/searchBar.jsx";
import Order from "./components/order/order.jsx";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" >
        <LandingPage />
      </Route>
      <Switch>
        <Route path="/home">
          <SearchBar />
          <Order />
          <Pokemons />
        </Route>
        <Route path="/pokemonDetails/:id">
          <PokemonDetails />
        </Route>
        <Route path="/createPokemon">
          <CreatePokemon />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
