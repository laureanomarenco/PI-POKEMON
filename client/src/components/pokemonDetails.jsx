import { useParams } from "react-router-dom";
import { useEffect, useDispatch, useState } from "react";
import { getPokemonDetails } from "../store/actions";

export default function PokemonDetails() {
  let { id } = useParams()
  let [detail, setDetail] = useState(null)
  let dispatch = useDispatch()
  useEffect(() => {
      dispatch(getPokemonDetails(id))
      .then((res) => {
          setDetail(res.payload)
      })
  },[])

  return (
    <div>{detail.name}</div>
  )
}
