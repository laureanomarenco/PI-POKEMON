import pikachu from "../../assets/pikachu-two-gif.gif";
import github from "../../assets/github.png";
import linkedin from "../../assets/in.png";
import l from "./landingPage.module.css";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cleanPokemons } from "../../store/actions";

export default function LandingPage() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(cleanPokemons());
  }, [dispatch]);

  return (
    <>
        <div className={l.background}>
      <Link to="/home">
          <h1 className={l.text_h1}>Pokemon</h1>
          <p className={l.text}>Welcome! <br /> Click to start...</p>
          <img className={l.pikachu} src={pikachu} alt="pokemon"></img>
      </Link>
        <p>This page is a searcher and viewer of pokemons developed with the <a href="https://pokeapi.co/">PokeApi,</a></p>
        <p>The project has been developed with: PostgreSQL, Sequelize, Express.js, Node.js, React and Redux.</p>
        <p>The styles were set with pure CSS.</p>
        <br />The project is carried forward by <a href="https://www.linkedin.com/in/laureano-marenco/"><b>Laureano Marenco</b></a>
        <p>Enjoy it!</p> 
        <div className={l.container}>
          <a href="https://www.linkedin.com/in/laureano-marenco/"><img className={l.linkedin} src={linkedin} alt="linkedin" /></a>
          <a href="https://github.com/laureanomarenco"><img className={l.github} src={github} alt="github" /></a>
        </div>
        </div>
    </>
  );
}
