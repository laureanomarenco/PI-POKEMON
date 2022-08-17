import { useParams } from "react-router-dom";
import { useEffect, useDispatch, useState } from "react";
import { getPokemonDetails } from "../store/actions";


export default function PokemonDetails() {
  const { id } = useParams()
  const [detail, setDetail] = useState()

  useEffect(() => {
      fetch(`http://localhost:3001/api/pokemons/${id}`)
      .then(r => r.json())
      .then((res) => {
        const poke = {
          name: res.data.name,
          hp: res.data.hp,
          attack: res.data.attack,
          defense: res.data.defense,
          velocity: res.data.velocity,
          height: res.data.height,
          weight: res.data.weight,
          imageDefault: res.data.imageDefault,
          imageShiny: res.data.imageShiny,
          types: res.data.types,
        }
        setDetail(poke)
      })
  },[id, setDetail])

  return (
    <div>{detail.name}</div>
  )
}
