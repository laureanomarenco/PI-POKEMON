import "./App.css";
import LandingPage from "./components/landingPage.jsx";
import Pokemons from "./components/pokemons.jsx";
import CreatePokemon from "./components/createPokemon.jsx";
import PokemonDetails from "./components/pokemonDetails.jsx";
import SearchBar from "./components/searchBar.jsx";
import Order from "./components/order.jsx";
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
