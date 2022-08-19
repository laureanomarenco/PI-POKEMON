import { useDispatch } from 'react-redux';
import { ASCNAME, DESCNAME, ASCATTACK, DESCATTACK } from '../../constants/sort';
import {  API, DB } from '../../constants/from'
import { sort } from '../../store/actions';
import { from } from '../../store/actions';

import o from './order.module.css'

export default function Order() {
    let dispatch = useDispatch();

    function onSelectChange(e){
        dispatch(sort(e.target.value))
    }

    function onCheckboxChange(e){
        dispatch(from(e.target.value))
    }
    return <>
    <select name="select" onChange={onSelectChange}>
        <option className={o.text_order}>Change order</option>
        <option className={o.text_order} value={ASCNAME}>Ascending order by name</option>
        <option className={o.text_order} value={DESCNAME}>Descending order by name</option>
        <option className={o.text_order} value={ASCATTACK}>Ascending order by attack</option>
        <option className={o.text_order} value={DESCATTACK}>Descending order by attack</option>
    </select><br></br>
    <label onChange={onCheckboxChange}>
        <label className={o.text_order}>api</label>
        <input name="from" value={API} type="radio" />
        <label className={o.text_order}>database</label>
        <input name="from" value={DB} type="radio" /><br></br>
    </label>
    </>
}