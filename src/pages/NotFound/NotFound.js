import { NavLink, useNavigate } from 'react-router-dom';
import { memo, useEffect } from 'react';
import styles from './NotFound.module.scss';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, []);

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.wrapper_inner}`}>
        <h1 className={`${styles.heading}`}>404</h1>
        <p className="">
          {' '}
          <span
            className={`${styles.text_danger}`}
          >
            Opps!
            {' '}
          </span>
          Page not found.
        </p>
        <p className="">The page you&#39;re looking for doesn’t exist.</p>
        <NavLink to="/" className={`${styles.btn}`}>
          Go Home
        </NavLink>
      </div>
    </div>
  );
}

export default memo(NotFound);
