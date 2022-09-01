import p from './pagination.module.css';
import { setCurrentPage } from '../../store/actions';
import { useDispatch } from 'react-redux';

export default function Pagination({currentPage, max}) {
  let dispatch = useDispatch()
  function prevHandler(e) {
    e.preventDefault();
    if (currentPage > 1) {
      dispatch(setCurrentPage(-1));
    }
  }
  function nextHandler(e) {
    e.preventDefault();
    if (currentPage < max) {
      dispatch(setCurrentPage(1));
    }
  }
  return (
    <>
      <div className={p.container}>
        <button onClick={prevHandler} className={p.btn_pagination}>
          ◄
        </button>
        <span className={p.text}>
          Page {currentPage} of {max}
        </span>
        <button onClick={nextHandler} className={p.btn_pagination}>
          ►
        </button>
      </div>
    </>
  );
}
