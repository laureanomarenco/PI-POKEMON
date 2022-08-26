import { useDispatch } from 'react-redux';
import { ASCNAME, DESCNAME, ASCATTACK, DESCATTACK } from '../../constants/sort';
import { sort } from '../../store/actions';

import o from './order.module.css'

export default function Order() {
    let dispatch = useDispatch();

    function onSelectChange(e){
        dispatch(sort(e.target.value))
    }

    return <>
    <select className={o.selector} name="select" onChange={onSelectChange}>
        <option className={o.text_order}>Order</option>
        <option className={o.text_order} value={ASCNAME}>Ascending order by name</option>
        <option className={o.text_order} value={DESCNAME}>Descending order by name</option>
        <option className={o.text_order} value={ASCATTACK}>Ascending order by attack</option>
        <option className={o.text_order} value={DESCATTACK}>Descending order by attack</option>
    </select><br></br>
    </>
}