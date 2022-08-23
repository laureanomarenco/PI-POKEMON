import React from "react";
import { ALL } from '../../constants/sort';
import { useSelector, useDispatch } from "react-redux";
import { filterByType } from '../../store/actions';

import f from './filterByType.module.css'

export default function FilterByType() {
  const pokemons = useSelector((state) => state.pokemons);
  let types0 = pokemons.map((p) => p.types[0]);
  let types1 = pokemons.map((p) => p.types[1]);
  let availableTypes = [...types0, ...types1];
  let uniqueRawTypes = [...new Set(availableTypes)];
  let uniqueTypes = uniqueRawTypes.filter((k) => k !== undefined);

  let dispatch = useDispatch();

  function onSelectChangeType(e) {
    dispatch(filterByType(e.target.value));
  }

  return (
    <>
      <select name="selectType" className={f.selector} onChange={onSelectChangeType}>
        <option className={f.text_order}>Type</option>
        <option className={f.text_order} value={ALL}>
          All
        </option>
        {uniqueTypes?.map((type, i) => {
          return (
            <option key={i} className={f.text_order} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </>
  );
}
