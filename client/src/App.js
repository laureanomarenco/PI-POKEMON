import { Switch, Route } from "react-router-dom";

import LandingPage from "./components/landingPage/landingPage.jsx";
import Home from './components/home/home';
import PokemonDetails from "./components/pokemonDetails/pokemonDetails.jsx";
import CreatePokemon from "./components/createPokemon/createPokemon.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" >
        <LandingPage />
      </Route>
      <Switch>
        <Route path="/home">
          <Home />
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
