import { useDispatch } from 'react-redux';
import { ASCNAME, DESCNAME, ASCATTACK, DESCATTACK, DEF } from '../constants/sort';
import { sort } from '../store/actions';

export default function Order() {
    let dispatch = useDispatch();

    function onSelectChange(e){
        dispatch(sort(e.target.value))
    }

    return <>
    <select name="select" onChange={onSelectChange}>
        <option defaultValue={DEF}>Default order</option>
        <option value={ASCNAME}>Ascending order by name</option>
        <option value={DESCNAME}>Descending order by name</option>
        <option value={ASCATTACK}>Ascending order by attack</option>
        <option value={DESCATTACK}>Descending order by attack</option>
    </select>
    </>
}