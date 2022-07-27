import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './About.module.scss';

function About() {
  return (
    <div className={`${styles.container_fluid}`}>
      <div className={`${styles.container}`}>
        <h1 className={`${styles.text_heading}`}>About Us</h1>
        <p className={`${styles.text_paragraph}`}>
          A-Z Animals is the world&#39;s most trusted online animal
          encyclopedia. If you want cute animals, types of wild animals, exotic
          pets, weird animals or are looking for comprehensive pet guides for
          dogs and cats, you&#39;ll find it here! Animals are multicellular
          eukaryotes whose cells are bound together by collagen. Animals
          dominate human conceptions of life on Earth because of their size,
          diversity, abundance, and mobility.
        </p>
        <NavLink
          to="/"
          type="button"
          className={`${styles.btn} ${styles.btn_custom}`}
        >
          Go home
        </NavLink>
      </div>
    </div>
  );
}

export default memo(About);
