import p from './pagination.module.css';

export default function Pagination({currentPage, setCurrentPage, max}) {
  function prevHandler(e) {
    e.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextHandler(e) {
    e.preventDefault();
    if (currentPage < max) {
      setCurrentPage(currentPage + 1);
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
