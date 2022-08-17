import pokemon from "../assets/pokemon.png";

import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <>
    <Link to='/home'>
    <div>
        <img src={pokemon} alt="pokemon"></img>
      </div>
    </Link>
    </>
  );
}
