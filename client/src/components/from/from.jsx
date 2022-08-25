import { useDispatch } from "react-redux";
import {  API, DB } from '../../constants/from';
import { from } from '../../store/actions';

import f from './from.module.css';

export default function From() {
  let dispatch = useDispatch();

  function onCheckboxChange(e) {
    dispatch(from(e.target.value));
  }
  
  return (
    <>
      <label className={f.container} onChange={onCheckboxChange}>
        {/* <p className={f.text_order}>Filter from</p> */}
        <div>
          <label className={f.text_order}>api</label>
          <input name="from" value={API} type="radio" />
        </div>
        <div>
          <label className={f.text_order}>ddbb</label>
          <input name="from" value={DB} type="radio" />
        </div>
        <br></br>
      </label>
    </>
  );
}
