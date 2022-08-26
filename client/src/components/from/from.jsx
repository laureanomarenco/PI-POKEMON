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
        <div>
          <label className={f.text_order}>api</label>
          <input className={f.check} name="from" value={API} type="checkbox" />
        </div>
        <div>
          <label className={f.text_order}>ddbb</label>
          <input className={f.check} name="from" value={DB} type="checkbox" />
        </div>
        <br></br>
      </label>
    </>
  );
}
