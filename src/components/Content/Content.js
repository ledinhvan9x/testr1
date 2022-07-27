import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../pages/Home/Home.module.scss';

function Content() {
  return (
    <div className={`${styles.content}`}>
      <h1 className={`${styles.content_heading}`}>Animal!</h1>
      <p className={`${styles.content_paragraph}`}>
        Discover cute, wild, and weird animals using the search bar below, or
        scroll to see popular animal lists!
      </p>
      <NavLink
        to="/about"
        type="button"
        className={`${styles.btn}`}
      >
        Go about
      </NavLink>
    </div>
  );
}

export default memo(Content);
