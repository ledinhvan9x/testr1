import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnimals } from 'redux/actionCreator';
import AnimalItem from 'components/AnimalItem/AnimalItem';
import { v4 as uuidv4 } from 'uuid';
import ReactPaginate from 'react-paginate';
import styles from './View.module.scss';

function View() {
  const [showButton, setShowButton] = useState(false);
  // HANDLE BUTTON BACK TO TOP
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  // HANDLE BUTTON BACK TO TOP

  const { isLoading } = useSelector((state) => state.animal);

  // HANDLE PAGINATION
  const [pageNumber, setPageNumber] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnimals());
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pageNumber]);

  const animals = useSelector((state) => state.animal.data);

  const animalsPerPage = 10;
  const pagesVisited = pageNumber * animalsPerPage;

  const showList = animals
    .slice(pagesVisited, pagesVisited + animalsPerPage)
    .map((animal) => <AnimalItem key={uuidv4()} animal={animal} />);

  const pageCount = Math.ceil(animals.length / animalsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  // HANDLE PAGINATION

  return (
    <div
      className={`${styles.container}`}
    >
      {isLoading ? (
        <div
          className={`${styles.container_loading}`}
        >
          <h1>Loading...</h1>
          <h2>Please wait !!!</h2>
        </div>
      ) : (
        <>
          <h1
            className={`${styles.title}`}
          >
            List of Animals
          </h1>
          <div className={`${styles.flex}`}>
            {showList}
            {showButton && (
            <button type="button" title="Back to top" onClick={scrollToTop} className={`${styles.back_to_top}`}>
              &#8679;
            </button>
            )}
            <ReactPaginate
              previousLabel="Prev"
              nextLabel="Next"
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName="paginationBttns"
              previousLinkClassName="previousBttn"
              nextLinkClassName="nextBttn"
              disabledClassName="paginationDisabled"
              activeClassName="paginationActive"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default memo(View);
