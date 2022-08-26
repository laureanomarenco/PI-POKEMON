import Pokemons from '../pokemons/pokemons';
import NavBar from '../navBar/navBar.jsx';
import c from './home.module.css';

export default function Home() {
  return (
    <>
    <div className={c.background}>
      <NavBar />
      <Pokemons />
    </div>
    </>
  )
}