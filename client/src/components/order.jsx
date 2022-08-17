import { useDispatch } from 'react-redux';
import { ASCNAME, DESCNAME, ASCATTACK, DESCATTACK } from '../constants/sort';
import {  API, DB } from '../constants/from'
import { sort } from '../store/actions';
import { from } from '../store/actions';

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
        <option>Change order</option>
        <option value={ASCNAME}>Ascending order by name</option>
        <option value={DESCNAME}>Descending order by name</option>
        <option value={ASCATTACK}>Ascending order by attack</option>
        <option value={DESCATTACK}>Descending order by attack</option>
    </select><br></br>
    <label onChange={onCheckboxChange}>
        <input name="from" value={API} type="radio" />API
        <input name="from" value={DB} type="radio" />DB<br></br>
    </label>
    </>
}