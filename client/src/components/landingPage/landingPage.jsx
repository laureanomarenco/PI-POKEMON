import pikachu from "../../assets/pikachu-two-gif.gif";
import dialog from "../../assets/dialog.png";
import l from "./landingPage.module.css";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTypes } from '../../store/actions';


export default function LandingPage() {
  // let dispatch = useDispatch();
  // useEffect(() => dispatch(fetchTypes()), [])
  return (
    <>
      <Link to="/home">
        <div className={l.background}>
          <div>
            <img className={l.pikachu} src={pikachu} alt="pokemon"></img>
            <img className={l.dialog} src={dialog} alt="pokemon"></img>
            <p className={l.text}>Welcome! <br /> Click to start...</p>
          </div>
          <h1 className={l.text_h1}>Pokemon</h1>
        </div>
      </Link>
    </>
  );
}
