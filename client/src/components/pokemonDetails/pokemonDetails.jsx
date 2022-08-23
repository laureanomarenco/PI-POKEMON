import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getPokemonDetails } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";

import downloading from '../../assets/downloading.png';
import p from "./pokemonDetails.module.css";

export default function PokemonDetails() {
  let detail = useSelector((state) => state.pokemonById);
  let { id } = useParams();
  let dispatch = useDispatch();
  useEffect(() => {
    //dispatch(fetchTypes())
    dispatch(getPokemonDetails(id));
  }, [dispatch, id]);

  return (
    <div className={p.background}>
      <div className={p.container}>
        {detail.length === 0 ? (
          <img className={p.downloading} src={downloading} alt="downloading" />
        ) : (
          <div className={p.card}>
            <p className={p.text_h4}>{detail.name}</p>
            <img
              className={p.image_pokemon}
              src={detail.imageDefault}
              alt="Pokemon imagen"
            />
            <div>
              <p className={p.text}>hp {detail.hp}</p>
              <p className={p.text}>attack {detail.attack}</p>
              <p className={p.text}>defense {detail.defense}</p>
              <p className={p.text}>velocity {detail.velocity}</p>
              <p className={p.text}>height {detail.height}</p>
              <p className={p.text}>weight {detail.weight}</p>
              <p className={p.text}>types</p>
            </div>
            {detail?.types?.map((t, i) => {
              return (
                <span key={i} className={p.text_types}>
                  {t}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
